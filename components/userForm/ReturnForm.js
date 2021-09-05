import React from "react";

const UserForm = ({ data }) => {
  const {
    IDNumber,
    PassportNumber,
    BirthDate,
    MaritalStatus,
    Gender,
    LanguageCode,
    LearnerTitle,
    DisabilityStatusCode,
    FirstName,
    OtherNames,
    LearnerHomeAddress,
    HomePostalCode,
    LearnerPostalAddress,
    PostalCode,
    PhoneNumber,
    ProvinceCode,
    CellNumber,
    FaxNumber,
    EMailAddress,
    GUARDIANFirstName,
    GUARDIANContactNumber,
    GUARDIANOtherNames,
    GUARDIANResidentialAddress,
    ProgrammeType,
    ProgrammeName,
    SAQAID,
    Credits,
    Duration,
    Attendence,
    EveningLessions,
    Signture,
  } = data;

  const ArrProg = () => {
    return (
      <>
        {ProgrammeName.map(elem => (
          <span style={{ width: "100%" }}>{elem.name}</span>
        ))}
      </>
    );
  };

  const ArrSaqa = () => {
    return (
      <>
        {ProgrammeType === "Nated Programmes"
          ? ProgrammeName.map(elem => (
              <span style={{ width: "100%" }}>{elem.ID}</span>
            ))
          : "N/A"}
      </>
    );
  };

  return (
    <div id="bodyform">
      <header className="header">
        <img
          className="headerImg"
          src="https://www.innovationtech.co.za/Logo%20Assets/itcLetterHead.png"
        />
      </header>
      <div className="info">
        <div style={{ width: "fit-content", margin: "auto" }}>
          <span>
            <h3 className="h4Heading">
              <b style={{ width: "100%" }}>LEARNER REGISTRATION FORM</b>
            </h3>
          </span>
          <p className="h4Heading2">
            *This form has been designed according to SAQA specifications, refer
            to look up table for codes
          </p>
          <p className="h4Heading2">
            **Please note: A copy of your ID or Driver’s License must accompany
            this registration
          </p>
          <p className="h4Heading2">
            ***Attach List of Unit Standards for Skills Programs
          </p>
        </div>
        <span>
          <h3 className="h4Heading2">1. LEARNER DETAILS</h3>
        </span>
        <table className="table">
          <thead>
            <th>Learner National ID Number:</th>
            <td>{IDNumber}</td>
          </thead>
          <thead>
            <th>Learner Birth Date:</th>
            <td>{BirthDate}</td>
          </thead>
          <thead>
            <th>Passport Number</th>
            <td>{PassportNumber}</td>
          </thead>
          <thead>
            <th>Marital Status</th>
            <td>{MaritalStatus}</td>
          </thead>
          <thead>
            <th>Home Language Code:</th>
            <td>{LanguageCode}</td>
          </thead>
          <thead>
            <th>Gender</th>
            <td>{Gender}</td>
          </thead>
          <thead>
            <th>Disability Status Code:</th>
            <td>{DisabilityStatusCode}</td>
          </thead>
          <thead>
            <th>Learner Title:</th>
            <td>{LearnerTitle}</td>
          </thead>
          <thead>
            <th>First Name</th>
            <td>{FirstName}</td>
          </thead>
          <thead>
            <th>Other Names</th>
            <td>{OtherNames}</td>
          </thead>
          <thead>
            <th>Learner Home Address:</th>
            <td>{LearnerHomeAddress}</td>
          </thead>
          <thead>
            <th>Postal Code:</th>
            <td>{HomePostalCode}</td>
          </thead>
          <thead>
            <th>Learner Postal Address:</th>
            <td>{LearnerPostalAddress}</td>
          </thead>
          <thead>
            <th>Postal Code:</th>
            <td>{PostalCode}</td>
          </thead>
          <thead>
            <th>Learner Phone Number:</th>
            <td>{PhoneNumber}</td>
          </thead>
          <thead>
            <th>Province Code:</th>
            <td>{ProvinceCode}</td>
          </thead>
          <thead>
            <th>Learner Cell Number:</th>
            <td>{CellNumber}</td>
          </thead>
          <thead>
            <th>Learner Fax Number:</th>
            <td>{FaxNumber}</td>
          </thead>
          <thead>
            <th>Learner E-Mail Address:</th>
            <td>{EMailAddress}</td>
          </thead>
        </table>
      </div>
      <br />
      <br />
      <span>
        <h3
          className="h4Heading"
          style={{ paddingTop: "60px", height: "fit-content" }}
        >
          2. PARENT / GUARDIAN DETAILS
        </h3>
      </span>
      <table className="table">
        <thead>
          <th>First Name</th>
          <td>{GUARDIANFirstName}</td>
        </thead>
        <thead>
          <th>Other Names</th>
          <td>{GUARDIANOtherNames}</td>
        </thead>
        <thead>
          <th>Residential Address</th>
          <td>{GUARDIANResidentialAddress}</td>
        </thead>
        <thead>
          <th>Contact Details</th>
          <td>{GUARDIANContactNumber}</td>
        </thead>
      </table>
      <span>
        <h3 className="h4Heading">3. PROGRAMME DETAILS</h3>
      </span>
      <table className="table">
        <thead>
          <th>Programme Name</th>
          <td style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <ArrProg />
          </td>
        </thead>
        <thead>
          <th>Attendence</th>
          <td>{Attendence}</td>
        </thead>
        <thead>
          <th>SAQA I.D:</th>
          <td style={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
            <ArrSaqa />
          </td>
        </thead>
        <thead>
          <th>Credits:</th>
          <td>{Credits}</td>
        </thead>
        <thead>
          <th>Evening:</th>
          <td>{EveningLessions}</td>
        </thead>
        <thead>
          <th>Duration:</th>
          <td>{Duration}</td>
        </thead>
      </table>
      <div>
        <span>
          <h3 className="h4Heading">4. TERMS AND CONDITIONS:</h3>
        </span>
        <ul className="ulListo">
          <li>Attendance of all lessons is compulsory</li>
          <li>
            All internal assessment tasks are to be written before being allowed
            to write external assessments in each and every subject.
          </li>
          <li>Tuition fees are to be paid by the 3rd of every month.</li>
          <li>
            In situations where fees are not paid by the 3rd of the month,
            proper arrangements should be made with the principal otherwise you
            will not be allowed to enter into the classNameroom and an interest
            of R100 will be charged on all over due accounts.
          </li>
          <li>
            All learners are supposed to get and sign a learner code of conduct.
          </li>
          <li>Discipline at the college has to be adhered to at all times.</li>
        </ul>
        <div style={{ width: "95%", margin: "auto" }}>
          <p className="finalwords">
            I have read, understood and accepted all the conditions stipulated
            above
          </p>
          <table style={{ width: "100%" }}>
            <thead>
              <th>
                <p style={{ paddingRight: "20px" }}>Learner Signature:</p>
              </th>
              <td>
                <img
                  style={{
                    width: "auto",
                    height: "125px",
                    borderBottom: "2px solid black",
                  }}
                  src={Signture}
                />
              </td>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
