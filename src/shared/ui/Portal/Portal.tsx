import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
   children: ReactNode;
   element?: HTMLElement;
}

const Portal = (props: PortalProps) => {
    const {
        children,
        element = document.body,
    } = props;

    if (!element) {
        return null; // Или другое поведение по вашему усмотрению
    }

    return createPortal(children, element);
};

export default Portal;
