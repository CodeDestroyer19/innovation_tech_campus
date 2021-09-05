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
import classNames from "classnames";
import Image from "next/image";
import CollapsibleTable from "../components/Tables/DetailsTable";
import { CircularProgress, IconButton } from "@material-ui/core";
import { CloudDownload, Search } from "@material-ui/icons";
import { saveAs } from "file-saver";

const useStyles = makeStyles(styles);
const Details = props => {
  const classes = useStyles();
  const [detailsOf, setDetailsOf] = React.useState([]);
  const [IDNumber, setIDNumber] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const { ...rest } = props;


  const onSearch = async () => {
    const resolution = await fetch("/api/ClientRegistration/GetRegDetails", {
      method: "POST",
      body: JSON.stringify({
        ID: IDNumber,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(data => data.json())
      .catch(err => console.log(err));

    setDetailsOf(resolution.result);
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
                  <h3 className={classes.subtitle}>Enter ID number</h3>
                  <div
                    style={{
                      background: "#fff",
                      borderRadius: "8px",
                      padding: "10px",
                    }}
                  >
                    <CustomInput
                      success
                      labelText="ID number here..."
                      id="first"
                      formControlProps={{
                        fullWidth: true,
                      }}
                      inputProps={{
                        type: "number",
                        onChange: e => setIDNumber(e.target.value),
                        endAdornment: (
                          <IconButton onClick={onSearch}>
                            <Search className={classes.inputIconsColor} />
                          </IconButton>
                        ),
                        required: true,
                      }}
                    />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div
          className={classNames(classes.main, classes.mainRaised)}
          id="MainBody"
        >
          {detailsOf.length === 0 ? (
            <div
              style={{
                padding: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <h3>
                <b>Try Searching for some details</b>
              </h3>
              <br></br>
            </div>
          ) : (
            <>
              <CollapsibleTable detailsOf={detailsOf} />
              <div style={{ padding: "8px", display: "flex" }}>
                <IconButton
                  color="inherit"
                  onClick={async () => {
                    setLoading(true);
                    const res = await fetch(
                      "/api/ClientRegistration/ReturnForm",
                      {
                        method: "POST",
                        body: JSON.stringify({ ...detailsOf[0] }),
                        headers: {
                          "Content-Type": "application/json",
                        },
                      }
                    ).then(data => data.json());

                    const arr = new Uint8Array(res.data.data);
                    console.log(arr);
                    const newBlob = new Blob([arr], {
                      type: "application/pdf",
                    });

                    saveAs(newBlob, detailsOf[0].FirstName);

                    setLoading(false);
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
                        color="inherit"
                        style={{ margin: "auto" }}
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
    </>
  );
};

export default Details;
