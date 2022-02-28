const result = document.getElementById('datecalc_result');

export const printError = (errText) => {
	result.innerText = errText
}

export const printResult = ({ years, months, days }) => {
	result.innerText = `Год: ${years} Месяц: ${months} День: ${days}`
}