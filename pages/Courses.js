import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import Image from "next/image";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import Button from "components/CustomButtons/Button.js";
import Link from "next/link";
// sections for this page
import CustomizedTables from "../components/Tables/CourseTable";
import Meta from "../components/Meta";

import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const [whatsApp, setWhatsApp] = React.useState(<></>);
  React.useEffect(() => {
    setWhatsApp(
      <FloatingWhatsApp
        zIndex={99999}
        phone="+27813800206"
        popupMessage="Welcome to Innovation Technology Campus, how may we help you?"
        headerTitle="Innovation Technology Campus"
        size="48px"
      />
    );
  }, []);
  return (
    <>
      <Meta title="Courses" description="" keyWords="" />
      <div>
        {whatsApp}
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
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax image="/Header_Assets/courses.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Courses</h1>
                  <h3 className={classes.subtitle}>
                    A collection of all the courses we offer
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div
          className={classNames(classes.main, classes.mainRaised)}
          id="MainBody"
        >
          <GridContainer>
            <GridItem xs={12}>
              <CustomizedTables />
            </GridItem>
            <GridItem xs={12} align="center">
              <div style={{ padding: "15px" }}>
                <Link href="/Register">
                  <Button color="info" round>
                    Register Now
                  </Button>
                </Link>
                <Link href="/Contact">
                  <Button color="info" round>
                    Contact
                  </Button>
                </Link>
              </div>
            </GridItem>
          </GridContainer>
        </div>
        <Footer />
      </div>
    </>
  );
}
