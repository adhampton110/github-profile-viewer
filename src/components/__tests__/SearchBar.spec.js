import { describe, it, expect, afterEach, beforeEach, test } from 'vitest';
import { mount, unmount } from '@vue/test-utils';
import SearchBar from '../SearchBar.vue';

let wrapper;
beforeEach(() => {
  wrapper = mount(SearchBar);
});


test('test component renders properly', () => { 
    
    //ensure component exists
    const inputElement = wrapper.find('input');
    expect(wrapper.exists()).toBe(true);

    //ensures the correct information is rendered on the screen
    expect(inputElement.attributes('type')).toBe('text');
    expect(inputElement.attributes("placeholder")).toEqual("Enter a GitHub username...");
    

});

test('pressing enter updates username variable', () => {
  const inputElement = wrapper.find('input');

  //entering "John Doe" changes the wrapper variable
  inputElement.setValue('John Doe');
  inputElement.trigger('keydown.enter');
  expect(wrapper.vm.username).toBe('John Doe');
});

