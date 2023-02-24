import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./ReadAll.css"

function ReadAll(){
    
        const [itens, setItems] = useState([]);

        async function realizarRequisicao(){
           // const url = "http://localhost:3000/item";
            const url = "https://back-rick-cards.onrender.com";
            const response = await fetch(url);
            const data = await response.json();  
            setItems(data);
        }
        
        
        useEffect(function(){
            realizarRequisicao();
        }, []);

        return (<div className="ReadAll"> 
            {itens.map(function(item){
                return <Card key={'card' + item._id} item={item}/>;
            })}
        </div>);
    
    
}

export default ReadAll;