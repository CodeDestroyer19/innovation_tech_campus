import React from "react";
// nodejs library that concatenates classes
// react components for routing our app without refresh
import Image from "next/image";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import SectionLogin from "pages-sections/Components-Sections/SectionLogin.js";
import Meta from "../components/Meta";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";

const useStyles = makeStyles(styles);

const Register = props => {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <>
      <Meta title="Register" description="" keyWords="" />
      <div>
        <Header
          brand={
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Image
                src="/Logo Assets/itc transparent.PNG"
                width="48"
                height="48"
              />
              <span id="logoName" style={{ margin: "auto 0px auto 10px" }}>
                Innovation Technology Campus
              </span>
              <span id="logoNameSmall" style={{ margin: "auto 0px auto 10px" }}>
                ITC
              </span>
            </div>
          }
          rightLinks={<HeaderLinks />}
          fixed
          color="dark"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <SectionLogin />
      </div>
    </>
  );
};

export default Register;
