import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppSpinner from "../../UI/Spinners/AppSpinner";

const SignIn = () => {
  const [loading, setLoading] = useState(false);
  const { loginWithRedirect } = useAuth0();
  useEffect(() => {
    setLoading(true);
    loginWithRedirect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <>{loading ? <AppSpinner type={"clock"} /> : null}</>;
};

export default SignIn;
