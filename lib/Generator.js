'use strict';

const data = {
  corpus: {
    adjectives: require('../options/corpus/adjectives.json'),
    names: require('../options/corpus/names.json'),
    places: require('../options/corpus/places.json'),
    titles: require('../options/corpus/titles.json'),
  },
  grineer: {
    adjectives: require('../options/grineer/adjectives.json'),
    names: require('../options/grineer/names.json'),
    places: require('../options/grineer/places.json'),
    titles: require('../options/grineer/titles.json'),
  },
  orokin: {
    adjectives: require('../options/orokin/adjectives.json'),
    names: require('../options/orokin/names.json'),
    places: require('../options/orokin/places.json'),
    titles: require('../options/orokin/titles.json'),
  },
  sentient: {
    adjectives: require('../options/sentient/adjectives.json'),
    names: require('../options/sentient/names.json'),
    places: require('../options/sentient/places.json'),
    titles: require('../options/sentient/titles.json'),
  },
  tenno: {
    adjectives: require('../options/tenno/adjectives.json'),
    names: require('../options/tenno/names.json'),
    places: require('../options/tenno/places.json'),
    titles: require('../options/tenno/titles.json'),
  },
  infested: {
    adjectives: require('../options/infested/adjectives.json'),
    names: require('../options/infested/names.json'),
    places: require('../options/infested/places.json'),
    titles: require('../options/infested/titles.json'),
  },
};

const races = Object.keys(data);
const types = ['names', 'places', 'titles'];

const getRandomEntry = (array) => array[Math.floor(Math.random() * array.length)];

const toTitleCase = (string, includeSpaces) => string.toLowerCase()
  .split(' ')
  .map((word) => word.replace(word[0], word[0].toUpperCase()))
  .join(includeSpaces ? ' ' : '');

const evalRace = (race) => {
  const r = race.toLowerCase() === 'random' ? races[Math.floor(Math.random() * races.length)] : race;
  if (!races.includes(r.toLowerCase())) {
    throw new Error(`Invalid race '${r}' provided.\nValid races: ${races.map((innRace) => `'${innRace}'`).join(', ')}`);
  }
  return r;
};
const evalType = (type) => {
  const t = type.toLowerCase() === 'random' ? types[Math.floor(Math.random() * types.length)] : type;
  if (!types.includes(t.toLowerCase())) {
    throw new Error(`Invalid type '${t}' provided.\nValid types: ${types.map((iType) => `'${iType}'`).join(', ')}`);
  }
  return t;
};

/**
 * Generator for
 */
class Generator {
  constructor() {
    this.default = this.make();
    this.logger = console;
  }

  /**
   * Make a random name
   * @param  {string}  [race='random']     (Optional) race to use, defaults to 'random'
   * @param  {number}  [nouns=1]           (Optional) number of nouns to use, defaults to 1
   * @param  {string}  [type='names']      (Optional) type of thing to produce.
   *                                        Valid: 'names', 'places', 'titles', defaults to 'names'
   * @param  {boolean} [spaces=true]       (Optional) Include spaces, defaults to true
   * @param  {boolean} [includeRace=false] (Optional) Include the race in the result string,
   *                                        defaults to false
   * @param  {boolean} [adjective=false]   (Optional) whether or not to include an adjective,
   *                                        defaults to false
   * @param  {boolean} [debug=false]       (Optional) if true, debug and output string
   * @returns {string}                      resultant generation from provided options
   */
  make({
    race = 'random', nouns = 1, type = 'random', spaces = true, includeRace = false, adjective = false, debug = false,
  } = { race: 'random', nouns: 1, type: 'random' }) {
    const raceRes = evalRace(race);
    const typeRes = evalType(type);

    const tokens = [];
    if (adjective) tokens.push(toTitleCase(getRandomEntry(data[raceRes].adjectives), spaces));
    if (includeRace) tokens.push(toTitleCase(raceRes, spaces));
    for (let index = 0; index < nouns; index += 1) {
      tokens.push(this.getNoun(tokens, { race: raceRes, type: typeRes, spaces }));
    }
    const name = tokens.join(spaces ? ' ' : '');
    if (debug) this.logger.debug(name);
    return name;
  }

  /**
   * Get a random entry
   * @returns {string} a random entry`
   */
  get random() {
    return this.getNoun();
  }

  /**
   * Get another string that's not already included in the tokens
   * @param  {string[]} tokens tokens to exclude
   * @returns {string}        new unique token
   */
  another(tokens) {
    return this.getNoun(tokens);
  }

  /**
   * Get a unique noun.
   * @param  {string[]} tokens        array of existing tokens
   * @param  {string} [race='random'] race type to use
   * @param  {string} [type='random'] noun type to use
   * @param  {boolean} [spaces=true}] whether or not to include spaces
   * @returns {string}                 the unique noun result
   */
  // eslint-disable-next-line class-methods-use-this
  getNoun(tokens = [], {
    race = 'random',
    type = 'random',
    spaces = true,
    iterations = 0,
  } = {
    race: 'random',
    type: 'random',
    spaces: true,
    iterations: 0,
  }) {
    const raceR = evalRace(race);
    const typeR = evalType(type);
    const entry = toTitleCase(getRandomEntry(data[raceR][typeR]), spaces);
    if (tokens.includes(entry) && (iterations < data[raceR][typeR].length)) {
      return this.getNoun(tokens, {
        race, type, spaces, iterations: iterations + 1,
      });
    }
    return entry;
  }
}

module.exports = Generator;
