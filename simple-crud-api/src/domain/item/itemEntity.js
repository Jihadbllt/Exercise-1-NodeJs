class Item {
    constructor(id, name, description) {
        this.id = id;
        this.name = name;
        this.description = description;
    }
    updatedDetails(name, description) {
        this.name = name;
        this.description = description;
    }
}
module.exports = Item;