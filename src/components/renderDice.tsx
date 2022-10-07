import '../styles/renderDice.css'

type P = {value: number, type: number}

export default function RenderDice({value, type}:P) {
	let colorCorrection = ""
	if (type===6) {colorCorrection = " diceToBlue"}
	return (
		<div className={"dice dice-" + type + "-" + value + colorCorrection}>
			{(type===12)? value:"" }
		</div>
	);
}