const {MongoClient} = require("mongodb")

const url = "mongodb://127.0.0.1:27017"  

const mongoClient = new MongoClient(url)

async function connectToDatabase(){
try{
 await mongoClient.connect()
  console.log("server connected to database");
}
catch(err){
    console.log(err,"Something is wrong in making the connection with DB");
}
}

connectToDatabase()
const database = mongoClient.db("HR")

module.exports = {database}