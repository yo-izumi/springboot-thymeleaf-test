import React from "react";
import { Table } from "react-bootstrap";
import ListItem from "./ListItem";
class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      members: [],
    };
  }
  componentDidMount() {
    const URL = "http://localhost:8080/api/List";
    fetch(URL, { mode: "cors" })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          members: json == null ? [] : json,
        });
      })
      .catch((error) => {
        this.setState({
          demoValue: error.message,
        });
      });
  }
  render = () => {
    return (
      <>
        <h1>一覧</h1>
        <Table className="table-striped table-bordered table-hover table-condensed">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">名前</th>
              <th scope="col">誕生日</th>
              <th scope="col">年齢</th>
              <th scope="col">削除</th>
            </tr>
          </thead>
          <tbody>
            {this.state.members.map((member) => {
              return ListItem(member);
            })}
          </tbody>
        </Table>
      </>
    );
  };
}

export default List;
