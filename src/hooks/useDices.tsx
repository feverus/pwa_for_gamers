import { useState, useEffect } from 'react'

type ControlCallback = () => void
type UseDices = (
					count: number,
					type: number
				) => [
						state: {
							dicesArr: Array<number>;
							animationsArr: Array<number>;
							showed: boolean;
							history: Array<Array<number>>;
						},
						api: {
							newDices: ControlCallback;
						}
				]

export const useDices: UseDices = (count, type) => {
	const [dicesArr, cast] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
	const [animationsArr, shake] = useState([0]);
	const [showed, show] = useState(true);
	const [history, addToHistory] = useState([[0]]);

	useEffect(() => {
			generate();
		},
		[])

	const generate = () => {
		let arrDices: Array<number> = [];
		for (let i = 0; i < count; i++) {
			let newValue = Math.round(Math.random() * (type - 1) + 1)
			if (type === 2) newValue--
			arrDices.push(newValue)
		}
		let arrAnim: Array<number> = [];
		for (let i = 0; i < count; i++) {
			arrAnim.push(Math.round(Math.random() * 9 + 1))
		}

		let newHistory: Array<Array<number>>;
		if (history[0].length === 1) {
			console.dir("history - 0")
			newHistory = [arrDices]
		} else {
			console.dir("history - 1")
			newHistory = [arrDices].concat(history)
		}

		cast(arrDices)
		shake(arrAnim)
		show(true)
		addToHistory(newHistory)
	}

	const newDices = () => {
		console.log("newDices");
		show(false);

		setTimeout(generate, 1000);
	}

	const state = {
		dicesArr,
		animationsArr,
		showed,
		history
	};

	const api = {
		newDices,
	}

	return [state, api];
}