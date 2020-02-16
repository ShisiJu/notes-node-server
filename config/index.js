const pgConfig = require('./pg')
function initConfig(nodeEnv) {

  const sequelize = new Sequelize(pgConfig[nodeEnv]);


  return 
}





modules.export = initConfig