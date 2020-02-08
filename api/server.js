import express from 'express';
import helmet from 'helmet';

import rolesRouter from '../roles/router.js';

const server = express();

server.use(helmet());
server.use(express.json());

server.use('/api/roles', rolesRouter);

server.use('/*', (req, res) => {
  res.status(404).json({
    error: "The requested endpoint does not exist on this server"
  })
})

server.use((error, req, res, next) => {
  res.status(500).json({ error });
})
export default server;