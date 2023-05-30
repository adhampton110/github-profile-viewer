import {  expect, vi, describe, it, beforeEach  } from 'vitest';
import { mount } from '@vue/test-utils';
import Popup from '../Popup.vue';

describe('Popup Component', () => {

    let wrapper;
    beforeEach( () => {
        wrapper = mount(Popup, {
            propsData: {
                title: "Example Title",
                message: "Example Message",
            }
        });
    });
    
    it('renders the correct title and message', () => {
        
        //ensure title matches and is rendered
        expect(wrapper.findComponent(Popup).exists()).toBe(true);
        expect(wrapper.find('.popup .popup-inner h2').text()).toEqual("Example Title");

        //ensure message matches and is rendered
        expect(wrapper.findComponent(Popup).exists()).toBe(true);
        expect(wrapper.find('.popup .popup-inner p').text()).toEqual("Example Message");
    });

    it('dismiss() function is called after click', async() => {
        const spy = vi.spyOn(wrapper.vm,'dismiss');

        expect(spy.getMockName()).toContain('dismiss');

        // button trigger should trigger dismiss(), which should trigger the spy
        await wrapper.find('button').trigger("click");
        expect(spy).toBeCalled();

    })
});
