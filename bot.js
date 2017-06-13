const Hubot = require('hubot');
require('coffee-script').register();

// you need to npm install these scripts and then include them here.
const SCRIPTS = [
    'hubot-help'
];

process.env.HUBOT_IRC_ROOMS = '#cjdns';
process.env.HUBOT_IRC_NICK = 'bot';
process.env.HUBOT_IRC_SERVER = 'fcec:ae97:8902:d810:6c92:ec67:efb2:3ec5';

const options = {
    adapter: process.env.HUBOT_ADAPTER || 'irc',
    alias: process.env.HUBOT_ALIAS || false,
    create: process.env.HUBOT_CREATE || false,
    enableHttpd: process.env.HUBOT_HTTPD || true,
    scripts: process.env.HUBOT_SCRIPTS || [],
    name: process.env.HUBOT_NAME || 'Hubot',
    path: process.env.HUBOT_PATH || '.',
    configCheck: false
};

process.env.HUBOT_LOG_LEVEL = 'debug';

const robot = Hubot.loadBot(undefined, options.adapter, options.enableHttpd, options.name, options.alias);
robot.adapter.once('connected', () => { robot.loadExternalScripts(SCRIPTS); });
robot.run();