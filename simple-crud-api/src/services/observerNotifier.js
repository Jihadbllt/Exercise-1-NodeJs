class ObserverNotifier {
    update(data){
        console.log('ObserverNotifier sending notification with data',data);
    }
}

module.exports = ObserverNotifier;