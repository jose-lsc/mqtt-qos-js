//Sensor de temperatura ( não crítico)

import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost/1883");

client.on("connect", ()=> {
    console.log("Publisher - Sensor temperatura: Conectado!");

    let i = 0;

    const t = setInterval( () => {
        let msg = `Temperatura de ${20 * i} Cº`;
        client.publish("estufa/temp/ambiente", msg, {qos: 0});
        console.log("`Publisher(Qos0) - sensorTemp enviou:", msg);
        i++;

        if (i === 10) {
            clearInterval(t);
            client.end();
        }
    }, 5000);

});

