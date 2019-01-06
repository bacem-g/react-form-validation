import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import Language from './Language';
import { IntlProvider, addLocaleData } from 'react-intl';
import messages_ar from './translations/ar.json';
import messages_en from './translations/en.json';
import locale_ar from 'react-intl/locale-data/ar';
import locale_en from 'react-intl/locale-data/en';
import classNames from 'classnames';
import validator from './validator';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.changeLanguage = this.changeLanguage.bind(this);
    const messages = {
      'ar': messages_ar,
      'en': messages_en
    };

    addLocaleData([...locale_ar, ...locale_en]);

    this.state = {
      email: null,
      password: null,
      locale: 'ar',
      messages: messages_ar
    }

    this.validator = validator;
    this.validator.messages.min = 'newMin';

  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  submitForm() {
    if (this.validator.allValid()) {
      alert('You submitted the form and stuff!');
    } else {
      this.validator.showMessages();
    }
  }

  changeLanguage(locale, messages) {
    this.setState( {...this.state, locale: locale, messages: messages});
  }

  render() {
    let loginClassName = classNames("form-control")
    return (
        <div>
          <Language onChange={this.changeLanguage} />
          <IntlProvider locale={this.state.locale} messages={this.state.messages}>
            <form>
              <h2><FormattedMessage id="signIn" /></h2>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="email"><FormattedMessage id="email" /></label>
                  <input
                    type="email"
                    className={ loginClassName }
                    onChange={event => this.handleUserInput(event)}
                    name="email"
                  />
                  {this.validator.message('emailRquired', this.state.email, 'required|email')}
                </div>
              </div>
              <div className="row">
                <div className="form-group col-sm-4">
                  <label htmlFor="password"><FormattedMessage id="password" /></label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={event => this.handleUserInput(event)}
                    name="password"
                  />
                  {this.validator.message('password', this.state.password, 'required|min:6|max:8')}
                </div>
              </div>
              <button type="button" onClick={this.submitForm()} className="btn btn-primary">
                <FormattedMessage id="signIn" />
              </button>
            </form>
          </IntlProvider>
        </div>
    );
  }
}
