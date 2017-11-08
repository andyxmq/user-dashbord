import React from 'react';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './Users.css';

function Users() {
    return (
      <div className={styles.normal}>
          Route Component: Users
          <Button>aaa</Button>
      </div>
    );
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Users);
