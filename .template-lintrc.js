'use strict';

module.exports = {
  // extends: 'recommended',
  rules: {
    'attribute-indentation': false,
    'no-implicit-this': {
      allow: [
        'ember-sundries/add',
        'ember-sundries/array-join',
        'ember-sundries/decimal-to-percentage',
        'ember-sundries/force-decimals',
        'ember-sundries/html-safe',
        'ember-sundries/interpolated-property',
        'ember-sundries/is-in-array',
        'ember-sundries/is-last-in-each',
        'ember-sundries/round-number',
        'ember-sundries/safe-name',
        'ember-sundries/simple-addition',
        'ember-sundries/string-contains',
        'ember-sundries/string-replace',
        'ember-sundries/string-split',
        'ember-sundries/to-json',
      ],
    },
  },
};
