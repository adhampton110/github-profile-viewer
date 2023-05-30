import {  expect, beforeEach,test, vi  } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../App.vue';

let wrapper;
beforeEach( () => {
    wrapper = mount(App);
})

test('handleUpdateUsername() Updates Username', () => {
    const username = "John Doe";
    // Username should be initialized as ""
    expect(wrapper.vm.username).toBe("");

    // Username should be changed to John Doe 
    wrapper.vm.handleUpdateUsername(username);
    expect(wrapper.vm.username).toBe(username);
});

test('fetchUser() should fetch and set the profile and repositories data', async () => {
    const username = "octocat";

    // Ensure spy() utilizes the correct function
    const spy = vi.spyOn(wrapper.vm,'fetchUser');
    expect(spy.getMockName()).toContain('fetchUser');
    
    // Ensure fetchUser() has been called
    await wrapper.vm.fetchUser(username);
    expect(spy).toHaveBeenCalled(1);
    vi.restoreAllMocks();
});

test('fetchRepositories() should fetch set the repository data', async () => {
    const url = "https://api.github.com/users/octocat/repos";

    // Ensure spy() utilizes the correct function
    const spy = vi.spyOn(wrapper.vm,'fetchRepositories');
    expect(spy.getMockName()).toContain('fetchRepositories');
    
    // Ensure fetchRepositories() has been called
    await wrapper.vm.fetchRepositories(url);
    expect(spy).toHaveBeenCalled(1);
    vi.restoreAllMocks();
});