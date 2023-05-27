import {  expect, afterEach, beforeEach,test } from 'vitest';
import { mount, unmount,destroy } from '@vue/test-utils';
import App from '../../App.vue';


test('handleUpdateUsername() Updates Username', () => {
    let wrapper = mount(App);
    expect(wrapper.vm.username).toBe("");

    wrapper.vm.handleUpdateUsername("John Doe");

    expect(wrapper.vm.username).toBe("John Doe");
});