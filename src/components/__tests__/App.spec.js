import {  expect, afterEach, beforeEach,test, vi  } from 'vitest';
import { mount } from '@vue/test-utils';
import App from '../../App.vue';
import {mockData} from '../__tests__/mockUser';
import {mockRepos} from '../__tests__/mockUser';


test('handleUpdateUsername() Updates Username', () => {
    let wrapper = mount(App);
    expect(wrapper.vm.username).toBe("");

    wrapper.vm.handleUpdateUsername("John Doe");

    expect(wrapper.vm.username).toBe("John Doe");
});

test('fetchUser() should fetch and set the profile and repositories data', async () => {
    let wrapper = mount(App);
    const username = "octocat";

    const spy = vi.spyOn(wrapper.vm,'fetchUser');
    expect(spy.getMockName()).toContain('fetchUser');
    
    await wrapper.vm.fetchUser(username);
    expect(spy).toHaveBeenCalled(1);
    vi.restoreAllMocks();
});

test('fetchRepositories() should fetch set the repository data', async () => {
    let wrapper = mount(App);
    const url = "https://api.github.com/users/octocat/repos";

    const spy = vi.spyOn(wrapper.vm,'fetchRepositories');
    expect(spy.getMockName()).toContain('fetchRepositories');
    
    await wrapper.vm.fetchRepositories(url);
    expect(spy).toHaveBeenCalled(1);
    vi.restoreAllMocks();
});