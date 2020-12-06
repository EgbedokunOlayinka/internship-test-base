import React from "react";
import "./App.css";

import { Container } from "react-bootstrap";

import Heading from "./components/Heading";
import CustomForm from "./components/CustomForm";
import Icon from "./components/Icon";
import Info from "./components/Info";
import Socials from "./components/Socials";

const App = () => {
  return (
    <div className="background py-4">
      <Container className="container">
        <div className="left-div">
          <Heading />
          <CustomForm />
        </div>
        <div className="right-div">
          <Icon />
          <Info />
          <Socials />
        </div>
      </Container>
    </div>
  );
};

export default App;
