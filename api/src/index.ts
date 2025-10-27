
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(cors()); app.use(bodyParser.json());
app.get('/', (_req,res)=>res.json({name:'Mini Booking/Checkout Engine API', ok:true}));
app.get('/api/resources', (_req,res)=>res.json([{id:'R-1',name:'Room A',capacity:6},{id:'R-2',name:'Room B',capacity:8}]));
app.get('/api/availability', (_req,res)=>res.json([{resourceId:'R-1',slot:'10:00',available:true},{resourceId:'R-1',slot:'11:00',available:false}]));
app.post('/api/book', (req,res)=>res.json({ok:true, bookingId:'B-'+Date.now()}));
app.listen(5104, ()=>console.log('API http://localhost:5104'));
