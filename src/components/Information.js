import React from 'react'
import Link from 'gatsby-link'

class Information extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="information">
        <h1>{this.props.title}</h1>
        <p>{this.props.desc}</p>
      </div>
    )
  }
}

export default Information
