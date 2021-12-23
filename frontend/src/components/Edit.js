import React from "react";
import EntryForm from "./EntryForm";
class Edit extends React.Component {
  constructor(props) {
    super(props);
    const { id } = props.match.params;
    this.state = {
      userId: id,
      fullName: "",
      password: "",
      birthday: "",
      age: "",
      deleteFlag: false,
    };
  }

  componentDidMount() {
    const URL = "http://localhost:8080/api/Member?id=" + this.state.userId;
    fetch(URL, { mode: "cors" })
      .then((res) => res.json())
      .then((json) => {
        if (json != null) {
          this.setState({
            userId: json["userId"],
            fullName: json["fullName"],
            password: json["password"],
            birthday: json["birthday"],
            age: json["age"],
            deleteFlag: json["deleteFlag"],
          });
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  onUpdate = (form) => {
    const URL = "http://localhost:8080/api/Update";
    const METHOD = "POST";

    fetch(URL, {
      mode: "cors",
      method: METHOD,
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((json) => {
        if (json != null) {
          this.setState({
            userId: json["userId"],
            fullName: json["fullName"],
            password: json["password"],
            birthday: json["birthday"],
            age: json["age"],
            deleteFlag: json["deleteFlag"],
          });
          window.location.href = "/";
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render = () => {
    return (
      <>
        <h1>編集</h1>
        <div>
          <EntryForm
            userId={this.state.userId}
            fullName={this.state.fullName}
            password={this.state.password}
            birthday={this.state.birthday}
            age={this.state.age}
            deleteFlag={this.state.deleteFlag}
            onUpdate={this.onUpdate}
          />
        </div>
      </>
    );
  };
}
export default Edit;
