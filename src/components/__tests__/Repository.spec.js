import {  expect, beforeEach, describe,it } from 'vitest';
import { mount } from '@vue/test-utils';
import Repository from '../Repository.vue';

let wrapper;
beforeEach( () => {
    wrapper = mount(Repository, {
        propsData: {
            title: 'My Repository',
            description: 'This is a test repository',
            repoLink: 'https://example.com',
            watcherCount: 10,
            forkCount: 5,
        }
    });
});

describe('Repository Component', () => {
    it('renders the title, description, and user url correclty', () => {
        expect(wrapper.find('a').attributes('href')).toBe('https://example.com');
        expect(wrapper.find('a').text()).toBe('My Repository');
        expect(wrapper.find('p').text()).toBe('This is a test repository');
    });

    it('displays the correct fork counter', () => {
        expect(wrapper.findAll('.item').at(0).find('p').text()).toBe('10 forks');
    });
    
    it('dipslay the correct watch counter', () => {
        expect(wrapper.findAll('.item').at(1).find('p').text()).toBe('5 watching');
    });
});