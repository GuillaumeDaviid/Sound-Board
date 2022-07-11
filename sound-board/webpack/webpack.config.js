module.exports = {
    entry: "./src/app.tsx",
    output: {
        filename: 'app.brundle.js'
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  };