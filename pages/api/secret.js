import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";

export default withApiAuthRequired(function SecretRoute(reg, res) {
  const session = getSession(req, res);
  const user = session.user;

  //...rest of the code will go here
});
