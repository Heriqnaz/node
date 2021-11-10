const { Kafka } = require("kafkajs");
const fs = require('fs')
const {clientId, brokers, topic} = require("./config")

const kafka = new Kafka({ clientId, brokers });
const producer = kafka.producer();

const produce = async (data) => {
    console.log('------------------------', data)
    await producer.connect();
    await producer.send({
        topic,
        messages: [
            {
                value: data,
            },
        ],
    });
    console.log('6666666666666666666')
}

const fileName = `${__dirname}/data.json`;

const stream = fs.createReadStream(fileName, {encoding: 'utf8'});
sendChunks(stream).catch((err) => {
    console.error("error in sendChunks: ", err)
});

async function sendChunks(readable) {
    for await (const chunk of readable) {
        produce(chunk).catch((err) => {
            console.error("error in producer: ", err)
        });
    }
}

module.exports = produce
