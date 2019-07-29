import React from 'react'

export default class Input extends React.Component{
  render() {
    return(
      <div>
        <div>
          <input
            className="form-control"
            type={this.props.type}
            name={this.props.name}
            id={this.props.id}
            autoComplete={this.props.autoComplete}
            placeholder={this.props.placeholder}
            required={this.props.required}
            autoFocus={this.props.autofocus}
            onChange={this.props.onChange}
          />
        </div>
      </div>
    )
  }
}
