import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 3500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section} style={{ padding: "0px" }}>
      <div className={classes.container}>
        <GridContainer>
          <GridItem
            xs={12}
            className={classes.marginAuto}
            style={{ padding: "0px" }}
          >
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img
                    src="/Logo Assets/uma.jpg"
                    alt="First slide"
                    className="slick-image"
                  />
                </div>
                <div>
                  <img
                    src="/Parallex/itcCenter.JPG"
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Cnr Arrars and Beatty Streets, Office 1 and 2 Rama Centre
            Emalahleni, 1035
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src="/Parallex/class.JPG"
                    alt="Third slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Examination In session
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
