//Sensor de temperatura ( não crítico)

import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost/1883");

client.on("connect", ()=> {
    console.log("Publisher - Sensor temperatura: Conectado!");

    let i = 0;

    const t = setInterval( () => {
        

        const msg = {
            payload : {
                valor: 20 * i,
                local: "lab1",
                unidade: "Celsius",
                topic: "estufa/temp/ambiente"
            }
        }
            

        client.publish(
            "estufa/temp/ambiente", 
             JSON.stringify(msg.payload), 
             {qos: 0}
        );

        console.log("Publisher(QoS0) - sensorTemp enviou:", msg.payload);
        i++;

        if (i === 10) {
            clearInterval(t);
            client.end();
        }
    }, 2000);

});

