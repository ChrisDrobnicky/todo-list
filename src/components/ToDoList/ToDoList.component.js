import React, {Component} from 'react';
import styles from './ToDoList.stylesheet.css';

class ToDoList extends Component {
  constructor() {
    super();
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  handleOnClick(itemID) {
    this.props.deleteTask(itemID);
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
                  <i className="trash outline icon" onClick={() => this.handleOnClick(item.id)}></i>
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