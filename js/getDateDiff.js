import { DateTime } from 'https://moment.github.io/luxon/es6/luxon.min.js';

function getDateDiff(dateFrom, dateTo) {

	const dateFromObject = DateTime.fromISO(dateFrom)
	const dateToObject = DateTime.fromISO(dateTo)

	return dateToObject.diff(dateFromObject, ['years', 'months', 'days']).toObject()
}

export default getDateDiff;