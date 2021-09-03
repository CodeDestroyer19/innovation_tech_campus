const pdf = require("html-pdf");
import confirmEmail from "../EmailTemps/confirmationEmail";
import { connectToDatabase } from "../../../../utils/mongoDB/mongodb";
import { config } from "process";
var fs = require("fs");
var path = require("path");

const ReturnForm = async (req, res) => {
  const { db } = await connectToDatabase();
  try {
    db.collection("registered").findOne(
      {
        IDNumber: req.body.id,
      },
      function (err, document) {
        if (err) {
          res.status(400);
        } else {
          pdf
            .create(confirmEmail(document), {})
            .toFile(
              `./public/${document.FirstName}.pdf`,
              function (err, resolution) {
                if (err) {
                  Promise.reject();
                  res.status(400).json({ success: false, data: null });

                  console.log(err.message);
                }

                Promise.resolve();
                res
                  .status(200)
                  .json({ success: true, data: `${document.FirstName}.pdf` });
              }
            );
        }
      }
    );
  } catch (error) {
    console.log(error.message);
  }
};

export default ReturnForm;
