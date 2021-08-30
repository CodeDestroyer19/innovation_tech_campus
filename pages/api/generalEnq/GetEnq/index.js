import { connectToDatabase } from "../../../utils/mongoDB/mongodb";

const GetEnq = async (req, res) => {
  const { db } = await connectToDatabase();
  const { Email } = req.body;

  const getelems = new Promise((resolve, reject) => {
    if (Email) {
      resolve(
        db
          .collection("enq")
          .find({
            Email,
          })
          .toArray()
      );
    } else {
      resolve(db.collection("enq").find().toArray());
    }
  });

  getelems.then(data => res.status(200).json({ success: true, result: data }));
  getelems.catch(err =>
    res.status(400).json({ success: false, message: err.message })
  );
};

export default GetEnq;
