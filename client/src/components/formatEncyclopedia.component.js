import React, { Component } from 'react';

export default class FormatsEncyclopediaComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            format_types: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8082/format-types')
            .then(res => res.text()
            .then((data) => {
                this.setState({ format_types: JSON.parse(data) });
            }))
            .catch(console.log);
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                {this.state.format_types.map((format_type) => (
                    <div class="card">
                        <div class="card-body">
                            <h3 class="card-title">{format_type.displayName}</h3>
                            <p class="card-text">{format_type.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
