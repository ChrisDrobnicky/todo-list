import React, {Component} from 'react';
import styles from './AddToDo.stylesheet.css';
import {PRIORITY_LOW, PRIORITY_NORMAL, PRIORITY_HIGH} from '../App/App.component';

class AddToDo extends Component {
  constructor() {
    super();
    this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleDescriptionClick = this.handleDescriptionClick.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);

    this.state = {
      taskName: '',
      taskDescription: '',
      priority: PRIORITY_LOW,
      descriptionDisabled: true,
    }
  }

  handleAddTodoClick() {
    const nameToSave = this.state.taskName;
    const priorityToSave = this.state.priority;
    const descriptionToSave = this.state.taskDescription;
    this.props.addTask(nameToSave, priorityToSave, descriptionToSave);
    this.setState({taskName: '', taskDescription: ''});
  }

  handleInputChange(event) {
    this.setState({ taskName: event.target.value });
  }

  handleDescriptionChange(event) {
    this.setState({ taskDescription: event.target.value });
  }

  handleButtonClick(priority) {
    this.setState({ priority: priority});
  }

  handleFormClick(event) {
    event.preventDefault();
  }

  handleDescriptionClick() {
    this.setState({ descriptionDisabled: !this.state.descriptionDisabled });
    if (this.state.descriptionDisabled === false) {
      this.setState({ taskDescription: '' });
    }
  }

  render() {
    const generateButtonClasses = (priority, currentPriority) => {
      return priority === currentPriority ? 'ui icon button active' : 'ui icon button';
    };
    const descriptionClass = this.state.descriptionDisabled ? 'descriptionNone' : 'descriptionVisible';
    const descriptionAddText = this.state.descriptionDisabled ? `Add description ↓` : 'Hide description ↑';

    return (
      <section className={styles.AddToDo}>
        <form className={styles.form} onClick={this.handleFormClick}>
          <div className={`ui huge action input ${styles.inputWrapper}`}>
            <input
              type="text"
              maxLength="15"
              placeholder="Add ToDo..."
              onChange={this.handleInputChange} value={this.state.taskName}
            />
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
          <div className={styles.descriptionWrapper}>
            <textarea rows="2"
                      className={styles[descriptionClass]}
                      onChange={this.handleDescriptionChange}
                      value={this.state.taskDescription}>
            </textarea>
            <div className={styles.descriptionAdd} onClick={this.handleDescriptionClick}>
              {descriptionAddText}
            </div>
          </div>
        </form>
      </section>
    )
  }
}

export default AddToDo;