import React from 'react';
import MaskedInput from 'react-text-mask';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={ref => {
                inputRef(ref ? ref.inputElement : null);
            }}
            mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}

TextMaskCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
};

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={values => {
                onChange({
                    target: {
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            prefix="$"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export const InputMask = ({
    classes
}) => {
    state = {
        textmask: '+52'
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    const { textmask } = this.state;

    return (
        <div className={classes.container}>
            <FormControl className={classes.formControl}>
                <InputLabel htmlFor="formatted-text-mask-input">react-text-mask</InputLabel>
                <Input
                    value={textmask}
                    onChange={this.handleChange('textmask')}
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                />
            </FormControl>
        </div>
    );
}