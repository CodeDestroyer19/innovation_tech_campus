import { connectToDatabase } from "../../../../utils/mongoDB/mongodb";

const GetRegDetails = async (req, res) => {
  const { db } = await connectToDatabase();
  const { ID } = req.body;

  const getelems = new Promise((resolve, reject) => {
    resolve(
      db.collection("registered").findOne({
        IDNumber: ID,
      })
    );
  });

  getelems.then(data => {
    const {
      IDNumber,
      PassportNumber,
      FirstName,
      OtherNames,
      PhoneNumber,
      EMailAddress,
      ProgrammeName,
      Signture,
      created,
      ProgrammeType,
    } = data;

    res.status(200).json({
      success: true,
      result: [
        {
          IDNumber,
          PassportNumber,
          FirstName,
          OtherNames,
          PhoneNumber,
          EMailAddress,
          ProgrammeName,
          Signture,
          created,
          ProgrammeType,
        },
      ],
    });
  });
  getelems.catch(err =>
    res.status(400).json({ success: false, message: err.message })
  );
};

export default GetRegDetails;
