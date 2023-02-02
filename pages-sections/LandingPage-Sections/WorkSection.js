import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import People from "@material-ui/icons/People";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
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
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem>
          <h2 className={classes.title}>Our Location</h2>

          <h4 className={classes.description}>
            Cnr Arrars and Beatty Streets, Office 1 and 2 Rama Centre
            Emalahleni, 1035
          </h4>
          <h2 className={classes.title}>Contact Details</h2>
          <h4 className={classes.description}>Phone: 013 656 1033</h4>
          <h4 className={classes.description}>
            Email: info@innovationtech.co.za
          </h4>
        </GridItem>
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Contact us</h2>
          <h4 className={classes.description}>
            Whether you just want to understand something that's unclear,
            register with us, or refer someone, we will get back to you as soon
            as possible
          </h4>
          <form className={classes.form} onSubmit={SubMitDATA}>
            <p className={classes.divider}></p>

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

            <Button color="rose" size="lg" type="submit">
              Send Message
            </Button>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
