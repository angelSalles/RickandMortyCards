import Card from "../Card/Card";
import "./ReadAll.css"

function ReadAll(){
    
    const itens = [
        {
            _id: '1',
            name: 'Rick Sanchez',
            url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
        },
        {
            _id: '2',
            name: 'Morty Smith',
            url: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
        },
        {
            _id: '3',
            name: 'Summer Smith',
            url: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
        },
        {
            _id: '4',
            name: 'Beth Smith',
            url: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
        },
        {
            _id: '5',
            name: 'Jerry Smith',
            url: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
        },

    ];

        return <div className="ReadAll"> 
            {itens.map(function(item){
                return <Card key={'card' + item._id} item={item}/>;
            })}
        </div>
    
    
}

export default ReadAll;