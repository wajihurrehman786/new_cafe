import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import AppSpinner from "../../UI/Spinners/AppSpinner";
const SignOut = () => {
  const { logout } = useAuth0();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Signing out");
    setLoading(true);
    logout({ returnTo: window.location.origin });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return <>{loading ? <AppSpinner type={"clock"} /> : null}</>;
};

export default SignOut;
