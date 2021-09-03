const pdf = require("html-pdf");
import confirmEmail from "../EmailTemps/confirmationEmail";
import { connectToDatabase } from "../../../../utils/mongoDB/mongodb";
import { config } from "process";
var fs = require("fs");
var path = require("path");

const ReturnForm = async (req, res) => {
  const { db } = await connectToDatabase();
  const getelems = new Promise((resolve, reject) => {
    resolve(
      db.collection("registered").findOne({
        IDNumber: req.body.id,
      })
    );
  });

  getelems.then(async data => {
    pdf
      .create(confirmEmail(data), {
        height: "10.5in",
        orientation: "portrait",
        border: "0",
      })
      .toFile(`./public/${data.FirstName}.pdf`, function (err, resolution) {
        if (err) {
          Promise.reject();
          res.status(400).json({ success: false, data: null });

          console.log(err);
        }

        res.status(200).json({ success: true, data: `${data.FirstName}.pdf` });
        Promise.resolve();
      });
  });

  getelems.catch(err => res.send("Error"));
};

export default ReturnForm;
