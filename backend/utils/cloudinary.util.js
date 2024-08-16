// import { v2 as cloudinary } from 'cloudinary'
// import fs from "fs"


// cloudinary.config({
//     cloud_name: process.env.CULINARYCREST_APP_CLOUDINARY_CLOUDNAME,
//     api_key: process.env.CULINARYCREST_APP_CLOUDINARY_APIKEY,
//     api_secret: process.env.CULINARYCREST_APP_CLOUDINARY_APISECRET
// });



// const UploadCloudinary = async (localFilePath) => {

//     const options = {
//         resource_type: "auto",
//     };

//     try {
//         if(!localFilePath) return null

//         const response = await cloudinary.uploader.upload(localFilePath, options);
//         console.log(response);

//         fs.unlinkSync(localFilePath)
//         return response;
//     } catch (error) {
//         // removing the file from the server 
//         fs.unlinkSync(localFilePath) 
//         console.error(error);
//     }
// };

// export {
//     UploadCloudinary
// }


// if the below works then remove the above code



const cloudinary = require('cloudinary').v2;
const fs = require('fs');

cloudinary.config({
    cloud_name: process.env.CULINARYCREST_APP_CLOUDINARY_CLOUDNAME,
    api_key: process.env.CULINARYCREST_APP_CLOUDINARY_APIKEY,
    api_secret: process.env.CULINARYCREST_APP_CLOUDINARY_APISECRET
});

const UploadCloudinary = async (localFilePath) => {
    const options = {
        resource_type: "auto",
    };

    try {
        if (!localFilePath) return null;

        const response = await cloudinary.uploader.upload(localFilePath, options);

        fs.unlinkSync(localFilePath);
        return response;
    } catch (error) {
        // removing the file from the server 
        fs.unlinkSync(localFilePath);
        console.error(error);
        return null;  // add this line to return null if an error occurs
    }
};

module.exports = {
    UploadCloudinary
};
