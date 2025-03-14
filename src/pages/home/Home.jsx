import React from "react";

import { Avatar, Card, Table } from "antd";
import { UserOutlined } from "@ant-design/icons";

import styles from "./Home.module.scss";
import Title from "antd/es/skeleton/Title";
import Column from "antd/es/table/Column";

const Home = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

  // const columns = [
  //   {
  //     title: "Name",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  //   {
  //     title: "Age",
  //     dataIndex: "age",
  //     key: "age",
  //   },
  //   {
  //     title: "Address",
  //     dataIndex: "address",
  //     key: "address",
  //   },
  // ];

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.navbar}>
          <nav>
            <ul className={styles.navbarList}>
              <li className={styles.active}>Home</li>
              <li>Transactions</li>
              <li>Analysis</li>
            </ul>
          </nav>

          <div className={styles.icons}>
            <Avatar
              style={{ backgroundColor: "#a5d7e8" }}
              icon={<UserOutlined style={{ color: "#0b2447" }} />}
            />
          </div>
        </div>

        <div className={styles.main}>
          <div className={styles.transactionCard}>
            <div className={styles.header}>
              <h4 className={styles.transactionCardHeading}>
                Latest Transactions
              </h4>
              <button className={styles.addTransactionBtn}>
                Add new transaction
              </button>
            </div>
            <Table
              className={styles.transactionTable}
              size="middle"
              dataSource={dataSource}
              pagination={false}
              rowHoverable={false}
            >
              <Column
                className={styles.myCol}
                title="Name"
                dataIndex="name"
                key="name"
              />
              <Column
                className={styles.myCol}
                title="Age"
                dataIndex="age"
                key="age"
              />
              <Column
                className={styles.myCol}
                title="Address"
                dataIndex="address"
                key="address"
              />
              <Column
                className={styles.myCol}
                title="Age"
                dataIndex="age"
                key="age"
              />
              <Column
                className={styles.myCol}
                title="Address"
                dataIndex="address"
                key="address"
              />
            </Table>
          </div>

          <div className={styles.tagListCard}>
            <div className={styles.header}>
              <h4 className={styles.transactionCardHeading}>All Tags</h4>
              <button className={styles.addTransactionBtn}>
                Create New Tag
              </button>
            </div>
            <Table
              className={styles.transactionTable}
              size="middle"
              dataSource={dataSource}
              pagination={false}
              rowHoverable={false}
            >
              <Column
                className={styles.myCol}
                title="Name"
                dataIndex="name"
                key="name"
              />
              <Column
                className={styles.myCol}
                title="Age"
                dataIndex="age"
                key="age"
              />
              <Column
                className={styles.myCol}
                title="Address"
                dataIndex="address"
                key="address"
              />
            </Table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
