const { Kafka } = require("kafkajs");
const {clientId, brokers, topic} = require("./config")

const kafka = new Kafka({ clientId, brokers });

const consumer = kafka.consumer({ groupId: clientId })

const consume = async () => {
    await consumer.connect()
    await consumer.subscribe({ topic })
    await consumer.run({
        eachMessage: async ({ message }) => {

            const data = JSON.parse(message.value);
            console.log('9999999999999999999', data);
            await saveDataInDB(data.Employees);

        },
    })
}

consume().catch((err) => {
    console.error("error in consumer: ", err)
});

const saveDataInDB = async (data) => {
    console.log('dataconsole.log', data);
}

module.exports = consume
