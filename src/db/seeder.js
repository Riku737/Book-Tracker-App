import {db} from "./database.js";

// Initialize database with updated data structure
export async function seedDatabase() {
    // db.on("populate") was removed because it runs only once in the entire lifetime of the DB
    await db.books.bulkAdd([
        {
            // id: 1,
            status: "want_to_read",
            title: "The Night Circus",
            bookKey: "/works/OL16086747W",
            authors: [
                { key: "/authors/OL6976354W", name: "Erin Morgenstern" }
            ],
            bookCovers: ["14579344"]
        },
        {
            // id: 2,
            status: "reading",
            title: "Project Hail Mary",
            bookKey: "/works/OL21745884W",
            authors: [
                { key: "/authors/OL7234434A", name: "Andy Weir" }
            ],
            bookCovers: ["15208263"]
        },
        {
            // id: 3,
            status: "read",
            title: "The Hobbit",
            bookKey: "/works/OL27482W",
            authors: [
                { key: "/authors/OL26320A", name: "J.R.R. Tolkien" }
            ],
            bookCovers: ["15223072"]
        },
        {
            // id: 4,
            status: "dnf",
            title: "Infinite Jest",
            bookKey: "/works/OL2943602W",
            authors: [
                { key: "/authors/OL448939A", name: "David Foster Wallace" }
            ],
            bookCovers: ["13186006"]
        }
    ])
}

