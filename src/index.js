const AWS = require("aws-sdk");
const fs = require("fs");
const path = require("path");

const s3 = new AWS.S3();

// const params = {
//     Bucket: 'muttaso-bucket', /* required */
// };

// s3.listObjects(params, function(err, data) {
//     if (err) console.log(err, err.stack); // an error occurred
//     else     console.log(data);           // successful response
// });

var params = {
  Bucket: "muttaso-bucket",
  Key: "muttaso.JPG",
};

s3.getObject(params, function (err, data) {
  if (err) console.log(err, err.stack);// an error occurred
  else console.log(data); // successful response
  var writer = fs.createWriteStream(path.join(__dirname, "muttaso.JPG"));
  writer.on("finish", () => {
    console.log("success");
  });
  writer.write(data.Body);
  writer.end();
});
