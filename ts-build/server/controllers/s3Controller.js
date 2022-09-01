import util from 'util';
import fs from 'fs';
import { uploadBase64 } from '../scripts/s3';
const unlinkFile = util.promisify(fs.unlink);
const s3Controller = {};
// upload a single image
// /:id param is ID of the user posting the image
s3Controller.put = async (req, res, next) => {
    // makes sure that a file is included in the request
    if (req.file) {
        console.log(req.file);
        let result;
        // uploading to AWS S3
        try {
            result = await uploadBase64(req.file, req.params.id, res.locals.post.id);
        }
        catch (err) {
            console.log(`S3 Upload Error:\n${err}`);
        }
        console.log(`[S3 Response] ${result}`);
        // deletes file from local dir after upload
        res.locals.file = req.file;
        await unlinkFile(req.file.path);
        return next();
    }
    else
        return res.status(400).send('File not included in request');
};
export default s3Controller;
