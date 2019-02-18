import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'Marcelo', age: 20 },
      { id: '2', name: 'Naiara', age: 21 },
      { id: '3', name: 'Merini', age: 20 }
    ],
    showPersons: false
  }

  inputNameChangeHandler = (event, id) => {
    let index = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    let copyPerson = {
      ...this.state.persons[index]
    };
    copyPerson.name = event.target.value;

    let newPersons = [...this.state.persons];
    newPersons[index] = copyPerson;
    this.setState({ persons: newPersons });
  }

  deletePersonHandler = (index) => {
    //let persons = this.state.persons.slice(); --old way
    let persons = [...this.state.persons] //ES6 way, with spread operator
    persons.splice(index, 1);
    this.setState({ persons: persons });
  }

  toggleShowPersons = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      marginBottom: '8px'
    }

    let personList = null;
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // add red class
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // add bold class
    }

    if (this.state.showPersons) {
      personList = (
        <div>
          {this.state.persons.map((person, i) => {
            return <Person key={person.id}
              clickHandler={() => this.deletePersonHandler(i)}
              name={person.name}
              age={person.age}
              inputHandler={(event) => this.inputNameChangeHandler(event, person.id)} />
          })}
        </div>
      )

      style.backgroundColor = 'red';
    }

    return (
        <div className="App">
          <p className={classes.join(' ')}>Hi, i'm the brand new Marcelo's react.js app!</p>
          <button style={style} onClick={this.toggleShowPersons}>Show Persons</button>
          {personList}
        </div>
    );
  }
}

export default App;
