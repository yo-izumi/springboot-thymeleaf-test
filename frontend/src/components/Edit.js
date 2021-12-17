import React from "react";
import {
  Button, Form, FormCheck,
  FormControl, FormGroup,
  FormLabel
} from "react-bootstrap";

class Edit extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      id: id,
      name: "",
      password: "",
      birthday: "",
      age: "",
      delete_flag: false,
    };
  }

  componentDidMount() {
    const URL = "http://localhost:8080/api/Member?id=" + this.state.id;
    fetch(URL, { mode: "cors" })
      .then((res) => res.json())
      .then((json) => {
        if (json != null) {
          this.setState({
            id: json["user_id"],
            name: json["full_name"],
            password: json["password"],
            birthday: json["birthday"],
            age: json["age"],
            delete_flag: json["delete_flag"],
          });
        }
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
        <h1>編集</h1>
        <div>
          <Form action="http://localhost:8080/api/Update" method="POST" controlId="entry">
            <FormGroup className="col-3" controlId="user_id">
              <FormLabel>メンバーID</FormLabel>
              <FormControl
              id="user_id"
                defaultValue={this.state.id}
                maxLength={16}
                type="text"
              />
            </FormGroup>
            <FormGroup className="col-3" controlId="full_name">
              <FormLabel>氏名</FormLabel>
              <FormControl
              id="full_name"
                defaultValue={this.state.name}
                maxLength={128}
                type="text"
              />
            </FormGroup>
            <FormGroup className="col-3" controlId="password">
              <FormLabel>パスワード</FormLabel>
              <FormControl
              id="password"
                defaultValue={this.state.password}
                maxLength={16}
                type="password"
              />
            </FormGroup>
            <FormGroup className="col-3" controlId="birthday">
              <FormLabel>誕生日</FormLabel>
              <FormControl defaultValue={this.state.birthday} type="date" />
            </FormGroup>
            <FormGroup className="col-3" controlId="age">
              <FormLabel>年齢</FormLabel>
              <FormControl
              id="age"
              name="age"
                defaultValue={this.state.age}
                maxLength={3}
                type="number"
              />
            </FormGroup>
            <FormGroup className="col-3" controlId="delete_flag">
              <FormCheck
              id="delete_flag"
                defaultValue={this.state.delete_flag}
                label="削除済み"
              />
            </FormGroup>
            <div class="col-3">
              <Button type="sumit">更新</Button>{"　"}
              <Button href="/">戻る</Button>
            </div>
          </Form>
        </div>
      </>
    );
  };
}
export default Edit;
