import React, {Component} from 'react';
import styles from './ToDoList.stylesheet.css';

class ToDoList extends Component {
  constructor() {
    super();
    this.handleDeleteOnClick = this.handleDeleteOnClick.bind(this);
    this.handleDoneOnClick = this.handleDoneOnClick.bind(this);
  }

  handleDeleteOnClick(itemID) {
    this.props.deleteTask(itemID);
  }

  handleDoneOnClick(itemID) {
    this.props.toggleIsDone(itemID);
  }

  render() {
    return (
      <section className={styles.ToDoList}>
        <div className="ui massive celled list">
          {this.props.listOfTasks.map((item, index) =>
            <div className="item" key={index}>
              <div className={styles.toDoListItem}>
                <span className={styles.itemIndex}>{index + 1}.</span>
                {item.title}
                <span className={styles.iconWrapper}>
                  <i
                    className={`thumbs outline ${item.isDone ? 'up' : 'down'} icon`}
                    onClick={() => this.handleDoneOnClick(item.id)}
                  ></i>
                  <i className="trash outline icon" onClick={() => this.handleDeleteOnClick(item.id)}></i>
                </span>
              </div>
            </div>
          )}
        </div>
      </section>
    )
  }
}

export default ToDoList;