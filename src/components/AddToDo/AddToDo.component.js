import React, {Component} from 'react';
import styles from './AddToDo.stylesheet.css';
import {PRIORITY_LOW, PRIORITY_NORMAL, PRIORITY_HIGH} from '../App/App.component';

class AddToDo extends Component {
  constructor() {
    super();
    this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleDescriptionClick = this.handleDescriptionClick.bind(this);
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

  handleFormClick(event) {
    event.preventDefault();
  }

  handleDescriptionClick() {
   alert('i need class');
  }

  render() {
    const generateButtonClasses = (priority, currentPriority) => {
      return priority === currentPriority ? 'ui icon button active' : 'ui icon button';
    };

    return (
      <section className={styles.AddToDo}>
        <form className="ui form" onClick={this.handleFormClick}>
          <div className="ui huge action input">
            <input type="text" placeholder="Add ToDo..." onChange={this.handleInputChange} value={this.state.taskName} />
            <button
              className={generateButtonClasses(PRIORITY_LOW, this.state.priority)}
              onClick={() => this.handleButtonClick(PRIORITY_LOW)}>
              <i className="circle large icon yellow"></i>
            </button>
            <button
              className={generateButtonClasses(PRIORITY_NORMAL, this.state.priority)}
              onClick={() => this.handleButtonClick(PRIORITY_NORMAL)}>
              <i className="circle large icon orange"></i>
            </button>
            <button
              className={generateButtonClasses(PRIORITY_HIGH, this.state.priority)}
              onClick={() => this.handleButtonClick(PRIORITY_HIGH)}>
              <i className="circle large icon red"></i>
            </button>
            <button className="ui icon positive button" onClick={this.handleAddTodoClick}>
              <i className="plus large icon"></i>
            </button>
          </div>
          <div className="field">
            <button className={`ui teal icon button ${styles.button}`} onClick={this.handleDescriptionClick}>
              <i className="arrow circle outline down big icon"></i>
            </button>
            <textarea rows="2" className={styles.descriptionDisabled}></textarea>
          </div>
        </form>
      </section>
    )
  }
}

export default AddToDo;