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
};

Park.prototype.dinosaurWithMostVisistors = function () {
    let mostVisitedDinosaur = this.dinosaurCollection[0];
    
    for (dino of this.dinosaurCollection) {
        if (dino.averageAttractedVisitorsADay > mostVisitedDinosaur.averageAttractedVisitorsADay) {
            mostVisitedDinosaur = dino;
        }
    }

    return mostVisitedDinosaur;
};

Park.prototype.findDinosaurOfSameSpecies = function (species) {
    const dinosaurOfSameSpecies = [];

    for (dino of this.dinosaurCollection) {
        if (dino.species === species) {
            dinosaurOfSameSpecies.push(dino)
        }
    }

    return dinosaurOfSameSpecies;
};

Park.prototype.countNumberOfVisitorsPerDay = function () {
    total = 0;

    for (dino of this.dinosaurCollection) {
        total += dino.averageAttractedVisitorsADay
    }

    return total;
};

Park.prototype.countNumberOfVisitorsPerYear = function () {
    total = this.countNumberOfVisitorsPerDay() * 365;

    return total;
};

Park.prototype.totalRevenueTicketSaleAYear = function () {
    total = this.countNumberOfVisitorsPerYear() * this.ticketPrice;

    return total;
};

Park.prototype.removeAllDinosaursOfAParticularSpecies = function (species) {
    const dinosaursToDelete = this.findDinosaurOfSameSpecies(species)

    for (dino of this.dinosaurCollection) {
        for (dinoToDelete of dinosaursToDelete) {
            if(dino === dinoToDelete) {
                this.removeDinosaurFromCollection(dinosaursToDelete)
            };
        };
    };

    return this.dinosaurCollection;
};

Park.prototype.numberOfEachtDinosaursDietTypeInPark = function () {
    let numberOfDietTypes = {'carnivore': 0, 'herbivore': 0, 'omnivore': 0};

    for (dino of this.dinosaurCollection) {
        for (diet in numberOfDietTypes) {
            if (dino.diet === diet) {
                numberOfDietTypes[diet] += +1;
            }
        }
    }

    return numberOfDietTypes;

}

module.exports = Park;