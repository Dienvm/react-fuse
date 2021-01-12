import React from 'react';
// import { Router } from 'react-router-dom';

import Products from '../Products';

describe('Products', () => {
	it('should render correctly', () => {
    const  wrapper = renderer.create(<Products />).toJSON()
		expect(wrapper).toMatchSnapshot();
	});
});
