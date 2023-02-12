const { createId } = require('@paralleldrive/cuid2');

module.exports.templateTags = [
  {
    name: 'Cuid2',
    displayName: 'Cuid2',
    description: 'A plugin for generating cuids',
    args: [],
    run(context) {
      return createId();
    },
  },
];
