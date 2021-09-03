import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import Image from "next/image";

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";
import Meta from "../components/Meta";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
      <Meta title="About" description="" keyWords="" />
      <div>
        {whatsApp}
        <Header
          color="transparent"
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
          changeColorOnScroll={{
            height: 200,
            color: "white",
          }}
          {...rest}
        />
        <Parallax filter image="/Parallex/itcCenter.JPG" />
        <div
          className={classNames(classes.main, classes.mainRaised)}
          id="MainBody"
        >
          <div>
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <div className={classes.profile}>
                    <div>
                      <img
                        src="/Logo Assets/itc transparent.PNG"
                        alt="..."
                        className={imageClasses}
                      />
                    </div>
                    <div className={classes.name}>
                      <h3 className={classes.title}>
                        Innovation Technology Campus
                      </h3>
                      <h6>Tertiary Educational Institution</h6>
                      <Button
                        link
                        justIcon
                        className={classes.margin5}
                        color="transparent"
                        href="https://www.facebook.com/innovation.Tech.Campus"
                        target="_blank"
                      >
                        <i className={"fab fa-facebook"} />
                      </Button>
                    </div>
                  </div>
                </GridItem>
              </GridContainer>
              <div className={classes.description}>
                <p>
                  Innovation Technology Campus is an accredited learning
                  institution which derives its strength from the demand of the
                  scarcity of skills in South Africa.
                </p>
                <p>
                  We aim to establish a training Institution of excellence for
                  the training of selected students in the management and
                  educational sector to enable them to meet our vision of a
                  diversified skill sector.
                </p>
              </div>
              <div className={classes.description}>
                <h5>
                  <b>Address:</b>
                </h5>
                <p>
                  Cnr Botha & Mandela Streets, Old Witbank News Buiilding Town,
                  Emalahleni, 1035
                </p>
              </div>
              <div className={classes.description}>
                <h5>
                  <b>Banking details:</b>
                </h5>
                <p>Bank: ABSA.</p>
                <p>Account number. 4083185356</p>
                <p> Name. Innovation Technology Campus</p>
              </div>
              <div className={classes.description}>
                <h5>
                  <b>Contact</b>
                </h5>
                <p>
                  <b>Phone:</b> 013 658 6961
                </p>
                <p>
                  <b>Email:</b> info@innvationtech.co.za
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
