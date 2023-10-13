import LoginForm from "./LoginForm";
import Title from "./Title";

function Login() {
  return (
    <section className="hover:resize flex flex-col justify-center w-1/4 lg:w-screen xl:w-5/6 h-[40rem] bg-[#3C3C3C] p-8 text-white items-center rounded-[10px] m-auto ">
      <Title />
      <LoginForm />
    </section>
  );
}

export default Login;
