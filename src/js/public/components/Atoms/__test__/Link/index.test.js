import { shallowMount } from '@vue/test-utils';
import { Link } from '../..';

describe('Link', () => {
  it('Should render Base Link.', () => {
    const wrapper = shallowMount(Link, {
      stubs: ['router-link'],
      propsData: {
        to: 'これはリンク先です。',
        text: 'これはリンクです。',
      },
    });

    expect(wrapper.contains('router-link-stub')).toBe(true);
    expect(wrapper.classes().length).toBe(1);
    expect(wrapper.classes()).toContain('link');
    expect(wrapper.attributes().target).toBe(undefined);
    expect(wrapper.attributes().rel).toBe(undefined);
    expect(wrapper.attributes().to).toBe('これはリンク先です。');
    expect(wrapper.text()).toBe('これはリンクです。');
  });

  it('Should render external Base Link.', () => {
    const wrapper = shallowMount(Link, {
      propsData: {
        external: true,
        to: 'これはリンク先です。',
        text: 'これはリンクです。',
      },
    });

    expect(wrapper.contains('a')).toBe(true);
    expect(wrapper.classes().length).toBe(1);
    expect(wrapper.classes()).toContain('link');
    expect(wrapper.attributes().target).toBe('_blank');
    expect(wrapper.attributes().rel).toBe('noopener noreferrer');
    expect(wrapper.attributes().href).toBe('これはリンク先です。');
    expect(wrapper.text()).toBe('これはリンクです。');
  });

  // TODO: クラスの中で不要なものは削除する
  it('Should has classes from valid props.', () => {
    const wrapper = shallowMount(Link, {
      stubs: ['router-link'],
      propsData: {
        to: 'これはリンク先です。',
        text: 'これはリンクです。',
        block: true,
        paddingS: true,
        paddingM: true,
        paddingL: true,
        small: true,
        white: true,
        center: true,
        left: true,
        right: true,
        roundS: true,
        roundM: true,
        roundL: true,
        bgKey: true,
        bgSecond: true,
        hoverOpa: true,
      },
    });

    expect(wrapper.classes().length).toBe(16);
    expect(wrapper.classes()).toContain('link');
    expect(wrapper.classes()).toContain('link--block');
    expect(wrapper.classes()).toContain('link--padding-s');
    expect(wrapper.classes()).toContain('link--padding-m');
    expect(wrapper.classes()).toContain('link--padding-l');
    expect(wrapper.classes()).toContain('link--small');
    expect(wrapper.classes()).toContain('link--white');
    expect(wrapper.classes()).toContain('link--center');
    expect(wrapper.classes()).toContain('link--left');
    expect(wrapper.classes()).toContain('link--right');
    expect(wrapper.classes()).toContain('link--round-s');
    expect(wrapper.classes()).toContain('link--round-m');
    expect(wrapper.classes()).toContain('link--round-l');
    expect(wrapper.classes()).toContain('link--bg-key');
    expect(wrapper.classes()).toContain('link--bg-second');
    expect(wrapper.classes()).toContain('link--hover-opa');
  });
});
