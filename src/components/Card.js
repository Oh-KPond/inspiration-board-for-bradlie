import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';

import './Card.css';

class Card extends Component {
  handleSubmit = (event) => {
    event.preventDefault();

    this.props.deleteCardCallback(this.props.id);
  }

  render() {
    let displayText;
    let displayEmoji;

    if (this.props.text) {
      displayText = <h3 className="card__content-text">{this.props.text}</h3>;
    }

    if (this.props.emoji) {
      displayEmoji = <p className="card__content-emoji">{emoji.getUnicode(this.props.emoji)}</p>;
    }


    return (
      <div className="card">
        <article className="card__content">
          {displayText}
          {displayEmoji}
        </article>
        <form className="card__delete" onSubmit={this.handleSubmit}>
          <button className="button" type="submit">x</button>
        </form>
      </div>
    )
  }
}

Card.propTypes = {
  text: PropTypes.string,
  emoji: PropTypes.string,
  id: PropTypes.number,
  deleteCardCallback: PropTypes.func,
};

export default Card;
