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
import FormControl from "@material-ui/core/FormControl";
import Datetime from "react-datetime";
import Multiselect from "multiselect-react-dropdown";
import { CircularProgress } from "@material-ui/core";
import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/loginStyle.js";
import SignPad from "../../components/SignPad/SignPad";
import Router from "next/router";

import {
  calculateMatric,
  rows,
  rows3,
  rows4,
  rows5,
  rows6,
} from "../../utils/SiteData/courses";

const useStyles = makeStyles(styles);

const Options = ({
  step,
  setStep,
  ID,
  setID,
  programme,
  setProgramme,
  valueOfCourse,
  setValueOfCourse,
  formState,
  setFormState,
}) => {
  const handleTYPE = typeID => {
    setID(typeID);
  };
  const handleProgrammeTYPE = typeID => {
    setProgramme(typeID);
  };

  console.log(formState.Signture);
  switch (step) {
    case 1:
      return (
        <>
          <h5>
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
              <Button onClick={() => handleTYPE("ID")} color="rose">
                S.A ID
              </Button>
              <Button onClick={() => handleTYPE("PassPort")} color="rose">
                PassPort
              </Button>
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
                    onChange: e =>
                      setFormState({
                        ...formState,
                        IDNumber: e.target.value,
                      }),
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
                    onChange: e =>
                      setFormState({
                        ...formState,
                        PassportNumber: e.target.value,
                      }),
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
                      dateFormat="YYYY-MM-DD"
                      timeFormat={false}
                      inputProps={{
                        placeholder: "Learner Birth Date:  Here",
                      }}
                      onChange={e =>
                        setFormState({
                          ...formState,
                          BirthDate: `${e.date()}/${e.month() + 1}/${e.year()}`,
                        })
                      }
                    />
                  </FormControl>
                </GridItem>

                <GridItem xs={12} md={6}>
                  <Multiselect
                    placeholder="Marital Status"
                    options={["Single", "Married"]}
                    isObject={false}
                    singleSelect={true}
                    onSelect={e =>
                      setFormState({ ...formState, MaritalStatus: e[0] })
                    }
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
                    onSelect={e => setFormState({ ...formState, Gender: e[0] })}
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
                      options={[
                        "AFR",
                        "ENG",
                        "NBL",
                        "XHO",
                        "ZUL",
                        "NSO",
                        "SOT",
                        "TSN",
                        "SSW",
                        "VEN",
                        "TSO",
                      ]}
                      isObject={false}
                      singleSelect={true}
                      onSelect={e =>
                        setFormState({ ...formState, LanguageCode: e[0] })
                      }
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
                    options={[
                      "Mr",
                      "Miss",
                      "Ms",
                      "Mrs",
                      "Doctor",
                      "Professor",
                      "Reverend",
                    ]}
                    isObject={false}
                    singleSelect={true}
                    onSelect={e =>
                      setFormState({ ...formState, LearnerTitle: e[0] })
                    }
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
                      onChange: e =>
                        setFormState({
                          ...formState,
                          DisabilityStatusCode: e.target.value,
                        }),
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
                      type: "text",
                      onChange: e =>
                        setFormState({
                          ...formState,
                          FirstName: e.target.value,
                        }),
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
                      onChange: e =>
                        setFormState({
                          ...formState,
                          OtherNames: e.target.value,
                        }),
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
                      onChange: e =>
                        setFormState({
                          ...formState,
                          LearnerHomeAddress: e.target.value,
                        }),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} md={4}>
                  <div
                    style={{ width: "100%", height: "100%", display: "flex" }}
                  >
                    <CustomInput
                      labelText="Home Postal Code:"
                      id="postal"
                      formControlProps={{
                        fullWidth: true,
                        style: { marginTop: "auto" },
                      }}
                      inputProps={{
                        type: "number",
                        onChange: e =>
                          setFormState({
                            ...formState,
                            HomePostalCode: e.target.value,
                          }),
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
                      onChange: e =>
                        setFormState({
                          ...formState,
                          LearnerPostalAddress: e.target.value,
                        }),
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
                        onChange: e =>
                          setFormState({
                            ...formState,
                            PostalCode: e.target.value,
                          }),
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
                      onChange: e =>
                        setFormState({
                          ...formState,
                          PhoneNumber: e.target.value,
                        }),
                    }}
                  />
                </GridItem>
                <GridItem xs={12} md={6}>
                  <Multiselect
                    placeholder="Province Code"
                    options={[
                      "EC",
                      "FS",
                      "GT",
                      "NL",
                      "LP",
                      "MP",
                      "NC",
                      "NW",
                      "WC",
                    ]}
                    isObject={false}
                    singleSelect={true}
                    onSelect={e =>
                      setFormState({ ...formState, ProvinceCode: e[0] })
                    }
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
                      onChange: e =>
                        setFormState({
                          ...formState,
                          CellNumber: e.target.value,
                        }),
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
                      type: "text",
                      onChange: e =>
                        setFormState({
                          ...formState,
                          FaxNumber: e.target.value,
                        }),
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
                      onChange: e =>
                        setFormState({
                          ...formState,
                          EMailAddress: e.target.value,
                        }),
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
                onChange: e =>
                  setFormState({
                    ...formState,
                    GUARDIANFirstName: e.target.value,
                  }),
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
                onChange: e =>
                  setFormState({
                    ...formState,
                    GUARDIANContactNumber: e.target.value,
                  }),
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
                onChange: e =>
                  setFormState({
                    ...formState,
                    GUARDIANOtherNames: e.target.value,
                  }),
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
                onChange: e =>
                  setFormState({
                    ...formState,
                    GUARDIANResidentialAddress: e.target.value,
                  }),
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
                    setFormState({
                      ...formState,
                      ProgrammeType: "Matic Re-write",
                    });
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
                    setFormState({
                      ...formState,
                      ProgrammeType: "Nated Programmes",
                    });
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
                    setFormState({
                      ...formState,
                      ProgrammeType: "Semi-Skills",
                    });
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
                    setFormState({
                      ...formState,
                      ProgrammeType: "Short Programmes",
                    });
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
                    setFormState({ ...formState, ProgrammeType: "Computers" });
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
                    onSelect={e => {
                      setValueOfCourse(calculateMatric(e.length));

                      if (e.length !== 0) {
                        setFormState({
                          ...formState,
                          ProgrammeName: e,
                          Duration: e[0].durationOf,
                          SAQAID: e.map(elem => elem.ID),
                        });
                      }
                      if (e.length == 0) {
                        setFormState({
                          ...formState,
                          Duration: "N/A",
                          SAQAID: "N/A",
                        });
                      }
                    }}
                    onRemove={e => {
                      setValueOfCourse(calculateMatric(e.length));

                      if (e.length !== 0) {
                        setFormState({
                          ...formState,
                          ProgrammeName: e,
                          Duration: e[0].durationOf,
                          SAQAID: e.map(elem => elem.ID),
                        });
                      }
                      if (e.length == 0) {
                        setFormState({
                          ...formState,
                          Duration: "N/A",
                          SAQAID: "N/A",
                        });
                      }
                    }}
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
                          value={9}
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                            value: formState.SAQAID,
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
                    <CustomInput
                      labelText="Duration:"
                      id="pass"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "text",
                        value: formState.Duration,
                      }}
                    />
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
                  onSelect={e =>
                    setFormState({ ...formState, Attendence: e[0] })
                  }
                  onRemove={() =>
                    setFormState({ ...formState, Attendence: "N/A" })
                  }
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
                  onSelect={e =>
                    setFormState({ ...formState, EveningLessions: e[0] })
                  }
                  onRemove={() =>
                    setFormState({ ...formState, EveningLessions: "N/A" })
                  }
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
              <GridItem>
                <h5>Signature</h5>
                <SignPad setFormState={setFormState} formState={formState} />
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
  const [step, setStep] = React.useState(1);
  const [ID, setID] = React.useState("");
  const [programme, setProgramme] = React.useState("");
  const [valueOfCourse, setValueOfCourse] = React.useState(0);

  const [formState, setFormState] = React.useState({
    IDNumber: "N/A",
    PassportNumber: "N/A",
    BirthDate: "N/A",
    MaritalStatus: "N/A",
    Gender: "N/A",
    LanguageCode: "N/A",
    LearnerTitle: "N/A",
    DisabilityStatusCode: "N/A",
    FirstName: "N/A",
    OtherNames: "N/A",
    LearnerHomeAddress: "N/A",
    HomePostalCode: "N/A",
    LearnerPostalAddress: "N/A",
    PostalCode: "N/A",
    PhoneNumber: "N/A",
    ProvinceCode: "N/A",
    CellNumber: "N/A",
    FaxNumber: "N/A",
    EMailAddress: "N/A",
    GUARDIANFirstName: "N/A",
    GUARDIANContactNumber: "N/A",
    GUARDIANOtherNames: "N/A",
    GUARDIANResidentialAddress: "N/A",
    ProgrammeType: "N/A",
    ProgrammeName: "N/A",
    SAQAID: "N/A",
    Credits: "N/A",
    Duration: "N/A",
    Attendence: "N/A",
    EveningLessions: "N/A",
    Signture: "",
  });

  const [serverRes, setServerRes] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const SUBMITFORMDATA = async e => {
    setLoading(true);
    e.preventDefault();

    const res = await fetch("/api/ClientRegistration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formState }),
    })
      .then(res => res.json())
      .catch(err => {
        console.log(err.message);
      });

    if (res.success === true) {
      setFormState({
        IDNumber: "N/A",
        PassportNumber: "N/A",
        BirthDate: "N/A",
        MaritalStatus: "N/A",
        Gender: "N/A",
        LanguageCode: "N/A",
        LearnerTitle: "N/A",
        DisabilityStatusCode: "N/A",
        FirstName: "N/A",
        OtherNames: "N/A",
        LearnerHomeAddress: "N/A",
        HomePostalCode: "N/A",
        LearnerPostalAddress: "N/A",
        PostalCode: "N/A",
        PhoneNumber: "N/A",
        ProvinceCode: "N/A",
        CellNumber: "N/A",
        FaxNumber: "N/A",
        EMailAddress: "N/A",
        GUARDIANFirstName: "N/A",
        GUARDIANContactNumber: "N/A",
        GUARDIANOtherNames: "N/A",
        GUARDIANResidentialAddress: "N/A",
        ProgrammeType: "N/A",
        ProgrammeName: "N/A",
        SAQAID: "N/A",
        Credits: "N/A",
        Duration: "N/A",
        Attendence: "N/A",
        EveningLessions: "N/A",
        Signture: "",
      });
    }

    setLoading(false);
    setServerRes(res);
    setTimeout(() => {
      Router.push("/Details");
    }, 5000);
  };

  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12}>
            <Card>
              <form className={classes.form} onSubmit={SUBMITFORMDATA}>
                <CardHeader color="info" className={classes.cardHeader}>
                  <h4>Register</h4>
                </CardHeader>

                <CardBody style={{ padding: "10px" }}>
                  <Options
                    step={step}
                    setStep={setStep}
                    ID={ID}
                    setID={setID}
                    programme={programme}
                    setProgramme={setProgramme}
                    valueOfCourse={valueOfCourse}
                    setValueOfCourse={setValueOfCourse}
                    formState={formState}
                    setFormState={setFormState}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  {step === 3 && (
                    <>
                      <Button color="info" size="lg" type="submit">
                        Get started
                      </Button>
                      {loading === true && (
                        <div
                          style={{
                            display: "flex",
                          }}
                        >
                          <CircularProgress
                            style={{ margin: "auto", color: "#44a6c6" }}
                          />
                        </div>
                      )}
                      {serverRes !== null && (
                        <div style={{ padding: "8px 16px" }}>
                          <h4>
                            <b
                              style={{
                                color:
                                  serverRes.success === false ? "res" : "green",
                              }}
                            >
                              {serverRes.message}
                            </b>
                          </h4>
                        </div>
                      )}
                    </>
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
