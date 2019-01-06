
import SimpleReactValidator from 'simple-react-validator';
import React from 'react';
import { FormattedMessage } from 'react-intl';

let validator = new SimpleReactValidator({
    className: 'text-danger',
    messages: {
        "required": 'required',
        "email": 'wrongEmail',
        "min": 'min',
        "max": 'max',
        "default": 'Validation has failed'
    },
    element: message => <span className="text-danger"> <FormattedMessage id={message} /> </span>
});

export default validator