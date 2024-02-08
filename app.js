const EventEmitter = require('events');

const TestApplication = require('./logger');
const testapplication = new TestApplication();

testapplication.on('loadApplication', () => {
    const fs = require('fs');
    fs.appendFile('./logger.txt', 'Application loaded!\n', (err) => {
        if(err) {
            throw err;
        } else {
            console.log('Finished');
        }
    });
});

testapplication.loadApplication('Application is loading...');