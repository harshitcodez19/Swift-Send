import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import { Heading } from "../components/Heading";
import InputBox from "../components/InputBox";
import SubHeading from "../components/SubHeading";

const SignIn = () => {
  return (
    <div className="flex bg-slate-200 h-screen justify-center">
      <div className=" flex flex-col justify-center">
        <div className="p-3 text-center h-max w-96 rounded-lg bg-slate-300 shadow-md">
          <Heading label={"Sign In"}></Heading>
          <SubHeading label={"Enter your credentials to login "}></SubHeading>
          <InputBox label={"Email"} placeholder={"Enter your Email"}></InputBox>
          <InputBox
            label={"Password"}
            placeholder={"Enter your password"}
          ></InputBox>
          <Button label={"Sign In"} />
          <BottomWarning
            label={"Don't have an account?, "}
            buttonText={" Sign Up"}
            to={"/signup"}
          ></BottomWarning>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
