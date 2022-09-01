import 'dotenv/config';

import S3 from 'aws-sdk/clients/s3';
import fs from 'fs';

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey,
});

// upload file to s3 bucket
// files are saved as postID.[ext]
export const uploadFile = (file: any, userID: any) => {
    const fileStream = fs.createReadStream(file.path);

    const uploadParams: any = {
        Bucket: bucketName,
        Body: fileStream,
        Key: `user-${userID}_${file.filename}`,
    };

    return s3.upload(uploadParams).promise(); // this will upload file to S3
};

// download file from s3 bucket
export const getFileStream = (fileKey: any) => {
    const downloadParams: any = {
        Key: fileKey,
        Bucket: bucketName,
    };

    return s3.getObject(downloadParams).createReadStream();
};

export default s3;
