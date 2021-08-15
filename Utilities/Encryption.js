import jwt from "jsonwebtoken";

// encrypt sync
export const gen_token = (data) =>
  jwt.sign(JSON.stringify(data), "iamlawyeredup");

// decrypt sync
export const decoded = (data) => jwt.verify(data, "iamlawyeredup");
