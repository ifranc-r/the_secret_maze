exports.take_key = (req, res, next) => {
  res.setHeader('Set-Cookie', 'take_key=true;');
  res.redirect('/meuble_et_clef');
};
