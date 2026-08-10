![ReadmeThumbnail0.png](docs/ReadmeThumbnail0.png)
# BookBook: Book Tracker App
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=000)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=000)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=fff)
![Dexie.js](https://img.shields.io/badge/Dexie.js-3A3A3A?style=for-the-badge&logo=dexie&logoColor=fff)
![Open Library API](https://img.shields.io/badge/Open%20Library%20API-3D8B3D?style=for-the-badge&logo=openlibrary&logoColor=fff)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=fff)
![SASS](https://img.shields.io/badge/SASS-CC6699?style=for-the-badge&logo=sass&logoColor=fff)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=fff)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=fff)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=fff)

Search for books, add them to your reading lists, and keep track of your progress.
___

## Features
* Built with **ReactJS + Vite** using modern **JavaScript**, **React Hooks**, and **React Router DOM** for dynamic routes and query-based navigation.
* Search by title/author via the **Open Library API**, with helper-based fetching and request-limit-aware handling.
* Track books in four shelves (**Want to Read, Currently Reading, Read, Did Not Finish**) with seamless move/remove actions.
* Styled using **Bootstrap** components customized with **Sass/CSS** (plus **HTML/CSS** foundations and Google Fonts).
* Better UX through loading skeletons, edge/error states, and read more/read less descriptions.
* Uses **Dexie.js** (**IndexedDB**) for local persistence with seed/helper utilities, and is deployed on **Vercel**.

___

## Demo
A live demo of the app is available at [bookbook-demo.vercel.app](https://bookbook-demo.vercel.app/).

![ReadmeThumbnail1.png](docs/ReadmeThumbnail1.png)
![ReadmeThumbnail2.png](docs/ReadmeThumbnail2.png)
![ReadmeThumbnail3.png](docs/ReadmeThumbnail3.png)
___

## Installation

1. Clone the repo
```
git clone https://github.com/Riku737/Book-Tracker-App.git
cd Book-Tracker-App
```
2. Install dependencies
```
npm install
```
3. Start the development server
```
npm run dev
```
4. Open your browser at the port printed by the dev server (e.g., http://localhost:3000).
___

## Project Structure
```
/public
/src
    /assets
    /components         # UI components
    /db
        database.js     # Database set-up
        seeder.js       # Initial database data
    /pages         
    /services           # API calls to Open Library
    /styles             # SCSS / CSS
    App.jsx
    main.jsx
package.json
README.md
```

---

## Disclaimer

This app is a personal, non‑commercial project built solely for learning and portfolio purposes. It is not affiliated with or endorsed by any orgniazation, and it is not intended for real users or practical use. The project exists only as a way to experiment, practice, and develop new skills.

All book information and cover images are sourced from the Open Library API, and all trademarks belong to their respective owners.

No personal data is collected, stored, or transmitted. Any data saved in your browser (via IndexedDB/Dexie.js) remains entirely on your device.