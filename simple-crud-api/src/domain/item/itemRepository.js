class ItemRepository {
    constructor() {
        this.items = [];
    }
    findAll() {
        return this.items;
    }
    findById(id) {
        return this.items.find(item => item.id === id);
    }
    save(item) {
        this.item.push(item);
        return item;
    }
    update(item){
        const index = this.items.findIndex(i => i.id === item.id);
        if (index !== -1) {
            this.items[index] = item;
            return item;
        }
        return null;
    }

    deleteById(id) {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}

module.exports = new ItemRepository();