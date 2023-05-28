import {  expect, afterEach, beforeEach,test } from 'vitest';
import { mount, unmount,destroy } from '@vue/test-utils';
import Content from '../Content.vue';

let wrapper;
beforeEach( () => {
    wrapper = mount(Content);
});

test('initial data renders correctly', () => {
    expect(wrapper.text()).toContain("adhampton110");
    expect(wrapper.text()).toContain("https://github.com/adhampton110");
    expect(wrapper.text()).toContain("https://api.github.com/users/octocat/followers");
    expect(wrapper.text()).toContain("https://api.github.com/users/adhampton110/repos");
});

