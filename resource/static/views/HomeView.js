import Component from "./Component.js";

export default class HomeView extends Component {
  constructor(params) {
    super(params);
    this.setTitle("Home");
  }
  setup() {
    this.$state = { items: ["item1", "item2"] };
  }
  setEvent() {
    this.$target.querySelector("button").addEventListener("click", () => {
      const { items } = this.$state;
      this.setState({ items: [...items, `item${items.length + 1}`] });
      console.log(this);
    });
  }
  async render() {
    const { items } = this.$state;
    return `
			<div>
				<h1>Single Page Application</h1>
				<h2>Only Vanilla JavaScript</h2>
				
				<p>
					This application is running on JavaScript & Node.js!!<br/>
					It will transform JavaScript to <strong>TypeScript Single Page Application</strong>.
				</p>
				<p>
					<a href="https://velog.io/@wnsguddl789" >Author's Velog</a>
				</p>
			</div>
        `;
  }
}
