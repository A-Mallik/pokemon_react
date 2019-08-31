import React,{Component} from 'react';
import './App.css';
import {Cardlist} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component { // using Class Component gives us access to state. What is state? JS object with properties that we can access at any point in our class.
// API:  
//Lifecycle Methods: Methods that get called at different states automatically by React when this component gets rendered.

  constructor(){
    super(); //extending on functionality of components from react

    this.state={
      characters: [
     
      ]
      ,
      searchField: ''
    }

    //handleChange = this.handleChange.bind(this);
    // this.setState doesn't set the context without binding, which we want to connect to our App conmponent.
    //this.setState lets us modify the state object on every single html element. 

    //binding is tedious, and we can avoid it using ES6 ARROW FUNCTIONS~!
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')
    .then(response => response.json())
    .then(users => this.setState({characters:users.results})) //returns a promise 
  }
  //when this component mounts, it calls whatever block of code we write.

  // handleChange(e){
  //   this.setState({searchField: e.target.value})
  // }

  handleChange = (e) => { // Arrow function automatically sets the context based on code its given, and this is seen as an arrow function and it automatically binds this. 
    this.setState({searchField: e.target.value})
  }

  render(){
    // destructuring - pull properties off objects and set them to constants that we can put somewhere eslse 
  const {characters, searchField } = this.state; // this is set to the context of our class component, its within the scope so knows that we are asking for the state of 'this' class component.
  const filteredCharacters= characters.filter(character => character.name.toLowerCase().includes(searchField.toLowerCase()))
    //above line is equal to const characters = this.state.characters and const searchField = this.state.searchField
    //includes checks string value passed is actually in the string that its being called on
  return (
    <div className="App">
   {/* } <input 
      type='search' 
      placeholder='Search Cats' 
      onChange={e => this.setState({ // setState is an asynchronous function call, so set state doesnt happen immediately
      //console.log is synchronous
      //so to log our state, we have to pass it as a second argument to setState (below)
      searchField: e.target.value
     
    }, () => console.log(e))
   
  }/> {/* gives us a placeholder*/} 
  <SearchBox 
  placeholder='Search Pokemon' 
  handleChange = {
    this.handleChange
 /* {e => this.setState({ // setState is an asynchronous function call, so set state doesnt happen immediately
      //console.log is synchronous
      //so to log our state, we have to pass it as a second argument to setState (below)
      searchField: e.target.value
     
    }, () => console.log(e))
   
 */
    
   } />
    <Cardlist characters = {filteredCharacters} > { /*//component recieves state as prop.  */ }
    
    {
      //props.characters.map( character => 
      //<h1 key={character.id}> {character.name}</h1>
     // ) 
     //gets styling instantly because of the props.children property in the component file which the map functions gets passed into.
    }
    </Cardlist>
            
  </div>
    )
  }
}

export default App;
