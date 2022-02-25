const defaultPresets = [
  ['@babel/preset-typescript', { allowNamespaces: true }],
];

const presetsForESM = [
  [
    '@babel/preset-env',
    {
      modules: false,
    },
  ],
  ...defaultPresets,
];
const presetsForCJS = [
  [
    '@babel/preset-env',
    {
      modules: 'cjs',
    },
  ],
  ...defaultPresets,
];

module.exports = {
  env: {
    cjs: {
      presets: presetsForCJS,
    },
    esm: {
      presets: presetsForESM,
    },
  },
  ignore: [/.*\/(.*\.|)test\.tsx?/, /node_modules/, /dist/],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ts'],
      },
    ],
    '@babel/plugin-transform-runtime',
  ],
};
