
/*
 * GET home page.
 */
var readdirp = require('readdirp');
var markdown = require('markdown-js');

module.exports = function(app){

  readdirp({ 
    root: './views', 
    directoryFilter: ['!*_mods'], 
    fileFilter: [ '*.jade' ]
  }).on('data', function (entry) {

    // console.log(entry.path);
    var url = entry.path.slice(0, -5);
    console.log(url);
    
    app.get('/' + url + '.html', function(req, res){
      res.render(url, { title: 'index', dev: false});
    });

  });


};