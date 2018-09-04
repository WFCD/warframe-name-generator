'use strict';

/* eslint-disable global-require */
module.exports = {
  Generator: require('./lib/Generator'),
  data: {
    corpus: {
      adjectives: require('./options/corpus/adjectives.json'),
      names: require('./options/corpus/names.json'),
      places: require('./options/corpus/places.json'),
      titles: require('./options/corpus/titles.json'),
    },
    grineer: {
      adjectives: require('./options/grineer/adjectives.json'),
      names: require('./options/grineer/names.json'),
      places: require('./options/grineer/places.json'),
      titles: require('./options/grineer/titles.json'),
    },
    orokin: {
      adjectives: require('./options/orokin/adjectives.json'),
      names: require('./options/orokin/names.json'),
      places: require('./options/orokin/places.json'),
      titles: require('./options/orokin/titles.json'),
    },
    sentient: {
      adjectives: require('./options/sentient/adjectives.json'),
      names: require('./options/sentient/names.json'),
      places: require('./options/sentient/places.json'),
      titles: require('./options/sentient/titles.json'),
    },
    tenno: {
      adjectives: require('./options/tenno/adjectives.json'),
      names: require('./options/tenno/names.json'),
      places: require('./options/tenno/places.json'),
      titles: require('./options/tenno/titles.json'),
    },
    infested: {
      adjectives: require('./options/infested/adjectives.json'),
      names: require('./options/infested/names.json'),
      places: require('./options/infested/places.json'),
      titles: require('./options/infested/titles.json'),
    },
  },
};
