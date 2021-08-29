import Case from "./case.model.js";
import Orm from "./../../Utilities/ORM.js";
import { decoded } from "../../Utilities/Encryption.js";

export const createCase = async (req, res) => {
  const { title, category, details } = req.body;
  const userid = decoded(req.userToken)[0]._id;

  await Orm.Create(
    { title, category, details, postedBy: userid },
    Case,
    (CB) => {
      res.send(CB);
    }
  );
};

export const allCases = async (req, res) => {
  // return top 8 - 14 cases
  let database = new Orm({}, Case);
  await database.Read((response) => {
    console.log(response);
    res.send(response);
  });
};
