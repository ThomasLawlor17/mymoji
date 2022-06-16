import React, { Component } from 'react'

import { changeName } from '../../utilities/emojis-api'

export default class NameInput extends Component {

    state = {
        name: this.props.name
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ''
        })
    }

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
      const disable = !this.state.name
    return (
      <div>
          <form autoComplete='off' onSubmit={this.handleSubmit}>
              <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder='Untitled'/>
              <button type='submit' disabled={disable}>Change Name</button>
          </form>
      </div>
    )
  }
}
