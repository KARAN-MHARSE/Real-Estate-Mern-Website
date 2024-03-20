const v2 = require('cloudinary')
const fs = require('fs')

   
v2.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

const uploadOnCloudinary = async(localFilePath) =>{
    try {
        const res = await v2.uploader.upload(localFilePath,{
            resource_type: "auto"
        })
        fs.unlinkSync(localFilePath)
        return res
    } catch (error) {
        fs.unlinkSync(localFilePath)
        return null;
    }
}

module.exports = {uploadOnCloudinary}