import express, { Application } from "express";
import {router} from './routes/index';
import bodyParser from 'body-parser';


export class App {
  private app: Application;

  constructor(private port?: string | number) {
    this.app = express();
    this.settings();
  }

  settings() {
    this.app.use(express.json());
    this.app.set("port", this.port || process.env.PORT || 5000);
    this.app.use('/api', router);
  
    
  }

  async listen() {
    this.app.listen(this.app.get("port"));
    console.log(`Server start on port:${this.app.get("port")}`);
  }
}
