import './css/App.css';
import { Routes, Route } from "react-router-dom";

// Components
import NavBar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer.jsx';

// Pages
import Home from './pages/Home';
import Book from "./pages/Book";
import Author from "./pages/Author";
import Bookshelf from "./pages/Bookshelf.jsx";
import Search from "./pages/Search.jsx";
import Subject from "./pages/Subject.jsx";

export default function App() {

	return (
		<>
			<NavBar />

			<div className="container my-5">

				<Routes>

					{/*Home*/}
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />

					{/*Search*/}
					<Route path="/search" element={<Search />} />

					{/*Books*/}
					<Route path="/books" element={<Book />} />
					<Route path="/books/:id" element={<Book />} />

					{/*Subjects*/}
					<Route path='/subjects' element={<Subject />} />
					<Route path="/subjects/:subject" element={<Subject />} />

					{/*Authors*/}
					<Route path="/authors" element={<Home />} />
					<Route path="/authors/:id" element={<Author />} />

					{/*Bookshelf*/}
					<Route path='/bookshelf' element={<Bookshelf />} />
					<Route path="/bookshelf/:status" element={<Bookshelf />} />

				</Routes>

			</div>

			<Footer />
		</>
	);
}