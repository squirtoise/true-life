import multer from 'multer';
import fs from 'fs';
var dir = '../../../public/img';
if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
}
const fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage: fileStorageEngine });
export default upload;
