const pdf = require("html-pdf-node");
import confirmEmail from "../EmailTemps/confirmationEmail";
var phantomjs = require("phantomjs");

const ReturnForm = async (req, res) => {
  return new Promise((resolve, reject) => {
    let file = { content: confirmEmail(req.body), name: req.body.FirstName };
    pdf
      .generatePdf(file, { format: "A4" }, (err, result) => {
        if (err) res.end(err);
      })
      .then(pdfBuffer => {
        res.status(200).json({ success: true, data: pdfBuffer });
      });
  });
};

export default ReturnForm;
