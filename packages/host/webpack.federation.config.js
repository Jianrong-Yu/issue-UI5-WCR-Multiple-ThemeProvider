const { dependencies } = require('./package.json');

const federationConfig = ({ remote }) => {
  return {
    name: 'Host',
    filename: 'remoteEntry.js',
    remotes: {
      remote: `remote@${remote}/remoteEntry.js`,
    },
    shared: {
      // ...dependencies,
      react: {
        singleton: true,
        requiredVersion: dependencies['react'],
      },
      'react-dom': {
        singleton: true,
        requiredVersion: dependencies['react-dom'],
      },
    },
  };
};

module.exports = federationConfig;