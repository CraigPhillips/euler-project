import bunyan from 'bunyan';
import bunyanFormat from 'bunyan-format';
import yargs from 'yargs';

import solutions from './solutions';

let log;
try {
  log = bunyan.createLogger({
    name: 'FE Euler Project Solutions',
    level: 'trace',
    stream: bunyanFormat({ outputMode: 'short' }),
  });
  const { argv } = yargs;

  let problem = argv.p ? argv.p.toString() : null;
  if (!problem) throw new Error('no value for argument p');
  while (problem.length < 5) problem = `0${problem}`;
  problem = `problem${problem}`;
  if (!solutions[problem]) throw new Error(`no solution for ${problem}`);
  if (typeof solutions[problem].solve !== 'function') {
    throw new Error(`solution for ${problem} is not a function`);
  }

  log.trace({ problem }, 'running solution...');
  const result = solutions[problem].solve();
  log.info({ problem, result }, 'solution finished');
} catch (error) {
  (log || console).error(error, 'run failed');
}
