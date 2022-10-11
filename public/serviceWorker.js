const CACHE_NAME = 'version-1'
const urlsToCache = [
'index.html',
'offline.html',
]

const self = this

self.addEventListener('install', (evt) => {
  evt.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(
        (cache) => cache.addAll(urlsToCache)
      )
  )
})

self.addEventListener('fetch', (evt) => {
  evt.respondWith(
    caches
      .match(evt.request)
      .then(
        (response) => {
          return response || fetch(evt.request)
            .then(async res => {
              const cache = await caches.open('dynamic')
              cache.put(evt.request.url, res.clone())
              return res
            })
        }        
      )
      .catch(        
        () => {  
          if (evt.request.destination==='document') {
            caches        
              .match('offline.html')
              .then (console.log(evt.request))
          }

        }
      )         
  )
})

self.addEventListener('activate', (evt) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)
  cacheWhiteList.push('dynamic')
  evt.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((item) => {
          if (!cacheWhiteList.includes(item)) {
            return caches.delete(item)
          }
          return item
        })
      )
    )
  )
})