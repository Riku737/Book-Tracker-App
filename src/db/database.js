import { Dexie } from "dexie";
import { seedDatabase } from './seeder.js'

export const db = new Dexie("MyBookshelf");

/*
Status:
- Want to Read => want_to_read
- Currently Reading => reading
- Read => read
- Did Not Finish => dnf
*/

db.version(1).stores({
    books: '++id, status, title, bookKey, authors, bookCovers',
});

export const databaseReady = initializeDatabase();

// Add book to bookshelf (and modify status of existing book)
export async function addToBookshelf(status, title, bookKey, authors, bookCovers) {

    const existingBook = await db.books.where("bookKey").equals(bookKey).first();
    const bookData = { status, title, bookKey, authors, bookCovers };

    if (existingBook) {
        return db.books.update(existingBook.id, bookData);
    }

    return db.books.add(bookData);
}

// Return books where book = specified status
export function getBooksByStatus(status) {
    return db.books.where({ status }).toArray();
}

// Completely clear and reseed the database
export async function resetDatabase() {
    db.close();
    await db.delete();
    await db.open();
    await seedDatabase();
}

// Reseed the database when zero books
async function initializeDatabase() {
    await db.open();

    const bookCount = await db.books.count();
    if (bookCount === 0) {
        await seedDatabase();
    } else {
        resetDatabase(); // Reset entire database on load (tentative)
    }
}
