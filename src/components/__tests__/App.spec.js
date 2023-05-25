import { describe, it, expect, afterEach } from 'vitest';

import { mount } from '@vue/test-utils';
import Title from '../Title.vue';
import SearchBar from '../SearchBar.vue';
import Content from '../Content.vue';

let wrapper;
beforeEach(() => {
  const app = createApp(App);
  wrapper = mount(app);
});

afterEach( () => {
  wrapper.destroy();
});

describe.todo('Title Component', () => {
  it('renders properly', () => {
    const title = wrapper.findComponent(Title);

    expect(title.exists()).toBe(true);
    expect(wrapper.text()).toContain('Github Profile Viewer');
  })
});

describe.todo('SearchBar Component', () => {
  it('renders properly', () => {
    const searchbar = wrapper.findComponent(SearchBar);
    
    expect(searchbar.exists()).toBe(true);
  })
})

describe.todo('Content Component', () => {
  it('renders properly', () => {
    const content = wrapper.findComponent(Content);
    
    expect(content.exists()).toBe(true);
  });
  it('initializes with default data', () => {
    expect(wrapper.wm.login).toBe("adhampton110");
    expect(wrapper.wm.avatar_url).toBe("https://avatars.githubusercontent.com/u/583231?v=4");
    expect(wrapper.wm.url).toBe("https://github.com/adhampton110");
    expect(wrapper.wm.followers_url).toBe("https://api.github.com/users/octocat/followers");
    expect(wrapper.wm.repo_urls).toBe("https://api.github.com/users/adhampton110/repos");
  });

});