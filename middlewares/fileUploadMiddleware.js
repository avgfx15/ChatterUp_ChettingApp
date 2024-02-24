import multer from 'multer';
import path from 'path';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../public/images'))
    },
    filaname: function (req, file, cb) {
        const name = Date.now() + "_" + file.originalname;
        cb(null, name)
    }
});

const upload = multer({ storage: storage });

export default upload;
