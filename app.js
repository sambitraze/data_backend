import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Graph from './models/graph.js';


const app = express();

const DBURL = "mongodb+srv://sambitraze:findme123@findme.ltkft.mongodb.net/abhisht?retryWrites=true&w=majority"

mongoose.connect(DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.log(err);
})

// app.use(express.json());
app.use(cors());
app.use(express.json({limit: '50mb'}));

app.get("/", (req, res) => {
    Graph.find({}, (err, graph) => {
        if(err){
            res.status(400).send(err);
        }
        res.status(200).send(graph);
    })
})

app.post("/graph", (req, res) => {
    const graph = new Graph(req.body);
    graph.save().then(() => {
        res.send(graph);
    }).catch(err => {
        res.send(err);
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
