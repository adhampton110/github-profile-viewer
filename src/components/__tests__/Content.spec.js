import {  expect, afterEach, beforeEach,test, describe, it } from 'vitest';
import { mount, unmount,destroy, shallowMount } from '@vue/test-utils';
import Content from '../Content.vue';
import {mockData} from './mockUser';
import { mockRepos } from './mockRepos';

let wrapper;
beforeEach( () =>{
    wrapper = mount(Content, {
        propsData: {
            user: mockData,
            repos: mockRepos,
        }
    })
});
describe('Conditional Rendering', () => {

    it('renders company and location if not null', () => {
        expect(wrapper.find('.child1 .company').exists()).toBe(true);
        expect(wrapper.find('.child1 .location').exists()).toBe(true);
    });

    it('does not render company and location if null', () => {
        wrapper = mount(Content, {
            propsData: {
                user: {
                    location: null,
                    company: null, 
                },
                repos: {},
            }
        });
        expect(wrapper.find('.child1 .company').exists()).toBe(false);
        expect(wrapper.find('.child1 .location').exists()).toBe(false);
    });

    it('displays repositories when they are available', () => {
        expect(wrapper.find('.child2 h3').exists()).toBe(false);
        expect(wrapper.findAll('.child2 .repo').length).toBe(Object.keys(wrapper.vm.repos).length);

    });

    it('displays message when no repos are public', () => {
        wrapper = mount(Content, {
            propsData: {
                user: mockData,
                repos: {},
            }
        })
        expect(wrapper.find('.child2 h3').exists()).toBe(true);
        expect(wrapper.find('.child2 h3').text()).toEqual("This user has no public repositories");
    })
});

