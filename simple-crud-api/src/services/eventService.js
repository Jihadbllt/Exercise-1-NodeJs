const events = require('events');

const eventEmitter = new events.EventEmitter();

const eventService = {
    on(eventName, callback) {
        eventEmitter.on(eventName, callback);
    },

    emit(eventName, data) {
        eventEmitter.emit(eventName, data);
    }
};

module.exports = eventEmitter;