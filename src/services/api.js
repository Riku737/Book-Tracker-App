// Open Library (openlibrary.org)
// API Documentation: https://openlibrary.org/developers/api
// REST (Representational State Transfer) API

const BASE_URL = "https://openlibrary.org";

// Asynchronous operations/tasks that takes time and mandates a Promise (give data eventually) to be returned

export async function getTrendingBooks() {
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

export async function searchBooks(query) {
	const response = await fetch(`${BASE_URL}/search.json?q=${encodeURIComponent(query)}&limit=10&language=eng&mode=everything`);
	const data = await response.json();
	return (data.docs);
};

export async function getAuthor(author_key) {
	const response = await fetch(`${BASE_URL}/authors/${author_key}.json`);

	if (!response.ok) { // Response validation (e.g., error 404)
		throw new Error(`Unable to find a author with ID ${author_key}.`);
	}

	const data = await response.json();
	// console.log(data)
	return (data);
}

export async function getAuthorName (authors) {

	const author_info = [];

	for (const author of authors) {
		// console.log(author);
		const response = await fetch(`${BASE_URL}${author.author.key}.json`);
		const data = await response.json();
		author_info.push({"key": data.key, "name": data.name});
	}

	return (author_info);
}

export async function getBook (book_key) {
	const response = await fetch(`${BASE_URL}/works/${book_key}.json`);

	if (!response.ok) { // Response validation (e.g., error 404)
		throw new Error(`Unable to find a book with ID ${book_key}.`);
	}

	const data = await response.json();
	// console.log(data)
	return (data);
}

export async function getAuthorBooks(author_key){
	const response = await fetch(`${BASE_URL}/authors/${author_key}/works.json?limit=10`);

	if (!response.ok) { // Response validation (e.g., error 404)
		throw new Error(`Unable to find an author with ID ${author_key}.`);
	}

	const data = await response.json();
	// console.log(data)
	return (data.entries);
}