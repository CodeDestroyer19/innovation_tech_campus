import { connectToDatabase } from "../../../utils/mongoDB/mongodb";

const RegisterStudent = async (req, res) => {
  const { db } = await connectToDatabase();
  const {
    IDNumber,
    PassportNumber,
    BirthDate,
    MaritalStatus,
    Gender,
    LanguageCode,
    LearnerTitle,
    DisabilityStatusCode,
    FirstName,
    OtherNames,
    LearnerHomeAddress,
    HomePostalCode,
    LearnerPostalAddress,
    PostalCode,
    PhoneNumber,
    ProvinceCode,
    CellNumber,
    FaxNumber,
    EMailAddress,
    GUARDIANFirstName,
    GUARDIANContactNumber,
    GUARDIANOtherNames,
    GUARDIANResidentialAddress,
    ProgrammeType,
    ProgrammeName,
    SAQAID,
    Credits,
    Duration,
    Attendence,
    EveningLessions,
  } = req.body;

  const getelems = new Promise((resolve, reject) => {
    resolve(
      db.collection("registered").insertOne({
        IDNumber,
        PassportNumber,
        BirthDate,
        MaritalStatus,
        Gender,
        LanguageCode,
        LearnerTitle,
        DisabilityStatusCode,
        FirstName,
        OtherNames,
        LearnerHomeAddress,
        HomePostalCode,
        LearnerPostalAddress,
        PostalCode,
        PhoneNumber,
        ProvinceCode,
        CellNumber,
        FaxNumber,
        EMailAddress,
        GUARDIANFirstName,
        GUARDIANContactNumber,
        GUARDIANOtherNames,
        GUARDIANResidentialAddress,
        ProgrammeType,
        ProgrammeName,
        SAQAID,
        Credits,
        Duration,
        Attendence,
        EveningLessions,
      })
    );
  });

  getelems.then(() =>
    res.status(200).json({ success: true, message: "Registered Successfully" })
  );
  getelems.catch(err =>
    res.status(400).json({ success: false, message: err.message })
  );
};

export default RegisterStudent;
