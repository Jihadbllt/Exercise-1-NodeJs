class ObserverNotifier {
    update(event) {
        if (event.event === 'item_created'){
            console.log(`[Notifier] new item created: ${event.data.name}`);
        } else if (event.event === 'item_deleted') {
            console.log(`[Notifier] item deleted: ${(event.data.name)}`);
        }
    }
    }

module.exports = ObserverNotifier;