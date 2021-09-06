import { connectToDatabase } from "../../../../utils/mongoDB/mongodb";

const GetRegDetails = async (req, res) => {
  const { db } = await connectToDatabase();
  const { ID, Passport } = req.body;

  console.log(ID, Passport);
  const getelems = new Promise((resolve, reject) => {
    if (ID)
      resolve(
        db.collection("registered").findOne({
          IDNumber: ID,
        })
      );

    if (Passport)
      resolve(
        db.collection("registered").findOne({
          PassportNumber: Passport,
        })
      );
  });

  getelems.then(data => {
    if (!data) return res.status(404).json({ success: false, result: null });

    res.status(200).json({
      success: true,
      result: [data],
    });
  });
  getelems.catch(err =>
    res.status(400).json({ success: false, message: err.message })
  );
};

export default GetRegDetails;
