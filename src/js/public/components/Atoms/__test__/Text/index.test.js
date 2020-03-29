import { shallowMount } from '@vue/test-utils';
import { Text } from '../..';

describe('Text', () => {
  it('Should render Base Text.', () => {
    const wrapper = shallowMount(Text, {
      propsData: {
        text: 'これはテキストです。',
        tag: 'p',
      },
    });

    expect(wrapper.contains('p')).toBe(true);
    expect(wrapper.classes().length).toBe(0);
    expect(wrapper.text()).toBe('これはテキストです。');
  });

  it('Should render Base Text with span.', () => {
    const wrapper = shallowMount(Text, {
      propsData: {
        text: 'これはテキストです。',
        tag: 'span',
      },
    });

    expect(wrapper.contains('span')).toBe(true);
    expect(wrapper.text()).toBe('これはテキストです。');
  });

  // TODO: クラスの中で不要なものは削除する
  it('Should has classes from valid props.', () => {
    const wrapper = shallowMount(Text, {
      propsData: {
        text: 'これはテキストです。',
        tag: 'p',
        fontXl: true,
        fontM: true,
        fontL: true,
        fontS: true,
        fontXs: true,
        keyColor: true,
        darkGray: true,
        center: true,
        left: true,
        right: true,
        underline: true,
      },
    });

    expect(wrapper.classes().length).toBe(11);
    expect(wrapper.classes()).toContain('text--font-xl');
    expect(wrapper.classes()).toContain('text--font-l');
    expect(wrapper.classes()).toContain('text--font-m');
    expect(wrapper.classes()).toContain('text--font-s');
    expect(wrapper.classes()).toContain('text--font-xs');
    expect(wrapper.classes()).toContain('text--key-color');
    expect(wrapper.classes()).toContain('text--dark-gray');
    expect(wrapper.classes()).toContain('text--center');
    expect(wrapper.classes()).toContain('text--left');
    expect(wrapper.classes()).toContain('text--right');
    expect(wrapper.classes()).toContain('text--underline');
  });
});
