import React, { Component } from 'react';
import PropTypes from 'prop-types';
import emoji from 'emoji-dictionary';
import './NewCardForm.css';

const EMOJI_LIST = ["", "heart_eyes", "heart", "clap", "sparkling_heart", "heart_eyes_cat", "dog", "100", "rose", "smile", "rainbow", "earth_americas", "sunflower", "unicorn"]

class NewCardForm extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
      emoji: '',
    };
  }

  renderEmoji= () => {
    const emojiList = EMOJI_LIST.map((emojiOption, index) => {
      return(
        <option
          key={index} value={emojiOption}>{emoji.getUnicode(emojiOption)}
        </option>
      );
    });
    return emojiList
  }

  onFieldChange = (event) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;
    const updateState = {};
    updateState[fieldName] = fieldValue;
    this.setState(updateState);
  }

  clearForm = () => {
    this.setState({
      text: '',
      emoji: '',
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.addCardCallback(this.state);

    this.clearForm();
  }

  render() {
    return (
      <div className="new-card-form">
        <h3 className="new-card-form__header">Add a New Inspiration</h3>
          <form className="new-card-form__form" onSubmit={this.onFormSubmit}>
            <label className="new-card-form__form-label" htmlFor="text">Text: </label>
            <input className="new-card-form__form-textarea" name="text" value={this.state.text}
            onChange={this.onFieldChange} type="text"
            />

            <label className="new-card-form__form-label" htmlFor="emoji">Emoji: </label>
            <select className="new-card-form__form-select" value={this.state.emoji} name='emoji' onChange={this.onFieldChange}>
              {this.renderEmoji()}
            </select>

            <input className="new-card-form__form-button" type="submit" value="Add Card" />
          </form>
      </div>
    )
  }
}

export default NewCardForm;

NewCardForm.propTypes = {
  addCardCallback: PropTypes.func.isRequired,
};
