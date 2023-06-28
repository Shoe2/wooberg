import React, { Component } from 'react'

export default class FormatComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      formatId: props.match.params.id,
    }
  }

  componentDidMount() {
    fetch('http://localhost:8082/format?formatId=' + this.state.formatId)
      .then((res) =>
        res.text().then(
          (data) => {
            this.setState({ format: JSON.parse(data) })
          },
          (error) => {
            console.log(error)
          },
        ),
      )
      .catch(console.log)
  }

  render() {
    return (
      <div>
        <img
          src={this.state.format?.formatImgURL}
          alt={this.state.format?.title}
        />
        <h5>{this.state.format?.title}</h5>
        <div id="formatRules">{this.state.format?.Rules}</div>
        <h6>Banned List</h6>
        <p>{this.state.format?.BannedList}</p>
        <h6>RestrictedList</h6>
        <p>{this.state.format?.RestrictedList}</p>
        <h6>History</h6>
        <p>
          this format was originally created by {this.state.format?.creator}
        </p>
        <p>{this.state.format?.history}</p>
      </div>
    )
  }
}
