import React, {Component} from 'react';
import Header from '../Header/Header.component';
import AddToDo from '../AddToDo/AddToDo.component';
import ToDoList from '../ToDoList/ToDoList.component';
import ToDosFilter from '../ToDosFilter/ToDosFilter.component';
import Legend from '../Legend/Legend.component';
import Footer from '../Footer/Footer.component';
import styles from './App.stylesheet.css';
import {saveNewTask, getTasks, deleteTask, toggleIsDone} from '../../services/services';

export const FILTER_ALL = 0;
export const FILTER_UNFINISHED = 1;
export const FILTER_FINISHED = 2;

export const PRIORITY_LOW = 3;
export const PRIORITY_NORMAL = 2;
export const PRIORITY_HIGH = 1;


class App extends Component {

  constructor() {
    super();
    this.handleAddToDo = this.handleAddToDo.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleToggleIsDone = this.handleToggleIsDone.bind(this);
    this.handleFilterToDos = this.handleFilterToDos.bind(this);
    this.updateCounters = this.updateCounters.bind(this);
    this.state = {
      tasks: getTasks(),
      currentFilter: FILTER_ALL,
      counters: {
        all: 0,
        finished: 0,
        unfinished: 0
      }
    };
  }

  updateCounters() {
    const allTasks = getTasks();
    const allCounter = allTasks.length;
    const finishedCounter = allTasks.filter(task => task.isDone === true).length;
    const unfinishedCounter = allTasks.filter(task => task.isDone === false).length;
    this.setState({
      counters: {
        all: allCounter,
        finished: finishedCounter,
        unfinished: unfinishedCounter
      }
    });
  }

  handleAddToDo(name, priority, description) {
    const newTasks = saveNewTask(name, priority, description);
    this.setState({ tasks: newTasks });
    this.updateCounters();
  }

  handleDeleteTask(taskID) {
    const newTasks = deleteTask(taskID);
    this.setState({ tasks: newTasks });
    this.updateCounters();
  }

  handleToggleIsDone(taskID) {
    const newTasks = toggleIsDone(taskID);
    this.setState({ tasks: newTasks });
    this.updateCounters();
  }

  handleFilterToDos(filter) {
    let stateTasksCopy = getTasks().slice();
    let tasksToSave;
    if (filter === FILTER_UNFINISHED) {
      tasksToSave = stateTasksCopy.filter(task => task.isDone === false);
    } else if (filter === FILTER_FINISHED) {
      tasksToSave = stateTasksCopy.filter(task => task.isDone === true);
    }
    this.setState({
      tasks: filter === FILTER_ALL ? stateTasksCopy : tasksToSave,
      currentFilter: filter
    });
  }

  componentDidMount() {
    this.updateCounters();
  }

  render() {
    return (
      <div className={styles.App}>
        <Header/>
        <main className="ui padded grid">
          <AddToDo addTask={this.handleAddToDo}/>
          <Legend/>
          <div className="row">
            <ToDoList
              listOfTasks={this.state.tasks}
              deleteTask={this.handleDeleteTask}
              toggleIsDone={this.handleToggleIsDone}
            />
          </div>
          <div className="centered row">
            <ToDosFilter
              filterToDos={this.handleFilterToDos}
              currentFilter={this.state.currentFilter}
              counters={this.state.counters}
            />
          </div>
        </main>
        <Footer/>
      </div>
    )
  }
}

export default App;
