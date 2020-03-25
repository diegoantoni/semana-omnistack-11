const express = require('express');
const cors = require('cors');

/*importando as rotas que exister no routes */
const routes = require('./routes');

const app = express();

app.use(cors());
/*informa para o app que o corpo(body) das requisiçãoes sera no formato json*/
app.use(express.json());
/*importante que seja logo apos a linha express.json*/
app.use(routes);

app.listen(3333);