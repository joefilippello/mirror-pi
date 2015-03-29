var settings = {
	common: {
		daysOfWeek: ["sun", "mon", "tue", "wed", "thu", "fri", "sat", "sun"]
	},
	calendar: {
		firstDayOfWeek: 0, // Sunday = 0, Monday = 1
		monthsOfYear: ["January", "February", "March", "April", "May", "June",
			"July", "August", "September", "October", "November", "December"]
	},
	weather: {
		city: "Indianapolis",
		countryCode: "US",
		unitType: "imperial", // "metric" or "imperial"
		forecastDays: 5, // max 5
		refreshInterval: 5 // measured in minutes
	},
	feed: {
		url: "http://rssfeeds.indystar.com/indystar/todaystopstories",
		title: "",
		entryCount: 30,
		timeout: 10
	}
};
