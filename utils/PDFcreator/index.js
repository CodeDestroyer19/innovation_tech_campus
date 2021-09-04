import pdf from "html-pdf";
import { saveAs } from "file-saver";
import confirmEmail from "../../pages/api/ClientRegistration/EmailTemps/confirmationEmail";

const ReturnForm = (body, callback) => {
  pdf
    .create(confirmEmail(body))
    .toFile(`./public/${body.FirstName}.pdf`, (err, resolution) => {
      if (err) {
        return false;
      }
      saveAs(
        window.origin + "/" + `${body.FirstName}.pdf`,
        `${body.FirstName}.pdf`
      );
      callback(false);
    });
};

export default ReturnForm;
