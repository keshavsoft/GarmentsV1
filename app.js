import { router as routerFromCommon } from "./Common/routes.js";
import { router as routerFromCustom } from "./Custom/routes.js";
import { router as routerFromLogin } from "./Login/routes.js";

// import { router as Cors } from "./Cors/routes.js";

import { router as routerFromBinV4 } from "./binV4/routes.js";

import { StartFunc as StartFuncPortListen } from "./PortListen.js";
import { router as routerForUtility } from "./Utility/routes.js";

import express from 'express';
import http from 'http';
import path from 'path';
import cookieParser from 'cookie-parser';

import dotenv from 'dotenv';
dotenv.config();

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
global.__basedir = path.dirname(__filename);

const app = express();
const server = http.createServer(app);

var port = normalizePort(process.env.PORT || '7019');

// app.disable('x-powered-by');

app.use(cookieParser());

app.use(express.json({ limit: '100mb' }));

app.use('/', express.static(path.join(path.resolve(), 'public')));

app.get("/k1", (req, res) => {
    res.end("this is k1");
})

app.use('/binV4', routerFromBinV4);
app.use('/utility', routerForUtility);

app.use('/Common', routerFromCommon);
app.use('/Custom', routerFromCustom);
app.use('/Login', routerFromLogin);
// app.use('/Cors', CommonCorsFunc, Cors);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};

server.listen(port, StartFuncPortListen);
