import React from "react";
import "./Spinner.css";
import ScaleLoader from "react-spinners/ScaleLoader";
const AppSpinner = () => {
  const renderSpinner = () => {
    return (
      <div className="spinner">
        <ScaleLoader
          loading={true}
          size={200}
          color={"var(--primary-spinner)"}
        />
      </div>
    );
  };
  return <>{renderSpinner()}</>;
};

export default AppSpinner;
