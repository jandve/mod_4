import pino from 'pino';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      minimumLevel: 'debug',
    },
  },
});

export default logger;
