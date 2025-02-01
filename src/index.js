import express, { Router } from 'express';
import {dirname,join} from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js'


const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Middleware para servir archivos estáticos
app.set('views', join(__dirname,'views'));
app.set('view engine','ejs');
app.get('/',(req,res) => res.render('inicio'));
app.use(router)
app.use(express.static(join(__dirname,'public')))
app.listen(3000)
console.log('Server is running on http://localhost:3000')
