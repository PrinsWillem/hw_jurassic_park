const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = [];
};

Park.prototype.addDinosaurToCollection = function (dinosaur) {
    this.dinosaurCollection.push(dinosaur)
};

Park.prototype.removeDinosaurFromCollection = function (dinosaur) {
    const dinosaurToRemove = this.dinosaurCollection.indexOf(dinosaur);
    this.dinosaurCollection.splice(dinosaurToRemove, 1);
}

module.exports = Park;