const express = require('express');
const app = express();
const { MongoClient } = require('mongodb');
const cors = require('cors');
require('dotenv').config()


const port = process.env.PORT || 5000;

// middle ware 
app.use(cors());
app.use(express.json());

const uri = ` mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fjoai.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

console.log(uri);


async function run() {
    try {
        await client.connect()
        const database = client.db('doctors_portal')
        const appointmentCollection = database.collection('appointments')

        app.post('/appointments', async (req, res) => {
            const cursor=req.body;

        })


    }
    finally {
        // client.close()
    }





}
run().catch(console.dir)



app.get('/', (req, res) => {
    res.send('Hello doctors portal');
})

app.listen(port, () => {
    console.log('side is running at ', port);
})