/**
 * 
const app = express();
const PORT = process.env.PORT || "3000";

app.get('/',(req,res)=>{
   
    res.json({message:"hola a todos"})
})


const main = async ()=>{
    try {
        await sequelize.sync({alter:true});
        console.log("database connected")
        app.listen(PORT,()=>{
            console.log("SERVER IS RUNNING ON http://localhost:" + PORT )
        })
    } catch (error) {
        console.log(error);
        
    }

}
main();

 */


import express, { Application } from 'express';
import { sequelize } from './database/sequelize';
import 'dotenv/config'

class Server{
    private app: Application;
    private port:string;

    constructor(){
        this.app = express();

        this.port = process.env.PORT || "3000";
    }

    async listen(){
        try {
            console.log(process.env.PORT)
            await sequelize.sync({alter:true});
            console.log("database connected")
            this.app.listen(this.port,() => {
                console.log('SERVIDOR CORRIENDO EN PUERTO ' + this.port);
                
            })
        } catch (error) {
            console.log(error);
        }
     
    }
}



const server = new Server();
server.listen();
/**   // "dev": "tsx --watch src/server.ts"*/