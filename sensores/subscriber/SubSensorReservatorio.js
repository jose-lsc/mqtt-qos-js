import mqtt from "mqtt";

const options = {
  clientId: "subscriber_reservatorio", 
  clean: false 
};


const client = mqtt.connect("mqtt://localhost:1883", options)

client.on("connect", (connack) => {
    console.log(`SubSensorReservatório QoS 1: conectado (Sessão recuperada: ${connack.sessionPresent})`);
    client.subscribe("estufa/agua/nivel", {qos: 1});
});

client.on("message", (topic, msg) => {
    console.log(msg.toString());
});
