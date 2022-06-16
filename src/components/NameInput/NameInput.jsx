import React, { Component } from 'react'

import { changeName } from '../../utilities/emojis-api'

export default class NameInput extends Component {

    // handleChange = (e) => {
    //     this.setState({
    //         [e.target.name]: e.target.value,
    //         error: ''
    //     })
    // }

    handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { name } = this.props.name
            const newName = await changeName({ name })
            this.props.setName(newName)
        } catch {
            this.setState({error: 'Name change failed - Please try again'})
        }
    }


  render() {
      const disable = !this.props.name
    return (
      <div>
          <form autoComplete='off' onSubmit={this.props.handleSubmit}>
              <input type="text" name="name" value={this.props.name} onChange={this.props.handleNameChange} placeholder='Untitled'/>
              <button type='submit' disabled={disable}>Change Name</button>
          </form>
      </div>
    )
  }
}
