import { shallowMount } from '@vue/test-utils';
import App from '@/components/App';

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(App)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
})