import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Layout from "../../Layout/Layout";

const Profile = () => {
  const { user } = useAuth0();
  const { picture } = user;
  const renderUser = () => {
    <Layout title="Profile Information" background={true}>
      <div>
        <div className="row align-items-center ">
          <div className="col-md-2 mb-3">
            <img
              src={picture}
              alt="Profile"
              className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
            />
          </div>
        </div>
        <div className="row  justify-content-start">
          <pre className="col-md-12  text-light bg-dark p-4">
            {JSON.stringify(user, null, 2)}
          </pre>
        </div>
      </div>
    </Layout>;
  };

  return <>{renderUser()}</>;
};

export default Profile;
