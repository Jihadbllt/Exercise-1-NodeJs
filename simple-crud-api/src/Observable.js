class Observable {
    constructor() {
        this.subscribers = []
    }

    subscribe(fn){}

    unsubscribe(fn) {}

    notify(data) {}
}
module.exports = Observable