const fs = require('fs');
var util = require('util');
const paths = require('../config/paths');
// Define file paths
const JSON_PATH = paths.appSrc+'/assets/icomoon/selection.json';
const NEW_FILE_PATH = paths.appSrc+'/assets/icomoon/export.js';
// Import IcoMoon Json file
const json = require(JSON_PATH)

// Access to Icons data
const icons = json.icons;
// Declare emty object
let newJson = {};

// Map array and create new object
icons.map(data => {
  const pathLength = data.icon.paths.length;
  const colorLength = data.icon.attrs.length;
  let width = data.icon.width;
  if (!width) {
    width = 1024
  }
  const pathArray = [
    { 
      width
    }
  ];
  
    
  for(let i = 0; i < pathLength; ++i){
    if(data.icon.attrs[i].fill){
      pathArray.push(
        {
          path: data.icon.paths[i],
          color: data.icon.attrs[i].fill,
          id: i
        }
      );
    } else {
      pathArray.push(
        {
          path: data.icon.paths[i],
          id: i
        }
      );
    }  
  }
  newJson[data.icon.tags[0]] = pathArray;
})

// Delete past file content
fs.truncate(NEW_FILE_PATH, 0, err => {
  if (err) throw err;
  console.log('Delete all content: Ok')

  // Append const delcaration
  fs.appendFile(NEW_FILE_PATH, 'const icons =', err => {
    if (err) throw err;
    console.log('Append const declaration: Ok');

    // Write file with new icons
    fs.appendFile(NEW_FILE_PATH, util.inspect(newJson), err => {
      if(err) throw err;
      console.log("Append icons information: Ok");

      // Append export declaration
      fs.appendFile(NEW_FILE_PATH, '\n export default icons;', err => {
        if (err) throw err;
        console.log('Append const export: Ok');
      });
    });
  });
});







