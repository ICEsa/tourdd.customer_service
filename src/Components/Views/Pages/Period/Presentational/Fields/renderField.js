import React from 'react';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const renderField = ({InputGroupAddon,InputGroup,Button, input, label, type, textarea, autoFocus, option, meta: { touched, error } }) => {

    const textareaType = <Input {...input}
        type="textarea"
        placeholder={label} />;

    const inputType = <Input
        {...input}
        placeholder={label}
        type={type} autoFocus={autoFocus}
        invalid={touched && error ? true : false} />;

    if (type === "select") {
        return (
            <FormGroup>
                <Label for={input.id}>{label}</Label>
                <Label for={input.id}>{label}</Label>
                <Input  {...input} multiple>
                    {option && option.map((value, index) => {
                        return <option key={value.id} value={value.id}>{value.label}</option>
                    })}
                </Input>
                {touched && error && <FormFeedback tooltip>{error}</FormFeedback>}
            </FormGroup>
        )
    } else if (type === "number") {
        return (
            <FormGroup>
                <Label for={input.id}>{label}</Label>
                    <Input
                    {...input}
                    
                    type={type} 
                    autoFocus={autoFocus}
                    invalid={touched && error ? true : false} />
                    {touched && error && <FormFeedback tooltip>{error}</FormFeedback>}
            </FormGroup>
        )
    } else {
        return (
            <FormGroup>
                <Label for={input.id}>{label}</Label>
                {textarea ? textareaType : inputType}
                {touched && error && <FormFeedback tooltip>{error}</FormFeedback>}
            </FormGroup>
        )
    }

}

export default renderField;