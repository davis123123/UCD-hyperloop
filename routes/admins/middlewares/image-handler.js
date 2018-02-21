// mysql database 
const db = require('../../database/mysql-db');

// import GCP storage Object
const GcpStorageObject = require('../../database/middlewares/GcpStorageObject');

// instanitate new object
const path2Key = './identity/GCP-key.json';
const bucketName = 'photo-tester';
const newObject = new GcpStorageObject(path2Key,bucketName);

const imgHandler = {
  upload : async function(file) {
    return await newObject.uploadFile(file);
  },
  delete: async function(imgId){
    let img2Delete = await FindImage(imgId);
    let imgName = img2Delete[0].img_link.split('/').pop();
    return Promise.all([newObject.deleteFile(imgName),DeleteImgInDb(imgId)]).then((result) => {
      return result[0];
    })
  }
}
// find image name in database and return url
function FindImage(imgId){
  return new Promise((resolve,reject) => {
    const sql = `select * from images where id = ${imgId} `
    // find that image in database using its ID
    db.query(sql,(err, result) => {
      if (err) {
        console.log(err);
        reject(err);
      }
      resolve(result);
    });
  })
}

// delete image in database
function DeleteImgInDb(imgId){
  return new Promise((resolve,reject) => {
    const sql = `delete from images where id = ${imgId}`;
    db.query(sql,(err,result) =>{
      if (err) {
        console.log(err);
        return reject(false);
      }
      return resolve(true);
    })
  })
}

module.exports = imgHandler;