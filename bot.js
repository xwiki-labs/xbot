const Hubot = require('hubot');
require('coffee-script').register();
const Config = require('./config.js');
const options = Config.hubotOptions;
const robot = Hubot.loadBot(undefined, options.adapter, options.enableHttpd, options.name, options.alias);
robot.adapter.once('connected', () => { robot.loadExternalScripts(Config.scripts); });
robot.run();
