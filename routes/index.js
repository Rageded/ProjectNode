exports.index = function(req, res) {
  res.render('index', {
    title: 'Home',
    classname: 'home',
    users: ['Edwin', 'Suzette', 'Antonio', 'Andrew', 'Ivonne']
  });
}

 exports.about = function(req, res) {
  res.render('index', {
    title: 'About Me',
    classname: 'about'

  });
}
