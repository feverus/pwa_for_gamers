import '../styles/renderDice.css'

type P = {value: number, type: number}

export default function RenderDice({value, type}:P) {
	return (
		<div className={"dice dice-" + type + "-" + value + " " +"diceToBlue"}>
			{(type!==6)? value +"из"+ type:"" }
		</div>
	);
}