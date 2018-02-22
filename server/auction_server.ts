import * as express from 'express';

const app = express();

app.get('/',(req,res)=>{
    res.send("hello express!");
});

app.get('/products',(req,res)=>{
    res.send("接收到商品查询请求");
});

app.listen(8000,"localhost",()=>{
    console.log("服务已启动，地址是：http://localhost:8000");
});

