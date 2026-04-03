//Sensor de nível de um reservatório de água

import mqtt from "mqtt";

const client = mqtt.connect("mqtt://localhost/1883");

client.on("connect", ()=> {
    console.log("Publisher - Sensor reservatório: Conectado!");

    let i = 10;
    let msg= "";
    const t = setInterval( () => {
        
        if(i > 4){
            console.log("Nível normal ", (i * 10), "%");
            msg = `Nível normal  ${i * 10} %`;
        }else if(i > 1){
            console.log("Nível Crítico ", (i * 10), "%");
            msg = `Nível Crítico  ${i * 10} %`;
        }else {
            console.log("Nível  Fatal !!", (i * 10), "%");
            msg = `Nível Fatal !!  ${i * 10} %`;
            client.publish("estufa/agua/nivel", msg, {qos: 1}); 
            clearInterval(t);
            client.end();
        }
        client.publish("estufa/agua/nivel", msg, {qos: 1}); 
        
        i--;
    }, 30000);

});

