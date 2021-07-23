exports.successRes = (res, msg) => {
  return res.status(200).json({
    success: true,
    message: msg,
  });
};

exports.errorRes = (res, err) => {
  return res.status(500).json({
    success: false,
    error: err,
  });
}