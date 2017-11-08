import React from 'react';
import { connect } from 'dva';
import MainLayout  from '../components/MainLayout/MainLayout';
import styles from './IndexPage.css';

function IndexPage() {
  return (
     <MainLayout></MainLayout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
