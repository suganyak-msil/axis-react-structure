import React, { useState, useRef } from 'react';
import { MFilledTextBox } from '../../../atoms/textinputs/mfilledtextbox/MFilledTextBox';

type TextWithSuggestionPropsType = {
    title: string;
    value: string | number;
    inputtype: string;
    suggestion?: string;
    error?: string;
    disabled: boolean;
    onChange: (value: string) => void;
    onEnterPress?: () => void;
};


export const TextWithSuggestion = (props: TextWithSuggestionPropsType) => {


    return (
        <div className="p-12">
            <label className="lbl-form-title mb-8">{props.title}</label>

            <MFilledTextBox className='mftb-primary mb-8'
                value={props.value}
                type={props.inputtype}
                disabled={props.disabled}
                onChange={props.onChange}
                onEnterPress={props.onEnterPress}
            />

            {props.error ?
                <label className="lbl-form-error">{props.error}</label>
                :
                props.suggestion ?
                    <label className="lbl-form-suggestion">{props.suggestion}</label>
                    :
                    ''
            }
        </div>
    )

}