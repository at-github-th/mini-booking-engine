import express from "express"; import cors from "cors"; import morgan from "morgan";
const app = express(); app.use(cors()); app.use(express.json()); app.use(morgan("dev"));
const TOKEN = process.env.API_TOKEN || "dev-12345";
function auth(req,res,next){ if(req.header("x-api-key")===TOKEN) return next(); res.status(401).json({error:"unauthorized"}); }
let bookings = [{id:"b1", product:"Party", qty:10, status:"draft"}];
app.get("/", (_req,res)=>res.json({name:"Booking API", ok:true}));
app.get("/api/bookings", auth, (_req,res)=>res.json(bookings));
app.post("/api/bookings", auth, (req,res)=>{ const b={id:`b${Date.now()}`, ...req.body, status:"created"}; bookings.push(b); res.json(b); });
app.patch("/api/bookings/:id", auth, (req,res)=>{ const b=bookings.find(x=>x.id===req.params.id); if(!b) return res.status(404).json({error:"not_found"}); Object.assign(b,req.body); res.json(b); });
app.listen(Number(process.env.API_PORT||5104), ()=>console.log("API http://127.0.0.1:"+ (process.env.API_PORT||5104)));
