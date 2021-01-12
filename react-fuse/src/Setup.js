import renderer from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const globalCustom = global;
globalCustom.renderer = renderer;
globalCustom.shallow = shallow;
globalCustom.mount = mount;

jest.mock('i18next');
jest.mock('perfect-scrollbar/css/perfect-scrollbar.css', () => 'mockStyle');

jest.mock('firebase', () => ({
	apps: [],
	initializeApp: jest.fn(),
	firestore: jest.fn(() => ({
		collection: jest.fn(() => ({
			get: jest.fn().mockResolvedValue([
				{
					id: 'collectionId',
					data: jest.fn(() => {}),
				},
			]),
			doc: jest.fn(() => ({
				get: jest.fn().mockResolvedValue({
					exists: true,
					data: jest.fn(() => [
						{
							id: '1',
							name: 'Product name 1',
							image: '/testImage.png',
							price: 10,
						},
					]),
					id: 'docId',
				}),
			})),
		})),
		settings: jest.fn(),
	})),
}));
