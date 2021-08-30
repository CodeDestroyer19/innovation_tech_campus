import { connectToDatabase } from "../../../../utils/mongoDB/mongodb";

const PostEnq = async (req, res) => {
  const { db } = await connectToDatabase();
  const { Name, Email, Message } = req.body;

  const getelems = new Promise((resolve, reject) => {
    resolve(
      db.collection("enq").insertOne({
        Name,
        Email,
        Message,
      })
    );
  });

  getelems.then(() =>
    res.status(200).json({ success: true, message: "Posted Successfully" })
  );
  getelems.catch(err =>
    res.status(400).json({ success: false, message: err.message })
  );
};

export default PostEnq;
