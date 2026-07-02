import { Dexie } from "dexie";

export const database = new Dexie("MyBookshelf");

/*
Status:
- Want to Read
- Currently Reading
- Read
- Did Not Finish
*/

database.version(1).stores({
    books: '++id, status, title, bookID, author, authorID, bookCoverID',
});

database.on("populate", () => {
    database.books.bulkAdd([
        {
            id: 1,
            status: "want_to_read",
            title: "The Night Circus",
            bookID: "OL25427406M",
            author: "Erin Morgenstern",
            authorID: "OL1526575A",
            bookCoverID: 10521282
        },
        {
            id: 2,
            status: "reading",
            title: "Project Hail Mary",
            bookID: "OL30677841M",
            author: "Andy Weir",
            authorID: "OL7335730A",
            bookCoverID: 11148565
        },
        {
            id: 3,
            status: "read",
            title: "The Hobbit",
            bookID: "OL26331930M",
            author: "J.R.R. Tolkien",
            authorID: "OL26320A",
            bookCoverID: 10594763
        },
        {
            id: 4,
            status: "dnf",
            title: "Infinite Jest",
            bookID: "OL22853365M",
            author: "David Foster Wallace",
            authorID: "OL262283A",
            bookCoverID: 8231996
        }
    ])
})