import express, { query } from 'express';
import mysql from 'mysql';
import ejs from 'ejs';
import {route} from './router.js'
import path, { resolve } from 'path';
import bodyParser from 'body-parser';
import session from 'express-session';

import { home } from "./controller/feature_homepage.js";
import { graph } from "./controller/feature_graph.js";
import { graphbar } from "./controller/feature_graphbar.js";
import { search } from "./controller/feature_search.js";

const PORT = 8080;
const app = express();

app.use(route)

app.use('/',home);

app.use('/feature_graph',graph);

app.use('/feature_graphbar',graphbar);

app.use('/feature_search',search);

const publicPath = path.resolve('public');
app.use(express.static(publicPath));
app.set('view engine','ejs');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})
