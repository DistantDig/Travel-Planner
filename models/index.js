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
    foreignKey: 'reader_id'
});

Location.belongsToMany(Traveller, {
    foreignKey: 'reader_id'
});

module.exports = { Location, Traveller, Trips };