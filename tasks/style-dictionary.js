import StyleDictionary from 'style-dictionary';
const CWD = process.cwd();

StyleDictionary.extend({
  source: [`${CWD}/src/styles/tokens/**/*.json`],
  platforms: {
    scss: {
      transformGroup: 'scss',
      buildPath: `${CWD}/src/styles/`,
      files: [
        {
          format: 'scss/variables',
          destination: 'generated.constants.scss',
          filter: {
            attributes: {
              category: 'constants',
            },
          },
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: `${CWD}/src/styles/`,
      files: [
        {
          format: 'js/module',
          destination: 'generated.constants.js',
        },
      ],
    },
    json: {
      transformGroup: 'json',
      buildPath: `${CWD}/src/styles/`,
      files: [
        {
          format: 'json/nested',
          destination: 'generated.constants.json',
        },
      ],
    },
  },
}).buildAllPlatforms();
