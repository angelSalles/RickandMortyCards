const express = require("express");

const { MongoClient, ObjectId } = require("mongodb");
const DB_URL="mongodb+srv://admin:tPMYS8KiCZR22lMS@cluster0.1lsjuda.mongodb.net";
const DB_Name ="diceti";
const cors = require("cors");

async function main(){

    console.log("Conectando...");
    const client = await MongoClient.connect(DB_URL);
    const db = client.db(DB_Name);
    const collection = db.collection("controleTI");
    console.log("Conectado");
    const app = express();
    const port = 3000;

    app.use(express.json());

    app.use(cors());

    app.get("/item", async function(req,res){
        const documents = await collection.find().toArray();
        res.send(documents);
    });

    app.get("/item/:id", async function (req,res){
        
        item = await collection.findOne({ _id: new ObjectId(req.params.id) });
        res.send(item);
        
    });

    app.post("/item", async function(req,res){
        item = await collection.insertOne(req.body);
        res.send(item);
    });

    app.put("/item/:id", async function(req,res){

        item = await collection.updateOne({ _id: new ObjectId(req.params.id)}, {$set: req.body});
        res.send(req.body);
    });

    app.delete("/item/:id", async function(req,res){
        item = await collection.findOneAndDelete({ _id: new ObjectId(req.params.id)});
        res.send(item);
    });

    app.listen(port, ()=>{
        console.log(`Example app listening on port ${port}`)
    });

}
main();