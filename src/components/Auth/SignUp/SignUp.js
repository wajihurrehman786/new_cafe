import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppSpinner from "../../UI/Spinners/AppSpinner";
const SignUp = () => {
  const { loginWithRedirect } = useAuth0();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    loginWithRedirect({
      screen_hint: "signup",
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <>{loading ? <AppSpinner type={"clock"} /> : null}</>;
};

export default SignUp;
