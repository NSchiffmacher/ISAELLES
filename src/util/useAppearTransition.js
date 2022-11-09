import { useState } from 'react'
import { useInView } from 'react-intersection-observer';

const useAppearTransition = (callback, options = {}) => {
    const threshold = options.threshold | 0;

    const [alreadyEntered, setAlreadyEntered] = useState(false);

    const { ref } = useInView({
        threshold: threshold,
        onChange: (cur_inView, cur_entry) => {
            if (cur_inView && !alreadyEntered) {
                console.log('callback called')
                callback();
                setAlreadyEntered(true);
            }
        }
    });

    return ref;
}

export default useAppearTransition;