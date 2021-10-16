import React, { Dispatch, SetStateAction} from "react";
import './styles.scss';

export interface ModalProps {
    children: JSX.Element
    active: boolean
    setActive: Dispatch<SetStateAction<boolean>>
}

const Modal = ({active, setActive, children}: ModalProps) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
            <div className={active ? 'modal__content active' : 'modal__content'} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};
export default Modal;