import React from "react";
import { FormCheck } from "react-bootstrap";
const ListItem = (member) => {
  const URL = "/Edit/" + member.user_id;
  return (
    <tr>
      <td className="row">
        <a href={URL}>{member.user_id}</a></td>
      <td>{member.full_name}</td>
      <td>{member.birthday}</td>
      <td>{member.age}</td>
      <td>
        <FormCheck value={member.delete_flag} readOnly disabled/>
      </td>
    </tr>
  );
};

export default ListItem;
