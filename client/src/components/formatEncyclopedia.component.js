import React, { Component } from 'react';

export default class FormatsEncyclopediaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            format_types: [],
            formats: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8082/format-types')
            .then(res => res.text()
                .then((data) => {
                    this.setState({ format_types: JSON.parse(data) });
                }))
            .catch(console.log);

        fetch('http://localhost:8082/formats')
            .then(res => res.text()
                .then((data) => {
                    this.setState({ formats: JSON.parse(data) });
                }))
            .catch(console.log);
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                {this.state.format_types.map((format_type) => (
                    <div className="card" key={format_type._id}>
                        <div className="card-body">
                            <h3 className="card-title">{format_type.displayName}</h3>
                            <p className="card-text">{format_type.desc}</p>
                            <ul>
                                {this.state.formats.filter((format)=> format.tags.includes(format_type._id)).map((format) => (
                                    <li className="card-title">{format.title}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
