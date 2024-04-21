import { Component } from "react";
import { getPost } from "../hooks/fetch";

class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            isLoading: false,
            error: null,

        };
    }
    async componentDidMount() {
        this.setState({
            isLoading: true,

        });
        const data = await getPost();
        console.log(data)
        

        if (data.status === 200 && data?.data) {
            this.setState({
                posts: data.data.splice(0, 10),
                isLoading: false,
                error: null,
            });
        } else {
            this.setState({
                posts: [],
                isLoading: false,
                error: "No post found",

            });
        }
    }
    render() {
        <main>
            {isLoading && <div>Loading, please wait...</div>}
            {error && <div>{error}</div>}
            {posts && posts.length !== 0 &&
                posts.map((posts) => {
                    return (
                        <div key={post.id} >
                            <h2 className="post-title">{posts.title}</h2>
                            <p className="post-body">{posts.body}</p>
                            <p className="post-action">{posts.action}</p>
                        </div>
                    );

                })}
        </main>

    }
}
export default ClassComponent