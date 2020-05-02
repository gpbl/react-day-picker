import pino from 'pino';

export const logger = pino({
  prettyPrint: { ignore: 'time,pid,hostname' }
});
