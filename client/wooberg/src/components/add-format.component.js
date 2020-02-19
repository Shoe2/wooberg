import React, { Component } from 'react';

export default class AddFormat extends Component {

    constructor(props) {
        super(props);

        this.onChangeFormatTitle = this.onChangeFormatTitle.bind(this);
        this.onChangeFormatRules = this.onChangeFormatRules.bind(this);
        this.onChangeFormatTags = this.onChangeFormatTags.bind(this);
        this.onChangeFormatHistory = this.onChangeFormatHistory.bind(this);
        this.onChangeFormatCreator = this.onChangeFormatCreator.bind(this);
        this.onChangeFormatBannedList = this.onChangeFormatBannedList.bind(this);
        this.onChangeFormatRestrictedList = this.onChangeFormatRestrictedList.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            format_types: null,
            format_title: '',
            format_rules: '',
            format_tags: '',
            format_history: '',
            format_creator: '',
            format_banned: '',
            format_restricted: ''
        }
    }

    componentDidMount() {
        fetch('http://localhost:8082/format-types')
        .then(res => res.json())
        .then((data) => {
          this.setState({ format_types: data })
          console.log(data);
        })
        .catch(console.log)
      }

    onChangeFormatTitle(e) {
        this.setState({
            format_title: e.target.value
        });
    }

    onChangeFormatRules(e) {
        this.setState({
            format_rules: e.target.value
        });
    }

    onChangeFormatTags(e) {
        this.setState({
            format_tags: e.target.value
        });
    }

    onChangeFormatHistory(e) {
        this.setState({
            format_history: e.target.value
        });
    }
    onChangeFormatCreator(e) {
        this.setState({
            format_creator: e.target.value
        });
    }
    onChangeFormatBannedList(e) {
        this.setState({
            format_banned: e.target.value
        });
    }
    onChangeFormatRestrictedList(e) {
        this.setState({
            format_restricted: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        //Subit to express here
        this.setState({
            todo_description: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Add or Edit Format</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Format Title: </label>
                        <input type="text" className="form-control" value={this.state.format_title} onChange={this.onChangeFormatTitle} />
                    </div>
                    <div className="form-group">
                        <label>Rules: </label>
                        <textarea className="form-control" value={this.state.format_rules} onChange={this.onChangeFormatRules}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Banned List: </label>
                        <textarea className="form-control" value={this.state.format_banned} onChange={this.onChangeFormatBannedList}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Restricted List: </label>
                        <textarea className="form-control" value={this.state.format_restricted} onChange={this.onChangeFormatRestrictedList}>
                        </textarea>
                    </div>
                    <div className="form-group">
                        <label>Format Creator: </label>
                        <input type="text" className="form-control" value={this.state.format_creator} onChange={this.onChangeFormatCreator} />
                    </div>
                    <div className="form-group">
                        <label>Format History: </label>
                        <textarea className="form-control" value={this.state.format_history} onChange={this.onChangeFormatHistory}>
                        </textarea>
                    </div>
{/* 
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <select class="custom-select custom-select-sm">
                                <option selected>Open this select menu</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityLow"
                                value="Low"
                                checked={this.state.todo_priority === 'Low'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityMedium"
                                value="Medium"
                                checked={this.state.todo_priority === 'Medium'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input"
                                type="radio"
                                name="priorityOptions"
                                id="priorityHigh"
                                value="High"
                                checked={this.state.todo_priority === 'High'}
                                onChange={this.onChangeTodoPriority}
                            />
                            <label className="form-check-label">High</label>
                        </div>
                    </div> */}

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}