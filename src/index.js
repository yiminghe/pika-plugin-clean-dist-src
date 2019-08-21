const rimraf = require('rimraf');

exports.manifest = (m) => {
  delete m.esnext;
}

exports.afterBuild = ({ out, reporter }) => {
  rimraf.sync(`${out}/dist-src`);
  reporter.info(`clean dist-src`);
};
