export default {
  corpus: {
    adjectives: (
      await import('../options/corpus/adjectives.json', {
        assert: { type: 'json' },
      })
    ).default,
    names: (
      await import('../options/corpus/names.json', {
        assert: { type: 'json' },
      })
    ).default,
    places: (
      await import('../options/corpus/places.json', {
        assert: { type: 'json' },
      })
    ).default,
    titles: (
      await import('../options/corpus/titles.json', {
        assert: { type: 'json' },
      })
    ).default,
  },
  grineer: {
    adjectives: (
      await import('../options/grineer/adjectives.json', {
        assert: { type: 'json' },
      })
    ).default,
    names: (
      await import('../options/grineer/names.json', {
        assert: { type: 'json' },
      })
    ).default,
    places: (
      await import('../options/grineer/places.json', {
        assert: { type: 'json' },
      })
    ).default,
    titles: (
      await import('../options/grineer/titles.json', {
        assert: { type: 'json' },
      })
    ).default,
  },
  orokin: {
    adjectives: (
      await import('../options/orokin/adjectives.json', {
        assert: { type: 'json' },
      })
    ).default,
    names: (
      await import('../options/orokin/names.json', {
        assert: { type: 'json' },
      })
    ).default,
    places: (
      await import('../options/orokin/places.json', {
        assert: { type: 'json' },
      })
    ).default,
    titles: (
      await import('../options/orokin/titles.json', {
        assert: { type: 'json' },
      })
    ).default,
  },
  sentient: {
    adjectives: (
      await import('../options/sentient/adjectives.json', {
        assert: { type: 'json' },
      })
    ).default,
    names: (
      await import('../options/sentient/names.json', {
        assert: { type: 'json' },
      })
    ).default,
    places: (
      await import('../options/sentient/places.json', {
        assert: { type: 'json' },
      })
    ).default,
    titles: (
      await import('../options/sentient/titles.json', {
        assert: { type: 'json' },
      })
    ).default,
  },
  tenno: {
    adjectives: (
      await import('../options/tenno/adjectives.json', {
        assert: { type: 'json' },
      })
    ).default,
    names: (
      await import('../options/tenno/names.json', {
        assert: { type: 'json' },
      })
    ).default,
    places: (
      await import('../options/tenno/places.json', {
        assert: { type: 'json' },
      })
    ).default,
    titles: (
      await import('../options/tenno/titles.json', {
        assert: { type: 'json' },
      })
    ).default,
  },
  infested: {
    adjectives: (
      await import('../options/infested/adjectives.json', {
        assert: { type: 'json' },
      })
    ).default,
    names: (
      await import('../options/infested/names.json', {
        assert: { type: 'json' },
      })
    ).default,
    places: (
      await import('../options/infested/places.json', {
        assert: { type: 'json' },
      })
    ).default,
    titles: (
      await import('../options/infested/titles.json', {
        assert: { type: 'json' },
      })
    ).default,
  },
};
