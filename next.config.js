module.exports = {
  async rewrites() {
    return [
      {
        source: '/login',
        destination: '/auth/login',
      },
      {
        source: '/register',
        destination: '/auth/register',
      },
    ];
  },
  images: {
    domains: [
      'upload.wikimedia.org',
      'material-ui.com',
      'miro.medium.com',
      'react-query.tanstack.com',
    ],
  },
  env: {
    API_BASE_URL: '',
    FIREBASE_API_KEY: 'AIzaSyB6V9h5p7NGxI7dUvoJ63XYVr5mRYagsFs',
    FIREBASE_AUTH_DOMAIN: 'nextts-materialui-boilerplate.firebaseapp.com',
    FIREBASE_PROJECT_ID: 'nextts-materialui-boilerplate',
    FIREBASE_STORAGE_BUCKET: 'nextts-materialui-boilerplate.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '967857331722',
    FIREBASE_APP_ID: '1:967857331722:web:37bd6fc91062a1c9f949f3',
    FIREBASE_MEASUREMENT_ID: 'G-2J4BM2509S',
    FIREBASE_DATABASE_URL:
      'https://nextts-materialui-boilerplate.firebaseio.com',
  },
};
