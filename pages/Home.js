import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import SectionCarousel from "pages-sections/Components-Sections/SectionCarousel.js";

import Meta from "../components/Meta";
import Link from "next/link";
import Image from "next/image";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function Home(props) {
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
      <Meta title="Innovation Tech" />
      <div>
        {whatsApp}
        <Header
          color="transparent"
          routes={dashboardRoutes}
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
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax filter responsive image="/Header_Assets/eng.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Innovations That Excite</h1>
                <h4>
                  Cultivating Courteous, Independent, skilled, Creative Thinkers
                  Since 2012.
                </h4>
                <h4>Find Your Ideal Course Now</h4>
                <br />
                <Link href="/Courses">
                  <Button color="success" size="lg">
                    <i className="fas fa-book" />
                    Courses
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div
          className={classNames(classes.main, classes.mainRaised)}
          id="MainBody"
        >
          <div className={classes.container}>
            <ProductSection />
            <SectionCarousel />
            <TeamSection />
            <WorkSection />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
