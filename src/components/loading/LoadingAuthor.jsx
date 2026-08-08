import PlaceholderBookCard from "./PlaceholderBookCard.jsx";

export default function LoadingAuthor() {

    const items = [];

    for (let i = 0; i < 10; i++) {
        items.push(<PlaceholderBookCard key={i} item={items[i]} />);
    }

    return(
        <section>
            <div className="placeholder-glow w-100 d-flex flex-column">
                <h1 className="placeholder w-50 mb-3"></h1>
                <p className="placeholder w-100 mb-1"></p>
                <p className="placeholder w-100"></p>
            </div>
            <div className="row g-4 mt-4">
                {items}
            </div>
        </section>
    );
}