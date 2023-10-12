import React, { useState } from 'react';
import { UncontrolledOnboardingFlow } from './UncontrolledOnboardingFlow';


const StepOne = ({goToNext}) => (
    <>
        <h1>Step 1</h1>
        <button onClick={goToNext}>Next</button>
    </>
);
const StepTwo = ({goToNext}) => (
    <>
        <h1>Step 2</h1>
        <button onClick={goToNext}>Next</button>
    </>
);
const StepThree = ({goToNext}) => (
    <>
        <h1>Step 3</h1>
        <button onClick={goToNext}>Next</button>
    </>
);
export const UncontrolledOnboardingFlowWrapper = () => {
    return (
       <UncontrolledOnboardingFlow>
        <StepOne />
        <StepTwo />
        <StepThree />
       </UncontrolledOnboardingFlow>
    );
}