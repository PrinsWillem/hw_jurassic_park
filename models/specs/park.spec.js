const assert = require('assert');
const Park = require('../park.js');
const Dinosaur = require('../dinosaur.js');

describe('Park', function () {

    beforeEach(function () {
        ankilosaurus = new Dinosaur('ankilosaurus','herbivore', 50);
        brachiosaurus = new Dinosaur('brachiosaurus','herbivore', 80);
        raptor = new Dinosaur ('raptor', 'carnivore', 50);
        spinosaurus = new Dinosaur ('spinosaurus', 'omnivore', 40);

        jurassicPark = new Park ('Jurassic Park', 20);
    });


    // MVP
    it('Add a dinosaur to its collection of dinosaurs', function () {
        jurassicPark.addDinosaurToCollection(ankilosaurus);
        jurassicPark.addDinosaurToCollection(brachiosaurus);
        const expected = 2;
        assert.deepStrictEqual(expected, jurassicPark.dinosaurCollection.length);
    });
    it('Remove a dinosaur from its collection of dinosaurs', function () {
        jurassicPark.addDinosaurToCollection(ankilosaurus);
        jurassicPark.addDinosaurToCollection(spinosaurus);
        jurassicPark.addDinosaurToCollection(brachiosaurus);
        jurassicPark.removeDinosaurFromCollection(ankilosaurus);
        jurassicPark.removeDinosaurFromCollection(brachiosaurus);
        const expected = [spinosaurus];
        assert.deepStrictEqual(expected, jurassicPark.dinosaurCollection);
    });
    it('Find the dinosaur that attracts the most visitors', function () {
        jurassicPark.addDinosaurToCollection(ankilosaurus);
        jurassicPark.addDinosaurToCollection(spinosaurus);
        jurassicPark.addDinosaurToCollection(brachiosaurus);
        jurassicPark.addDinosaurToCollection(raptor);
        const expected = brachiosaurus
        assert.deepStrictEqual(expected, jurassicPark.dinosaurWithMostVisistors())
    });
    xit('Find all dinosaurs of a particual species', function () {

    });
    xit('Calculate the total number of visitors per day', function () {

    });
    xit('Calculate the total number of visistors per year', function () {

    });
    xit('Calculate the total revenue from ticket sales for one year', function () {

    });

    // EXTENSIONS
    xit('Remove all dinosaurs of a particular species', function () {

    });
    xit('Provide an object containing each of the diet types and the number of dinosaurs in the park of that diet type', function () {

    });
})