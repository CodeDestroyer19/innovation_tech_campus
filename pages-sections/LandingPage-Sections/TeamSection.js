import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Who you'll be working with</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="/People/rep.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Prudence Phindile Zabane
                <br />
                <small className={classes.smallTitle}>Administrator</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  She lectures, and manages all academic issues, and acts as an
                  administration/examinations officer
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src="/People/gab.jpg" alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Gabriel Kiwalabye
                <br />
                <small className={classes.smallTitle}>Director</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  CEO, in charge of all campus operations.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src="/People/jose.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Joseph Baraza
                <br />
                <small className={classes.smallTitle}>Campus Manager</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  An all-rounder manager from academics, marketing, logistics,
                  and administration.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
