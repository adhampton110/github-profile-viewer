import {  expect, afterEach, beforeEach,test, vi, describe, it  } from 'vitest';
import { mount } from '@vue/test-utils';
import Popup from '../Popup.vue';

describe('Popup Component', () => {

    it('renders the correct title and message', () => {
        const wrapper = mount(Popup, {
            propsData: {
                title: "Example Title",
                message: "Example Message",
                trigger: true,
            }
        });

        //ensure title matches and is rendered
        expect(wrapper.findComponent(Popup).exists()).toBe(true);
        expect(wrapper.find('.popup .popup-inner h2').text()).toEqual("Example Title");

        //ensure message matches and is rendered
        expect(wrapper.findComponent(Popup).exists()).toBe(true);
        expect(wrapper.find('.popup .popup-inner p').text()).toEqual("Example Message");
    });

    it('sets dimiss function after click', async() => {
        const wrapper = mount(Popup, {
            propsData: {
                title: "Example Title",
                message: "Example Message",
            }
        });

        const spy = vi.spyOn(wrapper.vm,'dismiss');
        expect(spy.getMockName()).toContain('dismiss');

        await wrapper.find('button').trigger("click");
        
        //button trigger should be set to false 
        expect(spy).toBeCalled();

    })
});
