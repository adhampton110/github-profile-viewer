import {  expect, beforeEach, test } from 'vitest';
import { mount } from '@vue/test-utils';
import Title from '../Title.vue';

let wrapper;
beforeEach(() => {
  wrapper = mount(Title);
});



test('title component renders properly', () => {
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.text()).toContain('View Public GitHub User Information');
});
