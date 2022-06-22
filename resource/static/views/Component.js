export default class Component {
  $target;
  $state;
  constructor(params, $target) {
    this.$target = $target;
    this.params = params;
    this.setTitle(params);
    this.setup();
    this.render();
  }

  setTitle(title) {
    document.title = title;
  }
  setup() {}

  async template() {
    return "";
  }

  render() {
    this.$target.innerHTML = this.template();
    this.setEvent();
  }
  setEvent() {}

  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
