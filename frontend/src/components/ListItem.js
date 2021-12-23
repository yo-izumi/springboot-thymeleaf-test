import React from "react";
import { FormCheck } from "react-bootstrap";
const ListItem = (member) => {
  const URL = "/Edit/" + member.userId;
  return (
    <tr>
      <td className="row">
        <a href={URL}>{member.userId}</a></td>
      <td>{member.fullName}</td>
      <td>{member.birthday}</td>
      <td>{member.age}</td>
      <td>
        <FormCheck value={member.deleteFlag} readOnly disabled/>
      </td>
    </tr>
  );
};

export default ListItem;
