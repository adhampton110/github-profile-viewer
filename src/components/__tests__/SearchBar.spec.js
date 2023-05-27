import { describe, it, expect, afterEach, beforeEach, test } from 'vitest';
import { mount, unmount } from '@vue/test-utils';
import SearchBar from '../SearchBar.vue';

let wrapper;
beforeEach(() => {
  wrapper = mount(SearchBar);
});


test('test component renders properly', () => { 
    
    const inputElement = wrapper.find('input');
    
    expect(wrapper.exists()).toBe(true);
    expect(inputElement.attributes('type')).toBe('text');
    

});
