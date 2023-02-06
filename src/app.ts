import express from 'express';
import userRouter from './routes/userRouter';
import productRouter from './routes/productRouter';
import orderRouter from './routes/orderRouter';
import loginRouter from './routes/loginRouter';

const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/products', productRouter);
app.use('/login', loginRouter);
app.use('/orders', orderRouter);

export default app;
