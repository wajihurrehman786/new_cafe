import React from "react";
import "./Spinner.css";
import ScaleLoader from "react-spinners/ScaleLoader";
import { ClockLoader } from "react-spinners";
const AppSpinner = ({ type = "scale" }) => {
  const renderSpinner = () => {
    return (
      <div className={type === "scale" ? "spinner" : "spinner-with-backdrop"}>
        {type === "scale" ? (
          <ScaleLoader
            loading={true}
            size={200}
            color={"var(--primary-spinner)"}
          />
        ) : (
          <ClockLoader
            loading={true}
            size={200}
            color={"var(--primary-spinner)"}
          />
        )}
      </div>
    );
  };
  return <>{renderSpinner()}</>;
};

export default AppSpinner;
