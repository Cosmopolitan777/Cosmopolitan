exports.deleteSession = async (req, res) => {
  await req.session.destroy(err => {
    if (err) throw err;
    // res.redirect("/");
    res.send(true);
  });
};
exports.test = (req, res) => {
  res.send({
    id: req.sessionID,
    name: req.session.name,
    snsId: req.session.snsId,
  });
};
