module.exports.controllers = {
  // GET Controllers
  main: function(req, res) {
    res.render('main.html', {conversionOptions: [{name: 'Greek', value: 'Greek'}, {name: 'Russian', value: 'Russian'}]});
  },
  saved: function(req, res) {
    res.send('saved');
  },
  services: function(req, res) {
    res.send('services');
  },
  about: function(req, res) {
    res.send('about');
  },
  // POST controllers
  generate: function(req, res) {
    res.send('Generates');
  }
}
