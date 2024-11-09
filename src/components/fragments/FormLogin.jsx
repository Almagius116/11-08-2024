import { NewButton } from "../button/NewButton";
import { InpurForm } from "../elements/Input/Index";

export const FormLogin = () => {
  return (
    <form>
      <InpurForm
        label={"email"}
        type={"email"}
        placeholder={"example@gmail.com"}
        name={"email"}
      />
      <NewButton>Login</NewButton>
    </form>
  );
};
