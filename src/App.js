import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { name: 'Marcelo', age: 20 },
      { name: 'Naiara', age: 21 },
      { name: 'Merini', age: 20 }
    ],
    showPersons: false
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 21 },
        { name: 'Nai', age: 21 },
        { name: 'Merinex', age: 20 }
      ]
    });
  }

  inputNameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Marcelo!', age: 21 },
        { name: event.target.value, age: 21 },
        { name: 'Merinex', age: 20 }
      ]
    });
  }

  toggleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
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
        <h1>Hi, i'm the brand new Marcelo's react.js app!</h1>
        <button style={style} onClick={this.toggleShowPersons}>Show Persons</button>
        {this.state.showPersons ?
          <div>
            <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age} />
            <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              clickHandler={this.switchNameHandler.bind(this, 'Just Clicked on the second Person')}
              inputHandler={this.inputNameChangeHandler}
            >My hobbies: Studying</Person>
            <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age} />
          </div> : null
        }
      </div>
    );
  }
}

export default App;
