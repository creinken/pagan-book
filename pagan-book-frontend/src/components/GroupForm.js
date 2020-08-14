import React, {Component} from 'react';

export default class GroupForm extends Component {

    state = {
        name: '',
        description: '',
    }

    handleOnChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleOnSubmit = event => {
        event.preventDefault();
        this.props.addGroup(this.state)
        this.setState({
            name: '',
            description: '',
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
                                        <label htmlFor="name" className="col-md-4 control-label">Name</label>
                                        <div className="col-md-5">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="name"
                                                onChange={this.handleOnChange}
                                                value={this.state.name}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="description" className="col-md-4 control-label">Group Description</label>
                                        <div className="col-md-5">
                                            <textarea
                                                className="form-control"
                                                name="description"
                                                onChange={this.handleOnChange}
                                                value={this.state.description}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-md-6 col-md-offset-4">
                                            <button type="submit" className="btn btn-default">Create Group</button>
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
