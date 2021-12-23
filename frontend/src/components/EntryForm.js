import {
  Button,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useForm } from "react-hook-form";

const EntryForm = ({
  userId,
  fullName,
  password,
  birthday,
  age,
  deleteFlag,
  onUpdate,
}) => {
  const { register, handleSubmit } = useForm({ mode: "onSubmit" });
  return (
    <Form noValidate onSubmit={handleSubmit(onUpdate)}>
      <FormGroup className="col-3" controlId="user_id">
        <FormLabel>メンバーID</FormLabel>
        <FormControl
          name="userId"
          defaultValue={userId}
          maxLength={16}
          type="text"
          ref={register({})}
        />
      </FormGroup>
      <FormGroup className="col-3" controlId="full_name">
        <FormLabel>氏名</FormLabel>
        <FormControl
          name="fullName"
          defaultValue={fullName}
          maxLength={128}
          type="text"
          ref={register({})}
        />
      </FormGroup>
      <FormGroup className="col-3" controlId="password">
        <FormLabel>パスワード</FormLabel>
        <FormControl
          name="password"
          defaultValue={password}
          maxLength={16}
          type="password"
          ref={register({})}
        />
      </FormGroup>
      <FormGroup className="col-3" controlId="birthday">
        <FormLabel>誕生日</FormLabel>
        <FormControl name="birthday" defaultValue={birthday} type="date" ref={register({})} />
      </FormGroup>
      <FormGroup className="col-3" controlId="age">
        <FormLabel>年齢</FormLabel>
        <FormControl
          id="age"
          name="age"
          defaultValue={age}
          maxLength={3}
          type="number"
          ref={register({})}
        />
      </FormGroup>
      <FormGroup className="col-3" controlId="delete_flag">
        <FormCheck
          name="delete_flag"
          defaultValue={deleteFlag}
          label="削除済み"
          ref={register({})}
        />
      </FormGroup>
      <div class="col-3">
        <Button type="sumit">更新</Button>
        {"　"}
        <Button href="/">戻る</Button>
      </div>
    </Form>
  );
};
export default EntryForm;
