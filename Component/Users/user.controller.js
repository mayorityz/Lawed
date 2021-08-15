import Users from "./user.model.js";
import Orm from "./../../Utilities/ORM.js";
import { gen_token, decoded } from "../../Utilities/Encryption.js";

export const CreateNewAccount = async (req, res) => {
  const { email, firstname, lastname, password, username } = req.body;
  try {
    await Orm.Create(
      { email, firstname, lastname, password, username },
      Users,
      (_res) => {
        res.send(_res);
      }
    );
  } catch (error) {
    console.log(error);
  }
};

export const FindUser = async (req, res) => {
  try {
    let Login = new Orm(req.body, Users);
    await Login.Read((result) => {
      if (result.status) {
        let token = gen_token(result.data);
        res.cookie("__la_y_wer_ed_up__toktok", token, {
          httpOnly: true,
          maxAge: 60 * 60 * 60 * 60 * 60,
        });
      }
      res.send(result);
    });
  } catch (error) {
    console.log(error);
  }
};

export const checkUserToken = (req, res) => {
  const _decode = decoded(req.userToken);
  console.log(_decode[0].firstname);
  res.send("ok now!");
};
