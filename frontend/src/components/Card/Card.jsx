import "./Card.css"

function Card(props){
    const item = props.item;
    return <div className="Card">
        <h1>{item.name}</h1>
        <div className="Personagem">
            <img src={item.url}></img>
        </div>
        
</div>
}

export default Card;