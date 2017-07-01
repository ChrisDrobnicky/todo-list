import React, {Component} from 'react';
import Header from '../Header/Header.component';
import AddToDo from '../AddToDo/AddToDo.component';
import ToDoList from '../ToDoList/ToDoList.component';
import styles from './App.stylesheet.css';
import {saveNewTask} from '../../services/services';

class App extends Component {

  constructor() {
    super();
    this.handleAddToDo = this.handleAddToDo.bind();
  }

  handleAddToDo(name) {
    saveNewTask(name);
  }

  render() {
    const simulatedTodoList = [
      {
        title: 'todo1',
        isDone: false
      },
      {
        title: 'todo2',
        isDone: false
      },
      {
        title: 'todo3',
        isDone: false
      }
    ]

    return (
      <div className={styles.App}>
        <Header/>
        <main className="ui padded grid">
          <div className="centered row">
            <AddToDo addToDo={this.handleAddToDo}/>
          </div>
          <div className="row">
            <ToDoList toDoList={simulatedTodoList}/>
          </div>
        </main>
      </div>
    )
  }
}

export default App;
