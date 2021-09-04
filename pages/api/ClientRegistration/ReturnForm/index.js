const pdf = require("html-pdf");
import confirmEmail from "../EmailTemps/confirmationEmail";

const ReturnForm = async (req, res) => {
  return new Promise((resolve, reject) => {
    pdf
      .create(confirmEmail(req.body), {})
      .toFile(`./public/${req.body.FirstName}.pdf`, function (err, resolution) {
        if (err) {
          res.status(400).json({ success: false, data: null });

          console.log(err.message);
          reject(err);
        }

        res
          .status(200)
          .json({ success: true, data: `${req.body.FirstName}.pdf` });

        return resolve(resolution.filename);
      });
  });
};

export default ReturnForm;
