import './css/App.css';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home';

import NavBar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer.jsx';

import Book from "./pages/Book";
import Author from "./pages/Author";

import Bookshelf from "./pages/Bookshelf.jsx";

export default function App() {

	return (
		<>
			<NavBar />

			<div className="container my-5">

				<Routes>

					<Route path="/" element={<Home />} />

					<Route path="/books" element={<Book />} />

					<Route path="/books/:id" element={<Book />} />

					<Route path="/authors" element={<Home />} />

					<Route path="/authors/:id" element={<Author />} />

					<Route path='/bookshelf' element={<Bookshelf />} />
					<Route path="/bookshelf/:bookshelfStatus" element={<Bookshelf />} />

				</Routes>

			</div>

			<Footer />
		</>
	);
}