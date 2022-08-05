import React, {Component} from 'react';

export default class PostForm extends Component {

    state = {
        title: '',
        author: '',
        content: '',
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        let postData = {
            title: this.state.title,
            user_id: this.state.author,
            content: this.state.content}
        this.props.addPost(postData)
        this.setState({
            title: '',
            author: '',
            content: '',
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <form className="form-horizontal"
                                    onSubmit={this.handleOnSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="title" className="col-md-4 control-label">Title</label>
                                        <div className="col-md-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="title"
                                                onChange={this.handleOnChange}
                                                value={this.state.title}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="author" className="col-md-4 control-label">Author</label>
                                        <div className="col-md-5">
                                            <input
                                                className="form-control"
                                                type="text"
                                                name="author"
                                                onChange={this.handleOnChange}
                                                value={this.state.author}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="content" className="col-md-4 control-label">Content</label>
                                        <div className="col-md-5">
                                            <textarea
                                                className="form-control"
                                                name="content"
                                                onChange={this.handleOnChange}
                                                value={this.state.content}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-6 col-md-offset-4">
                                            <button type="submit" className="btn btn-default">Post</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
