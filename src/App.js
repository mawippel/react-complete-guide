import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Marcelo', age: 20},
      {name: 'Naiara', age: 21},
      {name: 'Merini', age: 20}
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 21},
        {name: 'Nai', age: 21},
        {name: 'Merinex', age: 20}
      ]
    });
  }

  inputNameChangeHandler = (event) => {
    this.setState({
      persons: [
        {name: 'Marcelo!', age: 21},
        {name: event.target.value, age: 21},
        {name: 'Merinex', age: 20}
      ]
    });
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '8px'
    }

    return (
      <div className="App">
        <h1>Hi, i'm a new react.js app!</h1>
        <button style={style} onClick={() => this.switchNameHandler('Marcelo Wippel')}>Switch Name!</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          clickHandler={() => this.switchNameHandler('Wippel')}
          inputHandler={this.inputNameChangeHandler}
          >My hobbies: Studying</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
  } 
}

export default App;
