const app = require("./src/server");
const cdCon = require("./src/config/cdCon");

cdCon().then((res) =>{
    app.listen(3001, ()=> {
        console.log("En servicio el puerto 3001");
    }); 
}).catch((e) => {
    console.error(`Hubo un error: ${e}`);
    throw e;
});