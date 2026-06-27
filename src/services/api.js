// Open Library (openlibrary.org)
// API Documentation: https://openlibrary.org/developers/api
// REST (Representational State Transfer) API

const BASE_URL = "https://openlibrary.org";

// Asynchronous operations/tasks that takes time and mandates a Promise (give data eventually) to be returned

export const getTrendingBooks = async () => {
	/*
	1. Send request to URL (Open Library API) and asks server for data
	2. await mandates to not move to the next line of code until the server sends a response back
	3. Store response in response variable (info about request e.g., status codes)
	4. Convert response (raw text data) into a JavaScript object (JSON object) to be easily used
	*/
	const response = await fetch(`${BASE_URL}/trending/weekly.json?limit=10&language=eng`);
	const data = await response.json();
	return (data.works);
};

export const searchBooks = async (query) => {
	const response = await fetch(`${BASE_URL}/search.json?q=${encodeURIComponent(query)}&limit=10&language=eng&mode=everything`);
	const data = await response.json();
	return (data.docs);
};

export const getAuthor = async (author_key) => {
	const response = await fetch(`${BASE_URL}/authors/${author_key}.json`);

	if (!response.ok) { // Response validation (e.g., error 404)
		throw new Error(`Unable to find a author with ID ${author_key}.`);
	}

	const data = await response.json();
	return (data);
}