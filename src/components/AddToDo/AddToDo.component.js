import React, {Component} from 'react';
import styles from './AddToDo.stylesheet.css';

class AddToDo extends Component {
  constructor() {
    super();
    this.handleAddTodoClick = this.handleAddTodoClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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

  render() {
    return (
      <section className={styles.AddToDo}>
        <div className="ui huge action input">
          <input type="text" placeholder="Add ToDo..." onChange={this.handleInputChange} value={this.state.taskName} />
          <button className="ui icon positive button" onClick={this.handleAddTodoClick}>
            <i className="plus large icon"></i>
          </button>
        </div>
      </section>
    )
  }
}

export default AddToDo;