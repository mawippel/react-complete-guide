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

  deletePersonHandler = (index) => {
    let persons = this.state.persons;
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  toggleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {

    let personList: null;

    if (this.state.showPersons) {
      personList = (
        <div>
          {this.state.persons.map((person, i) => {
            return <Person key={i}
              clickHandler={() => this.deletePersonHandler(i)}
              name={person.name}
              age={person.name} />
          })}
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, i'm the brand new Marcelo's react.js app!</h1>
        <button style={style} onClick={this.toggleShowPersons}>Show Persons</button>
        {personList}
      </div>
    );
  }
}

const style = {
  backgroundColor: 'white',
  font: 'inherit',
  border: '1px solid blue',
  padding: '8px',
  cursor: 'pointer',
  marginBottom: '8px'
}

export default App;
