import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Layout/Layout";
import Menu from "./Menu/Menu";

const LandingPage = () => {
  const renderLandingPage = () => (
    <Layout title="Savor Our Delicacies" background={true} backdrop={true}>
      <section style={{ color: "var(--primary-white)" }}>
        <h1
          style={{ color: "var(--primary-orange)", fontFamily: "Roboto Bold" }}
        >
          Caf&egrave;
        </h1>
        <p>
          <button
            className="btn btn-warning"
            style={{
              padding: "5px 20px",
              fontWeight: "bold",
              margin: "3px 10px",
            }}
          >
            <Link to="/catalog" style={{ color: "inherit" }}>
              Explore
            </Link>
          </button>{" "}
          our offers and enjoy the savories
        </p>
        <p>Home Deiveries under 30 minutes flat.</p>
        <Menu />
      </section>
    </Layout>
  );

  return <>{renderLandingPage()}</>;
};

export default LandingPage;
