import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

import './Board.css';
import Card from './Card';
import NewCardForm from './NewCardForm';

class Board extends Component {
  constructor() {
    super();

    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    axios.get('https://bradlies-board-api.herokuapp.com//boards/bradliepond/cards')
    .then((response) => {
      this.setState({ cards: response.data });
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  addCard = (card) => {
    // const cards = this.state.cards;

    axios.post('https://bradlies-board-api.herokuapp.com//boards/bradliepond/cards', card)
    .then((response) => {
    this.componentDidMount();
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    })
  }


  deleteCard = (id) => {
    axios.delete(`https://bradlies-board-api.herokuapp.com//boards/bradliepond/cards/${id}`)
    .then((response) => {
      this.setState({
        message: 'Successfully Deleted Card'
      });
      this.componentDidMount();
      // this.componentWillUnmount(); // <---  Is this something I should be using instead
    })
    .catch((error) => {
      this.setState({
        error: error.message
      })
    });
  }

  renderCards = () => {
    const cardList = this.state.cards.map((data,index) => {
      return (
        <Card
          key={index}
          text={data.card.text}
          emoji={data.card.emoji}
          id={data.card.id}
          deleteCardCallback={this.deleteCard}
        />
      );
    });
    return cardList
  }

  render() {
    let errorMessage

    if (this.state.error) {
      errorMessage = <p>{this.state.error}</p>
    }

    let message

    if (this.state.message) {
      message = <p>{this.state.message}</p>
    }
    return (
      <div className="board">
        {this.renderCards()}
        {errorMessage}
        {message}
        <NewCardForm addCardCallback={this.addCard} />
      </div>
    )
  }
}

Board.propTypes = {

};

export default Board;
