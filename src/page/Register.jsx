import { FormRegister } from "../components/fragments/FormRegister";
import { AuthLayout } from "../Layouts/AuthLayout";

export const RegisterPage = () => {
  return (
    <AuthLayout title="register">
      <FormRegister />
      <p>
        have an account?<a href="/login">Login</a>
      </p>
    </AuthLayout>
  );
};
