import React from "react";
import Meta from "../components/Meta";
import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import styles from "styles/jss/nextjs-material-kit/pages/components.js";
import { makeStyles } from "@material-ui/core/styles";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import classNames from "classnames";
import Image from "next/image";
import { CircularProgress, IconButton } from "@material-ui/core";
import { CloudDownload, Search } from "@material-ui/icons";
import UserForm from "../components/userForm/ReturnForm";
import { jsPDF } from "jspdf";
import Footer from "components/Footer/Footer.js";

const useStyles = makeStyles(styles);

const Details = props => {
  const classes = useStyles();
  const [detailsOf, setDetailsOf] = React.useState([]);
  const [IDNumber, setIDNumber] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [isID, setIsID] = React.useState(true);
  const [isIDPass, setIsIDPass] = React.useState("");
  const [dataloading, setDataLoading] = React.useState(false);
  const [len, setlen] = React.useState(0);
  const { ...rest } = props;

  const onSearch = async () => {
    setDetailsOf([]);
    setDataLoading(true);
    const resolution = await fetch("/api/ClientRegistration/GetRegDetails", {
      method: "POST",
      body:
        isIDPass === "Passport"
          ? JSON.stringify({
              Passport: IDNumber,
            })
          : JSON.stringify({
              ID: IDNumber,
            }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(data => data.json())
      .catch(err => console.log(err));

    setDataLoading(false);

    if (resolution.result === null) {
      setIsID(false);
      setDetailsOf([]);
    } else {
      setIsID(true);
      setDetailsOf(resolution.result);
    }
  };

  return (
    <>
      <Meta title="Details" description="" keyWords="" />
      <div>
        <Header
          brand={
            <div style={{ display: "flex", flexDirection: "CollapsibleTable" }}>
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
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax image="/Header_Assets/details.jpg">
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12}>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Details</h1>
                  <br />
                  <Button
                    color={isIDPass === "ID" ? "rose" : "info"}
                    size="lg"
                    onClick={() => {
                      setIsIDPass("ID");
                    }}
                  >
                    ID
                  </Button>
                  <Button
                    color={isIDPass === "Passport" ? "rose" : "info"}
                    size="lg"
                    onClick={() => {
                      setIsIDPass("Passport");
                    }}
                  >
                    PassPort
                  </Button>
                  {isIDPass && (
                    <>
                      <h3 className={classes.subtitle}>
                        Enter {isIDPass} number of any registered student
                      </h3>
                      <div
                        style={{
                          background: "#fff",
                          borderRadius: "8px",
                          padding: "10px",
                        }}
                      >
                        <CustomInput
                          success
                          labelText={isIDPass + " number here..."}
                          id="first"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: isIDPass === "Passport" ? "text" : "number",
                            onChange: e => {
                              setlen(e.target.value.length);
                              setIDNumber(e.target.value);
                            },
                            endAdornment: (
                              <IconButton
                                onClick={() => {
                                  if (isIDPass === "ID" && len === 13) {
                                    onSearch();
                                  } else if (isIDPass === "Passport") {
                                    onSearch();
                                  }
                                }}
                              >
                                <Search className={classes.inputIconsColor} />
                              </IconButton>
                            ),
                            required: true,
                            onKeyPress: key => {
                              if (key.key === "Enter") {
                                if (isIDPass === "ID" && len === 13) {
                                  onSearch();
                                } else if (isIDPass === "Passport") {
                                  onSearch();
                                }
                              }
                            },
                            minLength: 13,
                          }}
                        />
                        {isIDPass === "ID" && (
                          <b
                            style={{
                              color:
                                len === 0
                                  ? "gray"
                                  : len !== 13
                                  ? "red"
                                  : "green",
                            }}
                          >
                            {len === 0
                              ? "Start typing"
                              : len !== 13
                              ? "*Enter a 13 digit number*"
                              : "Hit Enter!"}
                          </b>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div
          className={classNames(classes.main, classes.mainRaised)}
          id="MainBody2"
        >
          {detailsOf.length === 0 ? (
            dataloading === false ? (
              <div
                style={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <h3>
                  <b style={{ color: isID === false ? "red" : "inherit" }}>
                    {isID === false
                      ? `Could Not find details for the provided ${isIDPass} number`
                      : "Try Searching for some details"}
                  </b>
                </h3>
                <br></br>
              </div>
            ) : (
              <div
                style={{
                  display: "flex",
                  height: "250px",
                  width: "100%",
                }}
              >
                <CircularProgress
                  style={{ margin: "auto", color: "#44a6c6" }}
                />
              </div>
            )
          ) : (
            <>
              <UserForm data={detailsOf[0]} />
              <div style={{ padding: "8px", display: "flex" }}>
                <IconButton
                  style={{ color: "#44a6c6" }}
                  onClick={async () => {
                    setLoading(true);
                    const pdf = new jsPDF();
                    pdf.html(window.document.getElementById("bodyform"), {
                      x: 0,
                      y: 0,
                      html2canvas: {
                        scale: 0.235,
                        width: 900,
                      },
                      callback: function (doc) {
                        setTimeout(() => {
                          doc.save(detailsOf[0].FirstName + ".pdf");
                          setLoading(false);
                        }, 1500);
                      },
                    });
                  }}
                >
                  {loading === false ? (
                    <CloudDownload />
                  ) : (
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
                </IconButton>
                <h5 style={{ margin: "auto 10px" }}>Download PDF form</h5>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
