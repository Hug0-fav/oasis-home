import UpdateUserDataForm from "../features/authentication/UpdateUserDataForm";
import UpdataPasswordForm from "../features/authentication/UpdatePasswordForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Update your account</Heading>

      <Row>
        <Heading as="h3">Update user data</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Update password</Heading>
        <UpdataPasswordForm />
      </Row>
    </>
  );
}

export default Account;
