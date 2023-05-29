import {  expect, afterEach, beforeEach,test, describe, it } from 'vitest';
import { mount, unmount,destroy, shallowMount } from '@vue/test-utils';
import Content from '../Content.vue';

let wrapper;
beforeEach( () => {
    wrapper = mount(Content, {
        propsData: {
            user : {
                company: "ABC Company"
            }
        }
    });
});

describe('Conditional Rendering', () => {

    it('renders company div if user.company is not null', () => {
        const wrapper = mount(Content, {
            user: {
                company: "Google"
            }, 
            repos:
                [
                {  

                }
            ]
        
        });
        expect(wrapper.find('.child1 div').exists()).toBe(true);
    });
});

