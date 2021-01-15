const prodConfig = {
  apiKey: 'AIzaSyB0KITJSOPSfr5J20dQY6PlGmHgAenQPQk',
  authDomain: 'react-fuse-production.firebaseapp.com',
  databaseURL: 'https://react-fuse-production-default-rtdb.firebaseio.com/',
  projectId: 'react-fuse-production',
  storageBucket: 'react-fuse-production.appspot.com',
  messagingSenderId: '894282411305',
};

const devConfig = {
  apiKey: 'AIzaSyDgVbsE_hYQZj27WSz9igz5j33wMH8v_zI',
  authDomain: 'react-fuse.firebaseapp.com',
  databaseURL: 'https://react-fuse-default-rtdb.firebaseio.com/',
  projectId: 'react-fuse',
  storageBucket: 'react-fuse.appspot.com',
  messagingSenderId: '955078169400',
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
