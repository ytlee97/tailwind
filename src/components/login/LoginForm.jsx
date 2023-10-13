import Input from "../common/Input";

function LoginForm() {
  return (
    <form className="flex flex-col gap-2">
      <label>
        <Input type={"text"} placeholder={"ID"} />
      </label>
      <label>
        <Input type={"password"} placeholder={"PASSWORD"} />
      </label>
    </form>
  );
}

export default LoginForm;
