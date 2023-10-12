import { Modal } from '../layout/Modal';
import {useState} from 'react';
import { ControlledModal } from './ControlledModal';

export const ControlledModalWrapper = () => {

    const [shouldShowModal, setShouldShowModal]=useState(false);

    return (
        <>
            <ControlledModal 
                shouldShow={shouldShowModal}
                onRequestClose={()=>setShouldShowModal(false)}
            >
                <h1>Hello!</h1>
            </ControlledModal>
            <button onClick={()=>setShouldShowModal(!shouldShowModal)}>
                {shouldShowModal ? 'Hide Modal' : 'Show Modal'}
            </button>
        </>
    );
}