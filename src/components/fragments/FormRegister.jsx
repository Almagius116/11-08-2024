import { NewButton } from "../button/NewButton";
import { InpurForm } from "../elements/Input/Index";

export const FormRegister = () => {
  return (
    <form>
      <InpurForm
        label={"Fullname :"}
        type={"text"}
        placeholder={"insert your name here"}
        name={"fullname"}
      />
      <InpurForm
        label={"Email :"}
        type={"email"}
        placeholder={"insert your email here"}
        name={"email"}
      />
      <InpurForm
        label={"Password :"}
        type={"text"}
        placeholder={"insert your password here"}
        name={"password"}
      />
      <NewButton>Register</NewButton>
    </form>
  );
};
