/**
 * Created by Corey600 on 2016/3/28.
 */

'use strict';

const fs = require('fs');
const path = require('path');

const version = require('../package.json').version;
const root = path.dirname(__dirname);

const config = {
    // app
    version: version,
    debug: process.env.NODE_ENV === 'development',
    serverPort: 3000,

    // log
    logDir: path.join(root, 'logs'),
    logLevel: 'DEBUG'
};

function override(data){
    let key;
    for(let index in data){
        //noinspection JSUnfilteredForInLoop
        key = index;
        if(data[key]){
            config[key] = data[key];
        }
    }
}

// load config
var configPath = path.join(root, 'config.json');
if (!fs.existsSync(configPath)) {
    configPath = path.join(root, 'config', 'config.js');
}
if (fs.existsSync(configPath)) {
    override(require(configPath));
}else{
    console.log('config file is not found.');
}

// init logs directory
var logsPath = config.logDir || path.join(root, 'logs');
if(!fs.existsSync(logsPath)){
    console.log('logs directory is not found. a new logs directory is created.');
    fs.mkdirSync(logsPath);
}

// set global config
config.root = root;

// export config
module.exports = config;
