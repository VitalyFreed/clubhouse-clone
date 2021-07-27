import React, {useContext, useState} from 'react';
import clsx from 'clsx';

import styles from './EnterNameStep.module.scss';

import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';
import {StepInfo} from '../../StepInfo/StepInfo';
import {MainContext} from "../../../pages";

export const EnterNameStep: React.FC = () => {
    const [inputValue, setInputValue] = useState<string>('');
    const {onNextStep} = useContext(MainContext);

    const nextDisabled = !inputValue;

    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const onClickNextStep = () => {
        onNextStep();
    };

    return (
        <div className={styles.block}>
            <StepInfo
                icon="/static/man.png"
                title="What’s your full name?"
                description="People use real names on Clubhouse :) Thnx!"
            />
            <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
                <div className="mt-30 mb-30">
                    <input
                        value={inputValue}
                        onChange={handleChangeInput}
                        className="field"
                        placeholder="Enter fullname"
                    />
                </div>
                <Button disabled={nextDisabled} onClick={onClickNextStep}>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.svg"/>
                </Button>
            </WhiteBlock>
        </div>
    );
};
