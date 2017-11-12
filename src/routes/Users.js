import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm } from 'antd';
import styles from './Users.css';

class Users extends React.Component {
    constructor(props) {
        super(props);
    }
    deleteHandler(id) {
        console.warn(`TODO: ${id}`);
    }
    render() {
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            }, {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            }, {
                title: 'Website',
                dataIndex: 'website',
                key: 'website',
            }, {
                title: 'Operation',
                key: 'operation',
                render: (text, { id }) => (
                  <span className={styles.operation}>
                    <a href="">Edit</a>
                    <Popconfirm title="Confirm to Delete" onConfirm={() => this.deleteHandler(null, id)}>
                      <a href="">Delete</a>
                    </Popconfirm>
                  </span>
                ),
            },
        ];

        const dataSource = [
          { name: '111', email: '1714903660@qq.com', website: 'www.baidu.com' },
        ];
        return (
          <div className={styles.normal}>
            <div>
              <Table
                columns={columns}
                dataSource={dataSource}
              />

            </div>
          </div>
        );
    }
}

function mapStateToProps() {
    return {};
}

export default connect(mapStateToProps)(Users);
