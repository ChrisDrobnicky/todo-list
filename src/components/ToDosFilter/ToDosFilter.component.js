import React, {Component} from 'react';
import styles from './ToDosFilter.stylesheet.css';
import {FILTER_FINISHED, FILTER_UNFINISHED, FILTER_ALL} from '../App/App.component';

class ToDosFilter extends Component {
  constructor() {
    super();
    this.handleFilterClick = this.handleFilterClick.bind(this);
  }

  handleFilterClick(filterIndex) {
    this.props.filterToDos(filterIndex);
  }

  render() {
    return (
      <section className={styles.ToDosFilter}>
        <div className={
          `${styles.buttonWrapper}
          ${this.props.currentFilter === FILTER_ALL ? styles['buttonWrapper--active'] : null}`
        }>
          <div className="ui labeled button">
            <button className="ui blue big button" onClick={() => this.handleFilterClick(FILTER_ALL)}>
              <i className="list icon"></i>
              All
            </button>
            <a className="ui basic left pointing blue label">
              1,048
            </a>
          </div>
        </div>
        <div className={
          `${styles.buttonWrapper}
          ${this.props.currentFilter === FILTER_UNFINISHED ? styles['buttonWrapper--active'] : null}`
        }>
          <div className="ui labeled button">
            <button className="ui labeled icon red big button" onClick={() => this.handleFilterClick(FILTER_UNFINISHED)}>
              <i className="thumbs outline down icon"></i>
              Unfinished
            </button>
            <a className="ui basic left pointing red label">
              1,048
            </a>
          </div>
        </div>
        <div className={
          `${styles.buttonWrapper}
          ${this.props.currentFilter === FILTER_FINISHED ? styles['buttonWrapper--active'] : null}`
        }>
          <div className="ui labeled button">
            <button className="ui labeled icon green big button" onClick={() => this.handleFilterClick(FILTER_FINISHED)}>
              <i className="thumbs outline up icon"></i>
              Finished
            </button>
            <a className="ui basic left pointing green label">
              1,048
            </a>
          </div>
        </div>
      </section>
    )
  }
}

export default ToDosFilter;