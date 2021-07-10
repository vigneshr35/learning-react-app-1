import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: [],
    }
    removeCharacter = (index) => {
        const { characters } = this.state

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index
            }),
        })
    }
    handleSubmit = (character) => {
        this.setState({ characters: [...this.state.characters, character] })
    }
    render() {
        const name = 'Sai'
        const heading = <h1>Hello, {name}</h1>
        const { characters } = this.state
        return (
            <div className="App">
                {heading}
                <Table characterData={characters} removeCharacter={this.removeCharacter} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}

export default App