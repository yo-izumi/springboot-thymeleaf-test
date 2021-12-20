import React from "react";
import EntryForm from "./EntryForm";
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
            id: json["user_id"],
            name: json["full_name"],
            password: json["password"],
            birthday: json["birthday"],
            age: json["age"],
            delete_flag: json["delete_flag"],
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
            id={this.state.id}
            name={this.state.name}
            password={this.state.password}
            birthday={this.state.birthday}
            age={this.state.age}
            delete_flag={this.state.delete_flag}
            onUpdate={this.onUpdate}
          />
        </div>
      </>
    );
  };
}
export default Edit;
