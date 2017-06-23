// you need to npm install these scripts and then include them here.
module.exports.scripts = [
    'hubot-mysql-brain',
    'hubot-help',
    'hubot-google-hangouts',
    'hubot-travis-ci-hook',
    'hubot-auth',
    'hubot-factoids'
];

module.exports.hubotOptions = {
    adapter: 'matrix',
    alias: false,
    create: false,
    enableHttpd: false,
    scripts: [],
    name: 'xbot',
    path: '.',
    configCheck: false
};

process.env.HUBOT_MATRIX_PASSWORD = '<matrix password goes here>';
process.env.HUBOT_MATRIX_HOST_SERVER = 'https://matrix.org';
process.env.HUBOT_MATRIX_USER = 'xbot';

process.env.MYSQL_URL = 'mysql://hubot:b957f529861ffbe48c7b34bce651faa8@localhost/hubot';

//process.env.HUBOT_HELP_REPLY_IN_PRIVATE = 'true'

process.env.HUBOT_GOOGLE_HANGOUTS_DOMAIN = "yourdomain.com";

process.env.HUBOT_LOG_LEVEL = 'debug';
