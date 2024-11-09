import { FormLogin } from "../components/fragments/FormLogin";
import { AuthLayout } from "../Layouts/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="login">
      <FormLogin />
      <p>
        Don't have account?<a href="/register">Register</a>
      </p>
    </AuthLayout>
  );
};
