const pdf = require("html-pdf");
import confirmEmail from "../EmailTemps/confirmationEmail";
import fs from "fs";

const ReturnForm = async (req, res) => {
  return new Promise((resolve, reject) => {
    pdf.create(confirmEmail(req.body), {}).toStream((err, stream) => {
      if (err) {
        console.log(err.message);
        return res.end(`Here is error ======>>>>> ${err.stack}`);
      }

      res.setHeader(
        "Content-disposition",
        "attachment; filename=" + req.body.FirstName
      );
      res.setHeader("Content-type", "application/pdf");
      stream.pipe(res);
    });
  });
};

export default ReturnForm;
