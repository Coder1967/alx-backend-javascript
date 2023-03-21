const fs = require("fs");
/**
 * reads from a csv file
 */

function readDatabase(filename) {
  let students = {};
  return new Promise( (resolve, reject) => {
     fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
	      reject(err);
      }
      data = data.split('\n');
      
      for (let i = 0; i < data.length; i++) {
	      if (i !== 0) {
		      values = data[i].split(',');
		      field = values[values.length - 1];
		      if (typeof students[field] === 'undefined') {
			   if (field !== '' && field !== ' ') {
			      students[field] = [];
			      students[field].push(values[0]);
			   }
		      } else {
			      students[field].push(values[0]);
		      };
	      }
	       if (i === data.length - 1) {
                              resolve(students);
                      }
      }
  });
  });
};
module.exports = readDatabase;
