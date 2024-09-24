import express, {Request, Response, NextFunction} from 'express';
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const songRouter = require('./routes/songRouter');
const playlistRouter = require('./routes/playlistRoute');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/user',userRouter);

app.use('/songs', songRouter);
app.use('/playlists', playlistRouter);

app.use((err:Error,req: Request,res: Response,next: NextFunction)=>{
    res.status(500).json({isSuccess:false,message:err.message});
})

app.use((req,res,next)=>{
    res.status(404).json({isSuccess:false,message:"Page not found!!"});
});

app.listen(4000,()=>{
    console.log('4000 port is running !!!');
});