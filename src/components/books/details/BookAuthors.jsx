export default function BookAuthors({names, ids}) {
    return (
        <>
            {names?.map((name, i) => (
                <span key={i}>
                    <a
                        href={`${ids?.[i]}`}>
                        {name}
                    </a>
                    {i < names.length - 1 && ", "}
                </span>
            ))}
        </>
    );
}