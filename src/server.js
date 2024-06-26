const express = require('express');
const bodyParser = require('body-parser');
const comentariosRoutes = require('./routes/Comentarios');
const estudiantesRoutes = require('./routes/Estudiantes_jwt');

require('dotenv').config();

const app = express();
const port = process.env.DB_PORT || 3000;

app.use(bodyParser.json());

app.use('/estudiantes', estudiantesRoutes);
app.use('/comentarios', comentariosRoutes);


app.listen(port, () => {
  console.log(`Servidor Express en ejecución en http://localhost:${port}`);
});
