import { connectToDatabase } from "../../../utils/mongoDB/mongodb";

const { MAIL_GUN_API_KEY } = process.env;
const domain = "sparkledigi.com";

var mailgun = require("mailgun-js")({
  apiKey: MAIL_GUN_API_KEY,
  domain: domain,
});

const RegisterStudent = async (req, res) => {
  const { db } = await connectToDatabase();

  const getelems = new Promise((resolve, reject) => {
    resolve(
      db.collection("registered").insertOne({
        ...req.body,
        created: new Date().toISOString(),
      })
    );
  });

  getelems.then(() => {
    var data = {
      from: "Gabriel<info@innovationtech.co.za>",
      to: `<${req.body.EMailAddress}>`,
      subject: "SuccessFully Registered",
      text: `Hi ${
        req.body.FirstName
      }, You Have successfully registered with us for the following programmes:
        ${req.body.ProgrammeType}
        
        ${req.body.ProgrammeName.map(
          elem => `Name: ${elem.name} | Duration: ${elem.durationOf}`
        )}.
        
        When making payments, please deposit your fees in the following account:
        
        School's banking details.  Bank: ABSA.  Account number. 4083185356
        Name.  Innovation Technology Campus

        Thank you for registering with us!
        `,
    };

    mailgun.messages().send(data);

    res.status(200).json({ success: true, message: "Registered Successfully" });
  });
  getelems.catch(err =>
    res.status(400).json({ success: false, message: err.message })
  );
};

export default RegisterStudent;
