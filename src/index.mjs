import bunyan from 'bunyan';
import yargs from 'yargs';

import solutions from './solutions';

let log;
try {
  log = bunyan.createLogger({
    name: 'FE Euler Project Solutions',
    level: 'trace',
  });
  const { argv } = yargs;

  log.trace({ argv, solutions }, 'test trace message');
} catch (error) {
  (log || console).error(error, 'run failed');
}
