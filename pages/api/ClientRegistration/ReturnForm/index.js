const pdf = require("html-pdf");
import confirmEmail from "../EmailTemps/confirmationEmail";
var phantomjs = require("phantomjs");

const ReturnForm = async (req, res) => {
  console.log(phantomjs.path);
  return new Promise((resolve, reject) => {
    pdf
      .create(confirmEmail(req.body), {
        phantomPath: phantomjs.path,
      })
      .toStream((err, stream) => {
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
