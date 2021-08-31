import React from "react";
import { Grid, List, ListItem } from "@material-ui/core";

export default function CollapsibleTable({ detailsOf }) {
  const newD = detailsOf[0];
  const {
    IDNumber,
    PassportNumber,
    FirstName,
    OtherNames,
    PhoneNumber,
    EMailAddress,
    ProgrammeName,
    Signture,
    created,
    ProgrammeType,
  } = newD;
  return (
    <>
      <div style={{ padding: "10px" }}>
        <Grid container spacing={2}>
          <Grid item container xs={12} spacing={2}>
            <Grid item xs={12} md={6}>
              <h5>
                Name:<b>{FirstName}</b>{" "}
              </h5>
            </Grid>
            <Grid item xs={12} md={6}>
              {IDNumber === "N/A" ? (
                <h5>
                  PassPort number:<b>{PassportNumber}</b>{" "}
                </h5>
              ) : (
                <h5>
                  Id number:<b>{IDNumber}</b>{" "}
                </h5>
              )}
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <h5>
                Programme Type:<b>{ProgrammeType}</b>{" "}
              </h5>
            </Grid>
            <Grid item xs={12}>
              <h5>
                <b>
                  Programme Details:<b>{ProgrammeName.length}</b>{" "}
                </b>
              </h5>
              <List>
                {ProgrammeName.map((elem, index) => (
                  <ListItem>
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        SAQA ID:<b>{elem.ID}</b>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Programme Name:<b>{elem.name}</b>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        Duration:<b>{elem.durationOf}</b>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        NQF Level:<b>{elem.value}</b>
                      </Grid>
                    </Grid>
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <h5>
                Registered On:<b>{created}</b>{" "}
              </h5>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <h5>
                OtherNames:<b>{OtherNames}</b>{" "}
              </h5>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <h5>
                PhoneNumber:<b>{PhoneNumber}</b>{" "}
              </h5>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <h5>
                E-Mail Address:<b>{EMailAddress}</b>{" "}
              </h5>
            </Grid>
            <Grid item xs={12}>
              <b>
                <h5>Signature</h5>
              </b>
              <img
                style={{ MaxWidth: "350px", minWidth: "290px", height: "auto" }}
                src={Signture}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
