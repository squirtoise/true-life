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

// upload file to s3 bucket
// files are saved as postID.[ext]
export const uploadBase64 = async (base64: any, userID: any, postID: any) => {
    const base64Data: any = new (Buffer as any).from(
        base64.replace(/^data:image\/\w+;base64,/, ''),
        'base64'
    );

    const type = base64.split(';')[0].split('/')[1];

    const params: any = {
        Bucket: bucketName,
        Key: `user-${userID}_post-${postID}.${type}`,
        Body: base64Data,
        ContentEncoding: 'base64',
        ContentType: `image/${type}`,
    };

    try {
        const { Location, Key } = await s3.upload(params).promise(); // this will upload file to S3
        console.log(JSON.stringify({ Location, Key }));
        return { Location, Key };
    } catch (err) {
        console.log(err);
    }
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
