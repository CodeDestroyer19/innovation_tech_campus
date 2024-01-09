import { connectToDatabase } from "../../../../utils/mongoDB/mongodb";
const { MAIL_GUN_API_KEY } = process.env;
const domain = "sandbox35fa9049d92744c7a24a3748c25f6299.mailgun.org";

var mailgun = require("mailgun-js")({
  apiKey: MAIL_GUN_API_KEY,
  domain: domain,
});

const PostEnq = async (req, res) => {
  const { db } = await connectToDatabase();

  const getelems = new Promise((resolve, reject) => {
    resolve(
      db.collection("enq").insertOne({
        ...req.body,
      })
    );
  });

  getelems.then(() => {
    res.status(200).json({ success: true, message: "Posted Successfully" });

    var data = {
      from: "Gabriel<info@innovationtech.co.za>",
      to: `<${req.body.Email}>`,
      subject: "Thanks For reaching out! ✋",
      text: "Thanks for reaching out, via email. We will send you an email as soon as possible!",
    };

    mailgun.messages().send(data);

    var data2 = {
      from: `<${req.body.Email}>`,
      to: "<technologycampusa@gmail.com>",
      subject: "A message from A prospect",
      text: req.body.Message,
    };

    mailgun.messages().send(data2);
  });

  getelems.catch(err =>
    res.status(400).json({ success: false, message: err.message })
  );
};

export default PostEnq;
