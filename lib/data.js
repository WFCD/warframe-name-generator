const load = async (path) => {
  return (
    await import(path, {
      with: { type: 'json' },
      assert: { type: 'json' },
    })
  ).default;
};

export default {
  corpus: {
    adjectives: await load('../options/corpus/adjectives.json'),
    names: await load('../options/corpus/names.json'),
    places: await load('../options/corpus/places.json'),
    titles: await load('../options/corpus/titles.json'),
  },
  grineer: {
    adjectives: await load('../options/grineer/adjectives.json'),
    names: await load('../options/grineer/names.json'),
    places: await load('../options/grineer/places.json'),
    titles: await load('../options/grineer/titles.json'),
  },
  orokin: {
    adjectives: await load('../options/orokin/adjectives.json'),
    names: await load('../options/orokin/names.json'),
    places: await load('../options/orokin/places.json'),
    titles: await load('../options/orokin/titles.json'),
  },
  sentient: {
    adjectives: await load('../options/sentient/adjectives.json'),
    names: await load('../options/sentient/names.json'),
    places: await load('../options/sentient/places.json'),
    titles: await load('../options/sentient/titles.json'),
  },
  tenno: {
    adjectives: await load('../options/tenno/adjectives.json'),
    names: await load('../options/tenno/names.json'),
    places: await load('../options/tenno/places.json'),
    titles: await load('../options/tenno/titles.json'),
  },
  infested: {
    adjectives: await load('../options/infested/adjectives.json'),
    names: await load('../options/infested/names.json'),
    places: await load('../options/infested/places.json'),
    titles: await load('../options/infested/titles.json'),
  },
};
