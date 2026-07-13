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
                { key: "/authors/OL6976354A", name: "Erin Morgenstern" }
            ],
            bookCovers: ["14579344"],
            date: new Date()
        },
        {
            // id: 2,
            status: "reading",
            title: "Project Hail Mary",
            bookKey: "/works/OL21745884W",
            authors: [
                { key: "/authors/OL7234434A", name: "Andy Weir" }
            ],
            bookCovers: ["15208263"],
            date: new Date()
        },
        {
            // id: 3,
            status: "read",
            title: "The Hobbit",
            bookKey: "/works/OL27482W",
            authors: [
                { key: "/authors/OL26320A", name: "J.R.R. Tolkien" }
            ],
            bookCovers: ["15223072"],
            date: new Date()
        },
        {
            // id: 4,
            status: "dnf",
            title: "Infinite Jest",
            bookKey: "/works/OL2943602W",
            authors: [
                { key: "/authors/OL448939A", name: "David Foster Wallace" }
            ],
            bookCovers: ["13186006"],
            date: new Date()
        },
        {
            status: "read",
            title: "Ready Player One",
            bookKey: "/works/OL15936512W",
            authors: [
                { key: "/authors/OL6941868A", name: "Ernest Cline" }
            ],
            bookCovers: ["8737626", "8270105", "7023280", "7890580", "7887628", "8750149", "10870287", "10870290", "12535556", "8464095", "13218398", "10517265", "8494518", "12369565", "9367521"],
            date: new Date()
        },
        {
            status: "want_to_read",
            title: "Snowglobe",
            bookKey: "/works/OL37564271W",
            authors: [
                { key: "/authors/OL13511813A", name: "Soyoung Park" },
                { key: "/authors/OL7849604A", name: "Joungmin Lee Comfort" }
            ],
            bookCovers: ["14580611"],
            date: new Date()
        }
    ])
}

