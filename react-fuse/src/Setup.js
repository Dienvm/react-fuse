import renderer from 'react-test-renderer'
import { configure, shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import firebaseService from 'app/services/firebaseService'

configure({ adapter: new Adapter() })

const globalCustom = global
globalCustom.renderer = renderer
globalCustom.shallow = shallow
globalCustom.mount = mount

jest.mock('i18next')
jest.mock('perfect-scrollbar/css/perfect-scrollbar.css', () => 'mockStyle')
jest.mock('@fuse/core/FuseScrollbars', () => 'FuseScrollbars')

jest.mock('firebase', () => ({
  apps: [],
  initializeApp: jest.fn(),
  firestore: jest.fn(() => ({
    collection: jest.fn(() => ({
      get: jest.fn(),
      doc: jest.fn(),
    })),
    settings: jest.fn(),
  })),
}))
