import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost:1883")

client.on("connect", () => {
    console.log("SubSensorTemp QoS 0: conectado !");
    client.subscribe("estufa/temp/ambiente", {qos: 0});
});

client.on("message", (topic, msg) => {
    console.log("SubSensorTemp recebeu: ", msg.toString());
});
