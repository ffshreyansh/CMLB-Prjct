const path = require('path');

module.exports = {
  // Other webpack configuration options...

  module: {
    rules: [
      // Other rules...

      {
        test: /\.mp4$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'videos/',
            },
          },
        ],
      },
    ],
  },
};
