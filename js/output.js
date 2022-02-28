const outputDateCalc = document.getElementById('dateCalc'),
	timerOutput = document.getElementById('timer');

export const outputCalc = () => {
	outputDateCalc.classList.toggle("display__none");
}
export const outputTimer = () => {
	timerOutput.classList.toggle("display__none");
}