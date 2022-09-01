import { Request, Response, NextFunction } from 'express';
import util from 'util';
import fs from 'fs';

import { uploadFile, uploadBase64, getFileStream } from '../scripts/s3';
const unlinkFile = util.promisify(fs.unlink);

const s3Controller: any = {};

// upload a single image
// /:id param is ID of the user posting the image
s3Controller.put = async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.picture) {
        let result: any;
        // uploading to AWS S3
        try {
            result = await uploadBase64(req.body.picture, req.params.id, res.locals.post.id);
        } catch (err) {
            console.log(`S3 Upload Error:\n${err}`);
        }

        console.log(`[S3 Response] ${result}`);

        return next();
    } else return res.status(400).send('File not included in request body');
};

export default s3Controller;
