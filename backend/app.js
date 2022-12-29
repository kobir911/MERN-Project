import express from 'express';
// import data from './data.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import seedRouter from './routes/seedRoutes.js';
import productRouter from './routes/productRoutes.js';


dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('connected to mongoDB');
}).catch((err) => {
  console.log(err.message);
})

const app = express();

app.use('/api/seed' , seedRouter);
app.use('/api/products' , productRouter);


const prot = process.env.PORT || 5000;

app.listen(prot, () => {
  console.log(`Server is on http://localhost:${prot}`);
});
