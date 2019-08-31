import React from 'react';
import './cardlist.styles.css'
import Card from '../card/card.component'

export const Cardlist = (props) => {
    console.log(props);

return (<div className='card-list'>
        { /*  {props.children}
       props.children. Children are whats passed inbetween the brackets of the component. ex: <Component> children stuff goes here < /Component> */ }

       { props.characters.map( character => 
           <Card 
           key={character.name} 
           character = {character} 
          
           />

         )  
        }
</div>)
}