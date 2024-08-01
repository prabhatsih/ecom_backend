const express = require("express");
const cors = require('cors');
const authRouter = require("./routes/auth.routes")
const productRouter = require("./routes/product.routes")
const customerRouter = require('./routes/customer.routes')
const orderRouter = require('./routes/order.routes')
const paymentRouter = require('./routes/payment.routes')
const storageRouter = require('./routes/storage.routes')
const CookieParser = require('cookie-parser');

const multer = require('multer');
const ConnectDb = require("./config/Db");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'storage/')
    },
    filename: (req, file, cb) => {
        const fileNameArray = file.originalname.split(".");
        const lastIndex = fileNameArray.length - 1;
        const ext = '.' + fileNameArray[lastIndex];
        cb(null, `${Date.now() + ext}`);
    }
})
const upload = multer({ storage: storage });
ConnectDb()
const app = express();
app.listen(1018, () => {
    console.log("Port is running on 1018");
});
app.use(express.static('storage'))

app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CookieParser())

app.use('/auth', authRouter)

app.use('/product', productRouter)

app.use('/customer', customerRouter)

app.use('/order', orderRouter)

app.use('/payment', paymentRouter)

app.use('/storage', upload.single('fileData'), storageRouter)