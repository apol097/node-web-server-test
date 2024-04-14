import { envs } from "./config/envs";
import { Server } from "./presentation/server";

//Se realiza la funcion main para que se ejecute el servidor
const main = () => {
    const server = new Server({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    });
    server.start();
 }  


//Se invoca la funcion main
(()=>{
    main();    
})()