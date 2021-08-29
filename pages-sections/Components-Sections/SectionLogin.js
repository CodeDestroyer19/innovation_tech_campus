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
import Multiselect from "multiselect-react-dropdown";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";
import styles2 from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";
import {
  calculateMatric,
  rows,
  rows3,
  rows4,
  rows5,
  rows6,
} from "../../utils/SiteData/courses";

const useStyles = makeStyles(styles);
const useStyles2 = makeStyles(styles2);

const Options = ({
  step,
  ID,
  handleTYPE,
  classes,
  setStep,
  programme,
  handleProgrammeTYPE,
}) => {
  const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  const [subjectState, setSubjectState] = React.useState([]);
  const [valueOfCourse, setValueOfCourse] = React.useState(0);
  const [duration, setDuration] = React.useState("");

  const handleStateChange = e => {
    setSubjectState(e);
    setValueOfCourse(calculateMatric(subjectState.length));
    if (subjectState.length > 0) setDuration(subjectState[0].durationOf);
    if (subjectState.length == 0) setDuration("");
  };

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
                  <Multiselect
                    placeholder="Marital Status"
                    options={["Single", "Married"]}
                    isObject={false}
                    singleSelect={true}
                    style={{
                      searchBox: {
                        border: "none",
                        fontSize: "10px",
                        minHeight: "50px",
                        borderBottom: "2px solid #eee",
                      },
                      multiselectContainer: {
                        marginTop: "auto",
                        marginBottom: "17px",
                      },
                    }}
                  />
                </GridItem>

                <GridItem xs={12} md={6}>
                  <Multiselect
                    placeholder="Gender"
                    options={["Male", "Female"]}
                    isObject={false}
                    singleSelect={true}
                    style={{
                      searchBox: {
                        border: "none",
                        fontSize: "10px",
                        minHeight: "50px",
                        borderBottom: "2px solid #eee",
                      },
                      multiselectContainer: {
                        marginTop: "auto",
                        marginBottom: "17px",
                      },
                    }}
                  />
                </GridItem>
                {ID === "ID" && (
                  <GridItem xs={12} md={6}>
                    <Multiselect
                      placeholder="Home Language Code"
                      options={["Pending", "Pending"]}
                      isObject={false}
                      singleSelect={true}
                      style={{
                        searchBox: {
                          border: "none",
                          fontSize: "10px",
                          minHeight: "50px",
                          borderBottom: "2px solid #eee",
                        },
                        multiselectContainer: {
                          marginTop: "auto",
                          marginBottom: "17px",
                        },
                      }}
                    />
                  </GridItem>
                )}
                <GridItem xs={12} md={6}>
                  <Multiselect
                    placeholder="Learner Title"
                    options={["Single", "Married"]}
                    isObject={false}
                    singleSelect={true}
                    style={{
                      searchBox: {
                        border: "none",
                        fontSize: "10px",
                        minHeight: "50px",
                        borderBottom: "2px solid #eee",
                      },
                      multiselectContainer: {
                        marginTop: "auto",
                        marginBottom: "17px",
                      },
                    }}
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
                  <Multiselect
                    placeholder="Province Code"
                    options={["Single", "Married"]}
                    isObject={false}
                    singleSelect={true}
                    style={{
                      searchBox: {
                        border: "none",
                        fontSize: "10px",
                        minHeight: "50px",
                        borderBottom: "2px solid #eee",
                      },
                      multiselectContainer: {
                        marginTop: "auto",
                        marginBottom: "17px",
                      },
                    }}
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
              labelText="Contact Number"
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
                type: "text",
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
                multiline: true,
                rows: 5,
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
          <GridItem xs={12}>
            <GridContainer align="center">
              <GridItem xs={12} sm={4}>
                <Button
                  fullWidth
                  color="rose"
                  onClick={() => {
                    handleProgrammeTYPE("Matic Re-write");
                  }}
                >
                  Matic Re-write
                </Button>
              </GridItem>
              <GridItem xs={12} sm={4}>
                <Button
                  fullWidth
                  color="rose"
                  onClick={() => {
                    handleProgrammeTYPE("Nated Programmes");
                  }}
                >
                  Nated Programmes
                </Button>
              </GridItem>
              <GridItem xs={12} sm={4}>
                <Button
                  fullWidth
                  color="rose"
                  onClick={() => {
                    handleProgrammeTYPE("Semi-Skills");
                  }}
                >
                  Semi-Skills
                </Button>
              </GridItem>
              <GridItem xs={12} sm={4}>
                <Button
                  fullWidth
                  color="rose"
                  onClick={() => {
                    handleProgrammeTYPE("Short Programmes");
                  }}
                >
                  Short Programmes
                </Button>
              </GridItem>
              <GridItem xs={12} sm={4}>
                <Button
                  fullWidth
                  color="rose"
                  onClick={() => {
                    handleProgrammeTYPE("Computers");
                  }}
                >
                  Computers
                </Button>
              </GridItem>
            </GridContainer>
          </GridItem>
          {programme && (
            <>
              <GridItem xs={12} md={6}>
                <div style={{ width: "100%", height: "100%", display: "flex" }}>
                  <Multiselect
                    displayValue="name"
                    options={
                      programme === "Matic Re-write"
                        ? rows6
                        : programme === "Nated Programmes"
                        ? rows
                        : programme === "Semi-Skills"
                        ? rows4
                        : programme === "Short Programmes"
                        ? rows3
                        : programme === "Computers" && rows5
                    }
                    placeholder={
                      programme !== "Matic Re-write"
                        ? "Programme Name"
                        : "Subjects"
                    }
                    isMulti={
                      programme === "Matic Re-write" ||
                      programme === "Nated Programmes"
                        ? true
                        : false
                    }
                    selectionLimit={
                      programme === "Matic Re-write"
                        ? 6
                        : programme === "Nated Programmes"
                        ? 4
                        : 1
                    }
                    closeOnSelect={false}
                    style={{
                      searchBox: {
                        border: "none",
                        fontSize: "10px",
                        minHeight: "50px",
                        borderBottom: "2px solid #eee",
                      },
                      multiselectContainer: {
                        marginTop: "auto",
                        marginBottom: "17px",
                      },
                    }}
                    showCheckbox={true}
                    onSelect={handleStateChange}
                    onRemove={handleStateChange}
                  />
                </div>
              </GridItem>
              {programme !== "Matic Re-write" ? (
                <>
                  {programme === "Nated Programmes" && (
                    <>
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
                    </>
                  )}
                  <GridItem xs={12} md={6}>
                    {duration && (
                      <CustomInput
                        labelText="Duration:"
                        id="pass"
                        value={duration}
                        formControlProps={{
                          fullWidth: true,
                          value: duration,
                        }}
                        inputProps={{
                          type: "text",
                          value: duration,
                        }}
                      />
                    )}
                  </GridItem>
                </>
              ) : (
                <GridItem xs={12} md={6}>
                  Cost: R{valueOfCourse}{" "}
                  {valueOfCourse !== 0 && "+ REGISTRAION FEE (First month)"}
                  <br />
                  {valueOfCourse !== 0 && `${valueOfCourse} Per Month`}
                </GridItem>
              )}
              <GridItem xs={12} md={6}>
                <Multiselect
                  placeholder="Attendence"
                  options={["Part Time", "Full Time"]}
                  isObject={false}
                  singleSelect={true}
                  style={{
                    searchBox: {
                      border: "none",
                      fontSize: "10px",
                      minHeight: "50px",
                      borderBottom: "2px solid #eee",
                    },
                    multiselectContainer: {
                      marginTop: "auto",
                      marginBottom: "17px",
                    },
                  }}
                />
              </GridItem>
              <GridItem xs={12} md={6}>
                <Multiselect
                  placeholder="Evening Lessions"
                  options={["Yes", "No"]}
                  isObject={false}
                  singleSelect={true}
                  style={{
                    searchBox: {
                      border: "none",
                      fontSize: "10px",
                      minHeight: "50px",
                      borderBottom: "2px solid #eee",
                    },
                    multiselectContainer: {
                      marginTop: "auto",
                      marginBottom: "17px",
                    },
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
              </GridItem>
            </>
          )}
        </GridContainer>
      );
  }
};

export default function SectionLogin() {
  const classes = useStyles();
  const classes2 = useStyles2();
  const [ID, setID] = React.useState("");
  const [programme, setProgramme] = React.useState("");
  const [step, setStep] = React.useState(1);

  const handleTYPE = typeID => {
    setID(typeID);
  };
  const handleProgrammeTYPE = typeID => {
    setProgramme(typeID);
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
                    programme={programme}
                    handleProgrammeTYPE={handleProgrammeTYPE}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  {step === 3 && (
                    <Button color="info" size="lg">
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
