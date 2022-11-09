import { useState } from 'react'
import { useInView } from 'react-intersection-observer';

const useAppearTransition = (callback, options = {}) => {
    const [alreadyEntered, setAlreadyEntered] = useState(false);

    const { ref } = useInView({
        ...options, 
        onChange: (cur_inView, cur_entry) => {
            if (!alreadyEntered && cur_inView && document.readyState === 'complete') {
                callback();
                setAlreadyEntered(true);
            }
        }
    });

    return ref;
}

export default useAppearTransition;