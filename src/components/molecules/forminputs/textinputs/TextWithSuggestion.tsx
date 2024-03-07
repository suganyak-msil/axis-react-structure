import React, { useState, useRef } from 'react';
import { MFilledTextBox } from '../../../atoms/textinputs/mfilledtextbox/MFilledTextBox';
import "../../../../assets/css/molecules/textinput/text-input.css";
type TextWithSuggestionPropsType = {
    title: string;
    value: string | null;
    inputtype: string;
    suggestion?: string;
    error?: string;
    disabled: boolean;
    isError: boolean | null;
    label: string | null;

    onChange: (value: string) => void;
    onEnterPress: () => void | null;
    onFocus: () => void | null;
    onFocusOut: () => void | null;

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
                onEnterPress={props.onEnterPress
                }
                label={props.label}
                isError={props.isError}
                onFocus={props.onFocus}
                onFocusOut={props.onFocusOut}
            />

            {props.error ?
                <label className="lbl-form-error error-txt">{props.error}</label>
                :
                props.suggestion ?
                    <label className="lbl-form-suggestion">{props.suggestion}</label>
                    :
                    ''
            }
        </div>
    )

}