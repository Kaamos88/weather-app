const date = new Date();

const now = (date) => {
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	return [formatDay(day) + '.', formaMonth(month + 1) + '.', year];
};

const formatDay = (day) => {
	if (day < 10) {
		return '0' + day;
	}
};

const formaMonth = (month) => {
	if (month < 10) {
		return '0' + month;
	}
};

const today = now(date);

export default today;
