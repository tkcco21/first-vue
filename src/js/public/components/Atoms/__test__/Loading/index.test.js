import { shallowMount } from '@vue/test-utils';
import { Loading } from '../..';

describe('Loading', () => {
  it('Should render Loading.', () => {
    const wrapper = shallowMount(Loading);

    expect(wrapper.contains('div.loading')).toBe(true);
    expect(wrapper.contains('div.loading-body')).toBe(true);
    expect(wrapper.contains('div.loading-content')).toBe(true);
    expect(wrapper.contains('p.loading-text')).toBe(true);
    expect(wrapper.contains('p.loading-description')).toBe(true);
    expect(wrapper.find('p.loading-text').text()).toBe('Loading now...');
    expect(wrapper.find('p.loading-description').text()).toBe('諸事情により、この読み込みはかなり時間がかかる場合があります。\n      辛抱強くお待ちいただけると幸いです。');
  });
});
