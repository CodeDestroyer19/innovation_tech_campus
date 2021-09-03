const confirmEmail = data => {
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

  const email = `<!DOCTYPE html><html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Registration Form</title>
      <style>
        * {
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
          box-sizing: border-box;
        }
  
        .body {
          width: 100%;
          margin: auto;
          background: url("https://www.innovationtech.co.za/Logo%20Assets/itc%20transparent.PNG");
          background-repeat: no-repeat;
          background-size: auto;
          background-color: #eee;
          min-height: 100vh;
          max-height: fit-content;
          background-position: center;
          display: flex;
          justify-content: center;
        }
  
        .container {
          background-color: #ffffffd7;
          width: 100%;
          min-height: 100vh;
        }
  
        .header {
          width: 100%;
          height: 175px;
          display: flex;
          align-items: center;
        }
  
        .headerImg {
          width: 50%;
          height: auto;
          margin: auto;
        }
  
        .info {
          display: flex;
          justify-content: center;
          flex-direction: column;
          width: 100%;
        }
  
        p {
          margin: 5px 0px;
        }
  
        .h4Heading {
          text-align: center;
        }
  
        .table {
          width: 95%;
          margin: auto;
        }
  
        .table thead th {
          background-color: rgb(170, 170, 170);
          width: fit-content;
          padding: 8px;
        }
  
        .table thead td {
          background-color: #eee;
        }
      </style>
    </head>
    <body class="body">
      <div class="container">
        <header class="header">
          <img
            class="headerImg"
            src="https://www.innovationtech.co.za/Logo%20Assets/itcLetterHead.png"
          />
        </header>
        <div class="info">
          <div style="width: fit-content; margin: auto">
            <span>
              <h4 class="h4Heading">
                <b>LEARNER REGISTRATION FORM</b>
              </h4>
            </span>
            <p class="h4Heading">
              *This form has been designed according to SAQA specifications, refer
              to look up table for codes
            </p>
            <p class="h4Heading">
              **Please note: A copy of your ID or Driver’s License must accompany
              this registration
            </p>
            <p class="h4Heading">
              ***Attach List of Unit Standards for Skills Programs
            </p>
          </div>
          <table class="table">
            <span>
              <h3 class="h4Heading">1. LEARNER DETAILS</h3>
            </span>
  
            <thead>
              <th>Learner National ID Number:</th>
              <td>${IDNumber}</td>
              <th>Learner Birth Date:</th>
              <td>${BirthDate}</td>
            </thead>
            <thead>
              <th>Passport Number</th>
              <td>${PassportNumber}</td>
              <th>Marital Status</th>
              <td>${MaritalStatus}</td>
            </thead>
            <thead>
              <th>Home Language Code:</th>
              <td>${LanguageCode}</td>
              <th>Gender</th>
              <td>${Gender}</td>
            </thead>
            <thead>
              <th>Disability Status Code:</th>
              <td>${DisabilityStatusCode}</td>
              <th>Learner Title:</th>
              <td>${LearnerTitle}</td>
            </thead>
            <thead>
              <th>First Name</th>
              <td>${FirstName}</td>
              <th>Other Names</th>
              <td>${OtherNames}</td>
            </thead>
            <thead>
              <th>Learner Home Address:</th>
              <td>${LearnerHomeAddress}</td>
              <th>Postal Code:</th>
              <td>${HomePostalCode}</td>
            </thead>
            <thead>
              <th>Learner Postal Address:</th>
              <td>${LearnerPostalAddress}</td>
              <th>Postal Code:</th>
              <td>${PostalCode}</td>
            </thead>
            <thead>
              <th>Learner Phone Number:</th>
              <td>${PhoneNumber}</td>
              <th>Province Code:</th>
              <td>${ProvinceCode}</td>
            </thead>
            <thead>
              <th>Learner Cell Number:</th>
              <td>${CellNumber}</td>
              <th>Learner Fax Number:</th>
              <td>${FaxNumber}</td>
            </thead>
          </table>
          <table class="table">
            <thead>
              <th style="width: 100%">Learner E-Mail Address:</th>
              <td style="width: 100%">${EMailAddress}</td>
            </thead>
          </table>
          <table class="table">
            <span>
              <h3 class="h4Heading">2. PARENT/GUARDIAN DETAILS</h3>
            </span>
            <thead>
              <th style="width: 100%">First Name</th>
              <td style="width: 100%">${GUARDIANFirstName}</td>
            </thead>
            <thead>
              <th style="width: 100%">Other Names</th>
              <td style="width: 100%">${GUARDIANOtherNames}</td>
            </thead>
            <thead>
              <th style="width: 100%">Residential Address</th>
              <td style="width: 100%">${GUARDIANResidentialAddress}</td>
            </thead>
            <thead>
              <th style="width: 100%">Contact Details</th>
              <td style="width: 100%">${GUARDIANContactNumber}</td>
            </thead>
          </table>
          <table class="table">
            <span>
              <h3 class="h4Heading">3. PROGRAMME DETAILS</h3>
            </span>
  
            <thead>
              <th style="width: 100%">Programme Name</th>
              <td style="width: 100%; display: flex, flex-wrap: wrap">${ProgrammeName.map(
                elem => `<span style={{width: '100%}}>${elem.name}</span>`
              )}</td>
              <th style="width: 100%">Attendence</th>
              <td style="width: 100%">${Attendence}</td>
            </thead>
            <thead>
              <th style="width: 100%">SAQA I.D:</th>
              <td style="width: 100%; display: flex, flex-wrap: wrap">${
                ProgrammeType === "Nated Programmes"
                  ? ProgrammeName.map(
                      elem => `<span style={{width: '100%}}>${elem.ID}</span>`
                    )
                  : "N/A"
              }</td>
              <th style="width: 100%">Credits:</th>
              <td style="width: 100%">${Credits}</td>
            </thead>
            <thead>
              <th style="width: 100%">Evening:</th>
              <td style="width: 100%">${EveningLessions}</td>
              <th style="width: 100%">Duration:</th>
              <td style="width: 100%">${Duration}</td>
            </thead>
          </table>
          <div>
            <span>
              <h3 class="h4Heading">4. TERMS AND CONDITIONS:</h3>
            </span>
            <ul>
              <li>Attendance of all lessons is compulsory</li>
              <li>
                All internal assessment tasks are to be written before being
                allowed to write external assessments in each and every subject.
              </li>
              <li>Tuition fees are to be paid by the 3rd of every month.</li>
              <li>
                In situations where fees are not paid by the 3rd of the month,
                proper arrangements should be made with the principal otherwise
                you will not be allowed to enter into the classroom and an
                interest of R100 will be charged on all over due accounts.
              </li>
              <li>
                All learners are supposed to get and sign a learner code of
                conduct.
              </li>
              <li>
                Discipline at the college has to be adhered to at all times.
              </li>
            </ul>
            <p>
              I have read, understood and accepted all the conditions stipulated
              above
            </p>
            <div style="display: flex">
              <p style="padding-right: 20px">Learner Signature:</p>
              <img style="width: 350px; height: auto" src='${Signture}'/>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`;

  return email;
};

export default confirmEmail;
