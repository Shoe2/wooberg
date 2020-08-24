import React, { Component } from 'react';

export default class FormatComponent extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            formatId: props.match.params.id
        };
    }

    componentDidMount() {
        fetch('http://localhost:8082/format?formatId=' + this.state.formatId)
            .then(res => res.text()
                .then((data) => {
                    this.setState({ format: JSON.parse(data) });
                }, (error)=>{
                    console.log(error);
                }))
            .catch(console.log);
    }

    render() {
        return (
            <div>
                <p>{this.state.format?.title}</p>
            </div>
        )
    }
}