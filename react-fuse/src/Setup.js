import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import { configure, shallow, mount } from 'enzyme';
import 'babel-polyfill';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

const globalCustom = global;
globalCustom.renderer = renderer;
globalCustom.shallow = shallow;
globalCustom.mount = mount;
globalCustom.toJson = toJson;
/* Wait all async finish */
globalCustom.flushPromises = () => {
	return new Promise((resolve) => setImmediate(resolve));
};

jest.mock('i18next');
