import React from 'react';
import styles from './ToDoList.stylesheet.css';
import {PRIORITY_LOW, PRIORITY_NORMAL, PRIORITY_HIGH} from '../App/App.component';

const ToDoList = (props) => {

  const handleDeleteOnClick = itemID => {
    props.deleteTask(itemID);
  };

  const handleDoneOnClick = itemID => {
    props.toggleIsDone(itemID);
  };

  const colorMapper = priority => {
    switch(priority) {
      case PRIORITY_HIGH:
        return 'red';
      case PRIORITY_NORMAL:
        return 'orange';
      default:
        return 'yellow';
    }
  };

  return (
    <section className={styles.ToDoList}>
      <div className="ui massive list">
        {props.listOfTasks.map((item, index) => <div className="item" key={index}>
            <div className={`${styles.toDoListItem} ${styles[item.isDone ? 'greenBoxShadow' : 'redBoxShadow']}`}>
              <span className={styles.itemIndex}>{index + 1}.</span>
              <span className={styles.itemName}>{item.title}</span>
              <span className={styles.iconWrapper}>
                <i
                  className={`thumbs outline ${item.isDone ? 'up' : 'down'} icon`}
                  onClick={() => handleDoneOnClick(item.id)}
                ></i>
                <i className="trash outline icon" onClick={() => handleDeleteOnClick(item.id)}></i>
              </span>
              <span className={styles.priorityWrapper}>
                <i className = {`circle ${colorMapper(item.priority)} icon`}></i>
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  )
};

export default ToDoList;