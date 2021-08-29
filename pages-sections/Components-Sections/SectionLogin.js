import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import FormControl from "@material-ui/core/FormControl";
import Datetime from "react-datetime";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";
import styles2 from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

const Options = ({ step, ID, handleTYPE, classes, setStep }) => {
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");

  switch (step) {
    case 1:
      return (
        <>
          <h5>
            <small>
              *This form has been designed according to SAQA specifications,
              refer to look up table for codes
            </small>
            <br />
            <small>
              **Please note: A copy of your ID or Driver’s License must
              accompany this registration
            </small>
            <br />
            <small>***Attach List of Unit Standards for Skills Programs</small>
            <br />
            <small>
              *This form has been designed according to SAQA specifications,
              refer to look up table for codes{" "}
            </small>
            <br />
            <small>
              **Please note: A copy of your ID or Driver’s License must
              accompany this registration
            </small>
            <br />
            <small>***Attach List of Unit Standards for Skills Programs</small>
          </h5>
          <GridContainer>
            <GridItem xs={12}>
              <h5>1. LEARNER DETAILS</h5>
            </GridItem>
            <GridItem xs={12}>
              <Button onClick={() => handleTYPE("ID")}>S.A ID</Button>
              <Button onClick={() => handleTYPE("PassPort")}>PassPort</Button>
            </GridItem>
            {ID === "ID" && (
              <GridItem xs={12} md={6}>
                <CustomInput
                  labelText="Learner National ID Number:"
                  id="first"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "number",
                  }}
                />
              </GridItem>
            )}

            {ID === "PassPort" && (
              <GridItem xs={12} md={6}>
                <CustomInput
                  labelText="Passport Number"
                  id="pass"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  inputProps={{
                    type: "text",
                  }}
                />
              </GridItem>
            )}
            {ID && (
              <>
                <GridItem xs={12} md={6}>
                  <FormControl fullWidth>
                    <br />
                    <Datetime
                      id="email"
                      dateFormat="YYYY-MM-DD"
                      timeFormat={false}
                      inputProps={{
                        placeholder: "Learner Birth Date:  Here",
                      }}
                    />
                  </FormControl>
                </GridItem>

                <GridItem xs={12} md={6}>
                  <div className={classes.title}>
                    <h6>Marital Status</h6>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={selectedEnabled === "a"}
                          onChange={() => setSelectedEnabled("a")}
                          value="a"
                          name="radio button enabled"
                          aria-label="A"
                          icon={
                            <FiberManualRecord
                              className={classes.radioUnchecked}
                            />
                          }
                          checkedIcon={
                            <FiberManualRecord
                              className={classes.radioChecked}
                            />
                          }
                          classes={{
                            checked: classes.radio,
                            root: classes.radioRoot,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                        root: classes.labelRoot,
                      }}
                      label="Married"
                    />
                  </div>
                  <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                  >
                    <FormControlLabel
                      control={
                        <Radio
                          checked={selectedEnabled === "b"}
                          onChange={() => setSelectedEnabled("b")}
                          value="b"
                          name="radio button enabled"
                          aria-label="B"
                          icon={
                            <FiberManualRecord
                              className={classes.radioUnchecked}
                            />
                          }
                          checkedIcon={
                            <FiberManualRecord
                              className={classes.radioChecked}
                            />
                          }
                          classes={{
                            checked: classes.radio,
                            root: classes.radioRoot,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                        root: classes.labelRoot,
                      }}
                      label="Not Married"
                    />
                  </div>
                </GridItem>

                <GridItem xs={12} md={6}>
                  <div className={classes.title}>
                    <h6>Gender</h6>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <FormControlLabel
                      control={
                        <Radio
                          checked={selectedEnabled === "a"}
                          onChange={() => setSelectedEnabled("a")}
                          value="a"
                          name="radio button enabled"
                          aria-label="A"
                          icon={
                            <FiberManualRecord
                              className={classes.radioUnchecked}
                            />
                          }
                          checkedIcon={
                            <FiberManualRecord
                              className={classes.radioChecked}
                            />
                          }
                          classes={{
                            checked: classes.radio,
                            root: classes.radioRoot,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                        root: classes.labelRoot,
                      }}
                      label="Male"
                    />
                  </div>
                  <div
                    className={
                      classes.checkboxAndRadio +
                      " " +
                      classes.checkboxAndRadioHorizontal
                    }
                  >
                    <FormControlLabel
                      control={
                        <Radio
                          checked={selectedEnabled === "b"}
                          onChange={() => setSelectedEnabled("b")}
                          value="b"
                          name="radio button enabled"
                          aria-label="B"
                          icon={
                            <FiberManualRecord
                              className={classes.radioUnchecked}
                            />
                          }
                          checkedIcon={
                            <FiberManualRecord
                              className={classes.radioChecked}
                            />
                          }
                          classes={{
                            checked: classes.radio,
                            root: classes.radioRoot,
                          }}
                        />
                      }
                      classes={{
                        label: classes.label,
                        root: classes.labelRoot,
                      }}
                      label="Female"
                    />
                  </div>
                </GridItem>
                {ID === "ID" && (
                  <GridItem xs={12} md={6}>
                    <CustomDropdown
                      buttonText="Home Language Code:"
                      hoverColor="info"
                      dropdownHeader="Codes"
                      buttonProps={{
                        color: "info",
                        fullWidth: true,
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link",
                      ]}
                    />
                  </GridItem>
                )}
                <GridItem xs={12} md={6}>
                  <CustomDropdown
                    buttonText="Learner Title:"
                    hoverColor="black"
                    dropdownHeader="Titles"
                    buttonProps={{
                      color: "black",
                      fullWidth: true,
                    }}
                    dropdownList={[
                      "Action",
                      "Another action",
                      "Something else here",
                      { divider: true },
                      "Separated link",
                      { divider: true },
                      "One more separated link",
                    ]}
                  />
                </GridItem>
                <GridItem xs={12} md={6}>
                  <CustomInput
                    labelText="Disability Status Code:"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "text",
                    }}
                  />
                </GridItem>

                <GridItem xs={12} md={6}>
                  <CustomInput
                    labelText="First Name"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "number",
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="Other Names"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "number",
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <h5>Home Address</h5>
                </GridItem>
                <GridItem xs={12} md={8}>
                  <CustomInput
                    labelText="Learner Home Address:"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} md={4}>
                  <div
                    style={{ width: "100%", height: "100%", display: "flex" }}
                  >
                    <CustomInput
                      labelText="Postal Code:"
                      id="postal"
                      formControlProps={{
                        fullWidth: true,
                        style: { marginTop: "auto" },
                      }}
                      inputProps={{
                        type: "number",
                      }}
                    />
                  </div>
                </GridItem>
                <GridItem xs={12}>
                  <h5>Postal Address</h5>
                </GridItem>
                <GridItem xs={12} md={8}>
                  <CustomInput
                    labelText="Learner Postal Address:"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      multiline: true,
                      rows: 5,
                    }}
                  />
                </GridItem>
                <GridItem xs={12} md={4}>
                  <div
                    style={{ width: "100%", height: "100%", display: "flex" }}
                  >
                    <CustomInput
                      labelText="Postal Code:"
                      id="postal"
                      formControlProps={{
                        fullWidth: true,
                        style: { marginTop: "auto" },
                      }}
                      inputProps={{
                        type: "number",
                      }}
                    />
                  </div>
                </GridItem>
                <GridItem xs={12} md={6}>
                  <CustomInput
                    labelText="Learner Phone Number:"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "number",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} md={6}>
                  <CustomDropdown
                    buttonText="Province Code:"
                    hoverColor="black"
                    dropdownHeader="Titles"
                    buttonProps={{
                      color: "rose",
                      fullWidth: true,
                    }}
                    dropdownList={[
                      "Action",
                      "Another action",
                      "Something else here",
                      { divider: true },
                      "Separated link",
                      { divider: true },
                      "One more separated link",
                    ]}
                  />
                </GridItem>
                <GridItem xs={12} md={6}>
                  <CustomInput
                    labelText="Learner Cell Number:"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "number",
                    }}
                  />
                </GridItem>
                <GridItem xs={12} md={6}>
                  <CustomInput
                    labelText="Learner Fax Number:"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "number",
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <CustomInput
                    labelText="Learner E-Mail Address:"
                    id="pass"
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "email",
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Button
                    color="rose"
                    onClick={() => {
                      setStep(prev => prev + 1);
                    }}
                  >
                    Next
                  </Button>
                </GridItem>
              </>
            )}
          </GridContainer>
        </>
      );

    case 2:
      return (
        <GridContainer>
          <GridItem xs={12}>
            <h5>2. PARENT/GUARDIAN DETAILS</h5>
          </GridItem>
          <GridItem xs={12} md={6}>
            <CustomInput
              labelText="First Name"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "text",
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <CustomInput
              labelText="Contact Details"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>
          <GridItem xs={12}>
            <CustomInput
              labelText="Other Names"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>
          <GridItem xs={12}>
            <CustomInput
              labelText="Residential Address"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>

          <GridItem xs={12}>
            <Button
              color="rose"
              onClick={() => {
                setStep(prev => prev - 1);
              }}
            >
              Back
            </Button>
            <Button
              color="rose"
              onClick={() => {
                setStep(prev => prev + 1);
              }}
            >
              Next
            </Button>
          </GridItem>
        </GridContainer>
      );
    case 3:
      return (
        <GridContainer>
          <GridItem xs={12}>
            <h5>3. PROGRAMME DETAILS</h5>
          </GridItem>
          <GridItem xs={12} md={6}>
            <CustomInput
              labelText="Programme Name "
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <CustomInput
              labelText="SAQA I.D:"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <CustomInput
              labelText="Credits:"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <CustomInput
              labelText="Duration:"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <CustomInput
              labelText="Full Time:"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <CustomInput
              labelText="Part Time:"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>
          <GridItem xs={12} md={6}>
            <CustomInput
              labelText="Evening:"
              id="pass"
              formControlProps={{
                fullWidth: true,
              }}
              inputProps={{
                type: "number",
              }}
            />
          </GridItem>
        </GridContainer>
      );
  }
};

export default function SectionLogin() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [ID, setID] = React.useState("");
  const [step, setStep] = React.useState(1);

  const handleTYPE = typeID => {
    setID(typeID);
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12}>
            <Card>
              <form className={classes.form}>
                <CardHeader color="info" className={classes.cardHeader}>
                  <h4>Register</h4>
                </CardHeader>

                <CardBody>
                  <Options
                    step={step}
                    ID={ID}
                    handleTYPE={handleTYPE}
                    classes={classes2}
                    setStep={setStep}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  {step === 3 && (
                    <Button simple color="primary" size="lg">
                      Get started
                    </Button>
                  )}
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
