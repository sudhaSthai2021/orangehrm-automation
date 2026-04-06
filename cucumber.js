 module.exports = {
  default: `--require-module ts-node/register 
--require "features/step-definitions/**/*.ts" 
--require "features/support/**/*.ts" 
--format pretty`
};