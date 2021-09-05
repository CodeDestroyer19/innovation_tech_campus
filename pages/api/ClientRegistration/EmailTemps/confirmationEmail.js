const confirmEmail = data => {
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
      height: fit-content;
      display: flex;
      justify-content: center;
    }
    
    .container {
      background-color: #ffffffd7;
      width: 100%;
      min-height: 100vh;
    }
    
    .watermark{
      background-repeat: no-repeat;
      background-size: auto;
      background-color: rgb(255, 255, 255);
      background-position: center;
      background: url("https://www.innovationtech.co.za/Logo%20Assets/itc%20transparent.PNG");
      width: 100%;
      height: fit-content;
      display: flex;
      justify-content: center;
    }

    .header {
      width: 100%;
      height: 160px;
      display: flex;
      padding: 0px 20px
    }

    .headerImg {
      width: auto;
      height: 100%;
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
      width: 30%;
      padding: 4px;
    }

    .table thead td {
      background-color: lightgray;
      width: 70%;
      font-size: 14px !important
    }

    #pageFooter{
      height: 75 !important
    }
      </style>
    </head>
    
  </html>`;

  return email;
};

export default confirmEmail;
