import Component from "../Component.js";

export default class NotFound extends Component {
	constructor(params) {
		super(params);
		this.setTitle("404 - Not Found");
	}

	async render() {
		return `
            <h1>404 - Not Found</h1>
            <p>
                해당페이지가 존재하지 않습니다.
            </p>
        `;
	}
}
