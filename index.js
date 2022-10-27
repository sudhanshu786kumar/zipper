const AdmZip = require("adm-zip");                 //module to zip files
const userInp=process.argv[2];                    //user's input from CLI
const fs = require('fs')
async function createZipArchive() {

try {
    const zip = new AdmZip();
    const ZippedFile = `${userInp}.zip`;         //output file name
    zip.addLocalFolder(`./${userInp}`);          //directory in which folder resides
    zip.writeZip(ZippedFile);
   
    console.log(`Created ${ZippedFile} successfully`);
     fs.rm(`${userInp}`,{recursive:true},err=>{
        if(err){
            throw err
        }
     })       //removes the non-zippedfile
    
} catch (error) {
    console.log(`Something went wrong. ${error}`);
}


   
  }
  
  createZipArchive()



