import { mount } from '@vue/test-utils';
import Index from '@/';

describe('Root Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Index)
    expect(wrapper.isVueInstance()).toBeTruthy()
  });
});