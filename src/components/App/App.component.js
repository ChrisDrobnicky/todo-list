import React, {Component} from 'react';
import Header from '../Header/Header.component';
import AddToDo from '../AddToDo/AddToDo.component';
import ToDoList from '../ToDoList/ToDoList.component';
import styles from './App.stylesheet.css';
import {saveNewTask, getTasks, deleteTask, toggleIsDone} from '../../services/services';

class App extends Component {

  constructor() {
    super();
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleToggleIsDone = this.handleToggleIsDone.bind(this);
    this.state = {
      tasks: getTasks()
    };
  }

  handleAddToDo(name) {
    const newTasks = saveNewTask(name);
    this.setState({tasks: newTasks});
  }

  handleDeleteTask(taskID) {
    const newTasks = deleteTask(taskID);
    this.setState({tasks: newTasks});
  }

  handleToggleIsDone(taskID) {
    const newTasks = toggleIsDone(taskID);
    this.setState({ tasks: newTasks });
  }

  render() {
    return (
      <div className={styles.App}>
        <Header/>
        <main className="ui padded grid">
          <div className="centered row">
            <AddToDo addTask={this.handleAddToDo}/>
          </div>
          <div className="row">
            <ToDoList
              listOfTasks={this.state.tasks}
              deleteTask={this.handleDeleteTask}
              toggleIsDone={this.handleToggleIsDone}
            />
          </div>
        </main>
      </div>
    )
  }
}

export default App;
