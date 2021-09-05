const pdf = require("html-pdf");
import confirmEmail from "../EmailTemps/confirmationEmail";
import path from "path";

const ReturnForm = async (req, res) => {
  return new Promise((resolve, reject) => {
    let file = { content: confirmEmail(req.body), name: req.body.FirstName };
    pdf
      .create(confirmEmail(req.body), {
        format: "A4",
        phantomPath: path.resolve(
          process.cwd(),
          "node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs"
        ),
      })
      .toBuffer((err, pdfBuffer) => {
        if (err) throw err;

        res.status(200).json({ success: true, data: pdfBuffer });
      });
  });
};

export default ReturnForm;
