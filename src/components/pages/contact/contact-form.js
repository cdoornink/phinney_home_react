import React, { Component } from "react";
import validator from "validator";

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: "", valid: false },
      email: { value: "", valid: true },
      subject: { value: "", valid: true },
      message: { value: "", valid: false }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        value: event.target.value
      }
    });

    const { email, message, name, subject } = this.state;

    /**
     * This is to make sure that once the form is filled out, the user can't go invalidate a field
     * and click enter before the field is blurred and validation takes place.
     */
    if (
      (email.valid && message.valid && name.valid && subject.valid) ||
      !this.state[event.target.name].valid
    ) {
      this.validateField(event);
    }
  }

  validateField(event) {
    let valid = true;
    const { name, value } = event.target;

    if (name === "email") {
      valid = validator.isEmail(value);
    } else {
      valid = !validator.isEmpty(value);
    }

    this.setState({
      [name]: {
        ...this.state[name],
        value,
        valid
      }
    });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.name.value);
    event.preventDefault();
  }

  render() {
    const { name, email, subject, message } = this.state;
    const validForm = email.valid && message.valid && name.valid && subject.valid;

    return (
      <form className="offset-content -large row" onSubmit={this.handleSubmit}>
        <h2 className="description-header">How can we help?</h2>
        <h3 className="description-subheader">
          Fill out the contact form below if you have any questions or comments,
          or if you are interested in a free consultation.
        </h3>
        <div className="row offset-content -small">
          <input
            name="name"
            value={name.value}
            onChange={this.handleChange}
            onBlur={this.validateField}
            ref={input => {
              this.nameInput = input;
            }}
            type="text"
            placeholder="NAME *"
          />
        </div>
        <div className="row">
          <input
            className={!email.valid ? "invalid" : ""}
            name="email"
            value={email.value}
            onChange={this.handleChange}
            onBlur={this.validateField}
            type="text"
            placeholder="EMAIL *"
          />
          {!email.valid && (
            <div className="error">This needs to be a valid email address</div>
          )}
        </div>
        <div className="row">
          <input
            className={!subject.valid ? "invalid" : ""}
            name="subject"
            value={subject.value}
            onChange={this.handleChange}
            onBlur={this.validateField}
            type="text"
            placeholder="SUBJECT *"
          />
          {!subject.valid && (
            <div className="error">A subject is required</div>
          )}
        </div>
        <div className="row">
          <textarea
            className="-medium"
            name="message"
            value={message.value}
            onChange={this.handleChange}
            onBlur={this.validateField}
            placeholder="MESSAGE *"
          />
        </div>
        <div className="row">
          <button className="submit" type="submit" disabled={!validForm}>
            Submit
          </button>
        </div>
      </form>
    );
  }
}
