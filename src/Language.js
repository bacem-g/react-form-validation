import React, { Component } from 'react';
import messages_ar from './translations/ar.json';
import messages_en from './translations/en.json';

class Language extends Component {

    constructor(props) {
        super(props);
    }

    changeToAr() {
        this.props.onChange('ar', messages_ar);
    }

    changeToEn() {
        this.props.onChange('en', messages_en);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.changeToAr()}>AR</button>
                <button onClick={() => this.changeToEn()}>EN</button>
            </div>
        );
    }
}

export default Language;