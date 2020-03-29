import { shallowMount } from '@vue/test-utils';
import { Button } from '../..';

describe('Button', () => {
  it('Should render Base Button.', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        type: 'button',
        text: 'これはボタンです。',
      },
    });

    expect(wrapper.contains('button')).toBe(true);
    expect(wrapper.classes().length).toBe(1);
    expect(wrapper.classes()).toContain('button');
    expect(wrapper.attributes().type).toBe('button');
    expect(wrapper.text()).toBe('これはボタンです。');
  });

  // TODO: クラスの中で不要なものは削除する
  it('Should has classes from valid props.', () => {
    const wrapper = shallowMount(Button, {
      propsData: {
        type: 'button',
        text: 'これはボタンです。',
        block: true,
        paddingS: true,
        paddingM: true,
        paddingL: true,
        fontS: true,
        fontM: true,
        fontL: true,
        keyColor: true,
        white: true,
        center: true,
        left: true,
        right: true,
        underline: true,
        roundS: true,
        roundM: true,
        roundL: true,
        bgKey: true,
        bgSecond: true,
        bgWhite: true,
        hoverOpa: true,
      },
    });

    expect(wrapper.classes().length).toBe(21);
    expect(wrapper.classes()).toContain('button');
    expect(wrapper.classes()).toContain('button--block');
    expect(wrapper.classes()).toContain('button--padding-s');
    expect(wrapper.classes()).toContain('button--padding-m');
    expect(wrapper.classes()).toContain('button--padding-l');
    expect(wrapper.classes()).toContain('button--font-l');
    expect(wrapper.classes()).toContain('button--font-m');
    expect(wrapper.classes()).toContain('button--font-s');
    expect(wrapper.classes()).toContain('button--key-color');
    expect(wrapper.classes()).toContain('button--white');
    expect(wrapper.classes()).toContain('button--center');
    expect(wrapper.classes()).toContain('button--left');
    expect(wrapper.classes()).toContain('button--right');
    expect(wrapper.classes()).toContain('button--underline');
    expect(wrapper.classes()).toContain('button--round-s');
    expect(wrapper.classes()).toContain('button--round-m');
    expect(wrapper.classes()).toContain('button--round-l');
    expect(wrapper.classes()).toContain('button--bg-key');
    expect(wrapper.classes()).toContain('button--bg-second');
    expect(wrapper.classes()).toContain('button--bg-white');
    expect(wrapper.classes()).toContain('button--hover-opa');
  });
});
