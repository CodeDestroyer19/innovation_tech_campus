import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import { Build, Person } from "@material-ui/icons";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import Image from "next/image";
import Link from "next/link";
import { List, ListItem } from "@material-ui/core";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Take your skills to the next level</h2>
          <h5 className={classes.description}>
            Innovation Technology Campus is an accredited learning institution
            which derives its strength from the demand of the scarcity of skills
            in South Africa.
          </h5>
          <h5 className={classes.description}>
            We aim to establish a training Institution of excellence for the
            training of selected students in the management and educational
            sector to enable them to meet our vision of a diversified skill
            sector.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <br />

        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Our Mission"
              description={
                <List>
                  {[
                    "To cherish human development ethics and work towards advancement of human development in the whole world at large",
                    "To uplift the human development sector and promote platinum(highest) training standards",
                    "To be the largest, most effective and influential service provider in the community when it comes to human resources development",
                  ].map((elem, index) => (
                    <ListItem
                      key={`missionStatement-no#${index}`}
                      alignItems="center"
                    >
                      <h5
                        className={classes.description}
                        style={{ margin: "0px" }}
                      >
                        {elem}
                      </h5>
                    </ListItem>
                  ))}
                </List>
              }
              icon={Build}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Umalusi Accredited"
              description={
                <h5 className={classes.description} style={{ margin: "0px" }}>
                  We are an Umalusi arredited school with{" "}
                  {Math.abs(
                    new Date(
                      "Fri Aug 27 2012 23:18:35 GMT+0200 (South Africa Standard Time)"
                    ).getFullYear() -
                      new Date(
                        "Fri Aug 27 2021 23:18:35 GMT+0200 (South Africa Standard Time)"
                      ).getFullYear()
                  )}{" "}
                  years of expirence and counting. We hope to continue passing
                  down knowlegde year by year and educate the nation for years
                  to come!
                </h5>
              }
              icon={VerifiedUser}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Our Values"
              description={
                <List>
                  {[
                    "Respect for diversity",
                    "Edcuational equity",
                    "Academic excellence",
                    "Value dimensions of each student [Intellectual, Social, Emotional, Phyusical and Spiritual]",
                    "Integrity",
                    "Responsibility",
                  ].map((elem, index) => (
                    <ListItem
                      key={`ValuesStatement-no#${index}`}
                      alignItems="center"
                      style={{ width: "100%" }}
                    >
                      <h5
                        className={classes.description}
                        style={{ margin: "0px" }}
                      >
                        {elem}
                      </h5>
                    </ListItem>
                  ))}
                </List>
              }
              icon={Person}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      <br />
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={6}>
          <Image src="/img/books.jpg" layout="fill" />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <h2 className={classes.title}>View Our Courses</h2>
          <h5 className={classes.description} style={{ margin: "0px 20px" }}>
            We offer a wide variety of courses and programmes. By clicking the
            'View More' button, You will be able to see the details of each
            programme category
          </h5>
          <List>
            {[
              "ENGINEERING SCIENCE N1-N6",
              "BUSINESS STUDIES N4-N6",
              "MATRIC RE-WRITE",
              "EARTH MOVING MACHINES (THEORY & PRACTICAL)",
              "SEMI-SKILLED (THEORY & PRACTICAL)",
              "COMPUTER STUDIES (THEORY & PRACTICAL)",
            ].map((elem, index) => (
              <ListItem
                key={`CoursesStatement-no#${index}`}
                alignItems="center"
                style={{ width: "100%", paddingTop: "0px" }}
              >
                <h5 className={classes.description} style={{ margin: "0px" }}>
                  <small>{elem}</small>
                </h5>
              </ListItem>
            ))}
          </List>
          <Link href="/Courses">
            <Button color="info" round>
              View More
            </Button>
          </Link>
        </GridItem>
      </GridContainer>
    </div>
  );
}
