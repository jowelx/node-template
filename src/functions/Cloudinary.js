import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
  secure: true
})
export async function uploadFileToCloudinary(file) {
  try {
    return new Promise((resolve, reject) => {
      cloudinary.v2.uploader.upload(file, (error, result) => {
          if (error) {
            console.log(error)
          reject(error);
          } else {
            console.log('Archivo subido correctamente')
          resolve(result);
        }
      });
    });
  } catch (error) {
    console.error(error);
  }
}