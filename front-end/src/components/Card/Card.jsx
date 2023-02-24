import "./Card.css"

function Card(props){
    const item = props.item;
    return (
        <div className="Card">
            <h1>{item.name}</h1>
            {/* Renderização condicional do elemento tags */}
            {item.tags && (
                <div className="Personagem">
                    <div className="tag-wrapper">
                        {item.tags.map(function(tag, index){
                            return (<div key={`tag-${index}`} className="tag">{tag}</div>);
                        })}
                    </div>
                    
                </div>)
            }
            <img src={item.url}></img>
        </div>
        
    );
}
export default Card;