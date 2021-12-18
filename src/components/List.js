const List = ({ items }) => {
    return (
        <ul>
            {items.map(({name}, index) => 
                <li key={`key-${index}`} className="list">{name.common}</li>
            )}
        </ul>
    );
}

export default List;
