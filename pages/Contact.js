import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";
// core components
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Image from "next/image";

import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";
import Meta from "../components/Meta";
import Map from "../components/Maps/Map";
import { FloatingWhatsApp } from "react-floating-whatsapp-button";
import "react-floating-whatsapp-button/dist/index.css";

const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
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

  const [formState, setFormState] = React.useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const SubMitDATA = async e => {
    e.preventDefault();

    await fetch("/api/generalEnq/postEnq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formState }),
    })
      .then(() =>
        setFormState({
          Name: "",
          Email: "",
          Message: "",
        })
      )
      .catch(err => {
        console.log(err.message);
      });
  };

  return (
    <>
      <Meta title="Contact" description="" keyWords="" />
      <div>
        {whatsApp}
        <Header
          absolute
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
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url('/img/bg7.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "top center",
          }}
        >
          <div className={classes.container} id="MainBody">
            <GridContainer justify="center">
              <GridItem xs={12} md={5} id="gridItem">
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form} onSubmit={SubMitDATA}>
                    <CardHeader color="info" className={classes.cardHeader}>
                      <h4>Send Message</h4>
                    </CardHeader>
                    <p className={classes.divider}></p>
                    <CardBody>
                      <CustomInput
                        success
                        labelText="First Name..."
                        id="first"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "text",
                          endAdornment: (
                            <InputAdornment position="end">
                              <People className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          onChange: e =>
                            setFormState({
                              ...formState,
                              Name: e.target.value,
                            }),
                          required: true,
                        }}
                      />
                      <CustomInput
                        success
                        labelText="Email..."
                        id="email"
                        formControlProps={{
                          fullWidth: true,
                        }}
                        inputProps={{
                          type: "email",
                          endAdornment: (
                            <InputAdornment position="end">
                              <Email className={classes.inputIconsColor} />
                            </InputAdornment>
                          ),
                          onChange: e =>
                            setFormState({
                              ...formState,
                              Email: e.target.value,
                            }),
                          required: true,
                        }}
                      />
                      <CustomInput
                        labelText="Your Message"
                        id="message"
                        success
                        formControlProps={{
                          fullWidth: true,
                          className: classes.textArea,
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5,
                          onChange: e =>
                            setFormState({
                              ...formState,
                              Message: e.target.value,
                            }),
                          required: true,
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button simple color="info" size="lg" type="submit">
                        Get started
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
              <GridItem xs={12} md={7} id="gridItem">
                <Map />
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    </>
  );
}
