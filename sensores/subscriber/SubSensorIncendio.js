import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost:1883");

client.on("connect", () => {
  console.log("SubSensorIncendio QoS 2: conectado");
  client.subscribe("estufa/alerta/incendio", { qos: 2 });
});

client.on("message", (topic, msg) => {
  console.log(msg.toString());
});
