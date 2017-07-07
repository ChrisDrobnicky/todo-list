import React from 'react';
import styles from './Legend.stylesheet.css';

const Legend = () => (
  <aside className={styles.Legend}>
    <div className="ui middle aligned divided list">
      <div className="item">
        <i className="circle yellow icon"></i>
          <div className="content">Low Priority</div>
      </div>
      <div className="item">
        <i className="circle orange icon"></i>
        <div className="content">Normal Priority</div>
      </div>
      <div className="item">
        <i className="circle red icon"></i>
        <div className="content">High Priority</div>
      </div>
    </div>
  </aside>
);

export default Legend;