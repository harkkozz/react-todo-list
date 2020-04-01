import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import Input from './components/Input/Input';

class App extends Component {
  state = {
    myTodoList: [
      {
        text: 'Go to grocery',
        date: new Date().toLocaleString(),
      },
      {
        text: 'Go to supermarket',
        date: new Date().toLocaleString(),
      },
      {
        text: 'Go to gym',
        date: new Date().toLocaleString(),
      }
    ],
    item: '',
    activeClass: false,
  }

  addNewItem = () => {
    const newItem = {
      text: this.state.item,
      date: new Date().toLocaleString(),
    };
    if(this.state.item === '') {
      alert('Please add something to todo')
      return;
    } 
    this.setState(state => ({
      myTodoList: state.myTodoList.concat(newItem),
      item: ''
    }));
  }

  handleChange = e => {
    this.setState({ item: e.target.value })
  }

  saveOnEnterPressed = e => {
    if(e.key === 'Enter') {
      this.addNewItem();
    }
  }

  taskDone = () => {
    console.log('Task done');
  }

  render() {
    return (
      <div className="App">
        <h1>TODO list</h1>
        <Input 
          inputValue={ this.state.item } 
          onInputChange={ this.handleChange } 
          onEnterPressed={this.saveOnEnterPressed}
          addItemInList={ this.addNewItem }
        />
        { this.state.myTodoList.map((item, index) => {
            return <List
              text={ item.text } 
              date={ item.date } 
              key={ index }
              taskDone={ this.taskDone }
            />
          })
        }
      </div>
    );
  }
}

export default App;
