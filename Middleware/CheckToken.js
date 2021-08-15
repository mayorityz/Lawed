const checkUserToken = (req, res, next) => {
  try {
    const { __la_y_wer_ed_up__toktok } = req.cookies;
    req.userToken = __la_y_wer_ed_up__toktok;
    next();
  } catch (error) {
    res
      .status(400)
      .json({ status: false, message: "Failed User Auth. Login Again!" });
  }
};
export default checkUserToken;
