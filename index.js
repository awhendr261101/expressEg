import express from 'express';
import {resolve, dirname} from 'path';

import { config } from 'dotenv';

config();

const app = express();
const port = process.env.PORT || 4000

app.use(express.static('./static'))

app.get('/', (req, res) => {
    res.status(200).sendFile(resolve('./static/index.html'));
})

app.get('/about', (req, res) => {
    res.status(200).sendFile(resolve('./static/about.html'));
})

app.listen(port, () => console.log(`Server running on port ${port}`));