const firebase = jest.genMockFromModule('firebase');
firebase.initializeApp = jest.fn();
const values = {
	returnValueOne: 'valueOne',
	returnValueTwo: 'valueTwo',
};
const data = {
	values,
};
const cloudFunction = jest.fn((testValues) => {
	if (testValues.value === 'Valid value') {
		return Promise.resolve({
			data,
		});
	}
	return Promise.reject(new Error('Error message'));
});
const httpsCallable = jest.fn(() => cloudFunction);
firebase.functions = jest.fn(() => ({
	httpsCallable,
}));
module.exports = firebase;
