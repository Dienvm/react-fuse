const prodConfig = {
	apiKey           : "AIzaSyDgVbsE_hYQZj27WSz9igz5j33wMH8v_zI",
	authDomain       : "react-fuse.firebaseapp.com",
	databaseURL      : "https://react-fuse-default-rtdb.firebaseio.com/",
	projectId        : "react-fuse",
	storageBucket    : "react-fuse.appspot.com",
	messagingSenderId: "955078169400"
};

const devConfig = {
	apiKey           : "AIzaSyDgVbsE_hYQZj27WSz9igz5j33wMH8v_zI",
	authDomain       : "react-fuse.firebaseapp.com",
	databaseURL      : "https://react-fuse-default-rtdb.firebaseio.com/",
	projectId        : "react-fuse",
	storageBucket    : "react-fuse.appspot.com",
	messagingSenderId: "955078169400"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default config;
