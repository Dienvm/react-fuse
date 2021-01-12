import PRODUCTS from 'app/constants/stubDb';
import { getProduct } from '../product.actions';

describe('Product action', () => {
	it('should get current product correctly', async () => {
		const result = await getProduct('qqM1MTK5VSvZ2wUKjYuX');
		console.log('result', result);

		expect(result).toEqual(PRODUCTS[0]);
	});
});
