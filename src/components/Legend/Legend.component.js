import React from 'react';
import styles from './Legend.stylesheet.css';

const Legend = () => (
  <aside className={styles.Legend}>
    <div className="ui mini horizontal divided list">
      <div className="item">
        <i className="circle yellow icon"></i>
          <div className="content">
            <div className="header">Low Priority</div>
          </div>
      </div>
      <div className="item">
        <i className="circle orange icon"></i>
        <div className="content">
          <div className="header">Normal Priority</div>
        </div>
      </div>
      <div className="item">
        <i className="circle red icon"></i>
        <div className="content">
          <div className="header">High Priority</div>
        </div>
      </div>
    </div>
  </aside>
);

export default Legend;