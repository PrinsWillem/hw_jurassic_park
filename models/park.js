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

Park.prototype.dinosaurWithMostVisistors = function () {
    let mostVisitedDinosaur = this.dinosaurCollection[0];
    
    for (dino of this.dinosaurCollection) {
        if (dino.averageAttractedVisitorsADay > mostVisitedDinosaur.averageAttractedVisitorsADay) {
            mostVisitedDinosaur = dino;
        }
    }

    return mostVisitedDinosaur;
}

Park.prototype.findDinosaurOfSameSpecies = function (species) {
    const dinosaurOfSameSpecies = [];

    for (dino of this.dinosaurCollection) {
        if (dino.species === species) {
            dinosaurOfSameSpecies.push(dino)
        }
    }

    return dinosaurOfSameSpecies;
}

module.exports = Park;