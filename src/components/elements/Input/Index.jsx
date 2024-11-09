import { Label } from "./Label";
import { Input } from "./Input";

export const InpurForm = ({ label, name, type, placeholder }) => {
  return (
    <>
      <Label htmlFor={name}>{label}</Label>;
      <Input type={type} placeholder={placeholder} name={name} />
      <br />
    </>
  );
};
