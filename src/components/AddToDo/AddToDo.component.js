import React, {Component} from 'react';
import styles from './AddToDo.stylesheet.css';

class AddToDo extends Component {
  constructor() {
    super();
    this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormClick = this.handleFormClick.bind(this);
    this.handleDescriptionClick = this.handleDescriptionClick.bind(this);
    this.state = {
      taskName: ''
    }
  }

  handleAddTodoClick() {
  const nameToSave = this.state.taskName;
  this.props.addTask(nameToSave);
  this.setState({ taskName: '' });
}

  handleInputChange(event) {
    this.setState({ taskName: event.target.value });
  }

  handleFormClick(event) {
    event.preventDefault();
  }

  handleDescriptionClick() {
   alert('i need class');
  }

  render() {
    return (
      <section className={styles.AddToDo}>
        <form className="ui form" onClick={this.handleFormClick}>
          <div className="ui huge action input">
            <input type="text" placeholder="Add ToDo..." onChange={this.handleInputChange} value={this.state.taskName} />
            <button className="ui icon positive button" id="description" onClick={this.handleAddTodoClick}>
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