const Location = require('./location');
const Traveller = require('./traveller');
const Trips = require('./trips');

Traveller.hasMany(Location, {
    foreignKey: 'reader_id',
    onDelete: 'CASCADE'
});

Location.hasMany(Traveller, {
    foreignKey: 'reader_id',
    onDelete: 'CASCADE'
});

Traveller.belongsToMany(Location, {
    through: {
        model: Trips,
        unique:false,
    },
    as: 'planned_trips'
});

Location.belongsToMany(Traveller, {
    through: {
        model: Trips,
        unique:false,
    },
    as: 'planned_trips'
});

module.exports = { Location, Traveller, Trips };