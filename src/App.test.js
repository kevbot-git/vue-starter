import { mount } from '@vue/test-utils';
import App from '@/App.vue';
import router from '@/router';

describe('App', () => {
  it('should load', () => {
    const wrapper = mount(App, {
      router,
      global: {
        stubs: {
          'router-view': { template: '<div><slot /></div>' },
          'router-link': { template: '<div><slot /></div>' },
        },
      },
    });
    expect(wrapper.text()).toMatch('Home');
  });
});
