import React, {useState} from 'react';

import {WelcomeStep} from "../components/steps/WelcomeStep/WelcomeStep";
import {EnterNameStep} from "../components/steps/EnterNameStep/EnterNameStep";
import {GitHubStep} from "../components/steps/GitHubStep/GitHubStep";
import {ChooseAvatarStep} from "../components/steps/ChooseAvatarStep/ChooseAvatarStep";
import {EnterPhoneStep} from "../components/steps/EnterPhoneStep/EnterPhoneStep";
import {EnterCodeStep} from "../components/steps/EnterCodeStep/EnterCodeStep";

const stepsComponents = {
    0: WelcomeStep,
    1: EnterNameStep,
    2: GitHubStep,
    3: ChooseAvatarStep,
    4: EnterPhoneStep,
    5: EnterCodeStep
};

type MainContextProps = {
    onNextStep: () => void;
    step: number;
};

export const MainContext = React.createContext<MainContextProps>({} as MainContextProps);

export default function Home() {
    const [step, setStep] = useState<number>(0);
    const Step = stepsComponents[step];

    const onNextStep = () => {
        setStep(prev => prev + 1);
    };

    return (
        <MainContext.Provider value={{step, onNextStep}}>
            <Step/>
        </MainContext.Provider>
    )
}
