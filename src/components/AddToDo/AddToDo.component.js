import React, {Component} from 'react';
import styles from './AddToDo.stylesheet.css';
import {PRIORITY_LOW, PRIORITY_NORMAL, PRIORITY_HIGH} from '../App/App.component';

class AddToDo extends Component {
  constructor() {
    super();
    this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.state = {
      taskName: '',
      priority: PRIORITY_LOW
    }
  }

  handleAddTodoClick() {
    const nameToSave = this.state.taskName;
    const priorityToSave = this.state.priority;
    this.props.addTask(nameToSave, priorityToSave);
    this.setState({taskName: ''});
  }

  handleInputChange(event) {
    this.setState({ taskName: event.target.value });
  }

  handleButtonClick(priority) {
    this.setState({ priority: priority});
  }

  render() {
    return (
      <section className={styles.AddToDo}>
        <div className="ui huge action input">
          <input type="text" placeholder="Add ToDo..." onChange={this.handleInputChange} value={this.state.taskName} />
           <button className="ui icon button" onClick={() => this.handleButtonClick(PRIORITY_LOW)}>
             <i className="circle large icon yellow"></i>
           </button>
           <button className="ui icon button" onClick={() => this.handleButtonClick(PRIORITY_NORMAL)}>
             <i className="circle large icon orange"></i>
           </button>
           <button className="ui icon button" onClick={() => this.handleButtonClick(PRIORITY_HIGH)}>
             <i className="circle large icon red"></i>
           </button>
          <button className="ui icon positive button" onClick={this.handleAddTodoClick}>
            <i className="plus large icon"></i>
          </button>
        </div>
      </section>
    )
  }
}

export default AddToDo;