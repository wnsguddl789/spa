import Component from "./Component.js";

export default class PostView extends Component {
	constructor(params) {
		super(params);
		this.setTitle("Post List");
	}

	async render() {
		return `
            <h1>This is Post List View</h1>
            <p>
                여긴 포스트 리스트 뷰입니다.
            </p>
            <p>
                <a href="/posts" data-link>View recent posts</a>.
            </p>
        `;
	}
}
