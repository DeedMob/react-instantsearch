const env = process.env.NODE_ENV || 'development';
const modules = process.env.MODULES || 'commonjs';
const plugins = ['lodash', 'inline-json-import'];

// hot reloading, async/await, jsx source
if (env === 'development') {
  plugins.push(
    [
      'transform-runtime',
      {
        helpers: false,
        polyfill: false,
        regenerator: true,
      },
    ],
    'transform-react-jsx-source',
    'react-hot-loader/babel',
    'transform-regenerator'
  );
}

module.exports = {
  plugins,
  presets: [
    [
      'env',
      {
        targets: {
          browsers: ['last 2 versions', 'ie >= 9'],
        },
        modules,
      },
    ],
    'react',
    'stage-2',
  ],
};
