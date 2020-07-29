
exports.add_custumer = (req, res) => {
  const path = require('path');
  var path_json = path.join(__dirname, '../', 'data', 'custumer.json')
  var fs = require('fs');

  fs.readFile(path_json, 'utf8', function readFileCallback(err, data){
      if (err){
          console.log(err);
      } else {
      var obj = JSON.parse(data); //now it an object
      obj.table.push(req.query); //add some data
      fs.writeFile(path_json, JSON.stringify(obj, null, 4), (err) => {
        if (err) {  console.error(err);  return; };
      }); // write it back
    }});
};
