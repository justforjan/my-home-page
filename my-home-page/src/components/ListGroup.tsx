import { MouseEvent } from "react";

function ListGroup() {

    let items = [
        'Berlin',
        'Barcelona',
        'Paris',
        'Warsaw'
    ];

    
    const handleClick = (event: MouseEvent) => console.log(event);



    return (
    <>
        <h1 className="">List Title</h1>
        { items.length === 0 && <p> No item found</p>}
        <ul className="text-red-600">
            {items.map((item, index) => <li key={item} onClick={handleClick}>{item}</li>)}
        </ul>
    </>
    );
}

export default ListGroup;