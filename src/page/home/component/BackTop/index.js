import BackTop from './BackTop'

/* istanbul ignore next */
BackTop.install = function(Vue) {
  Vue.component(BackTop.name, BackTop);
};

export default {
  components: {
   'remote-js': {
    render(createElement) {
      return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
    },
    props: {
      src: { type: String, required: true },
    },
  },
  },
}