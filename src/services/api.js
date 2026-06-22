// Open Library (openlibrary.org)
// API Documentation: https://openlibrary.org/developers/api

const BASE_URL = "https://openlibrary.org";

export const getTrendingBooks = async () => {
	const response = await fetch(
		`${BASE_URL}/trending/weekly.json?limit=10&language=eng`,
	);
	const data = await response.json();
	return data.works;
};

export const searchBooks = async (query) => {
	const response = await fetch(
		`${BASE_URL}/search.json?q=${encodeURIComponent(query)}&limit=10&language=eng&mode=everything`,
	);
	const data = await response.json();
	return data.docs;
};
