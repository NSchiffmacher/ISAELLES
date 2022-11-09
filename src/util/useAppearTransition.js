import { useState } from 'react'
import { useInView } from 'react-intersection-observer';

const useAppearTransition = (callback, options = {}) => {
    const threshold = options.threshold | 0;

    const [alreadyEntered, setAlreadyEntered] = useState(false);

    const { ref } = useInView({
        threshold: threshold,
        onChange: (cur_inView, cur_entry) => {
            console.log(cur_entry.intersectionRatio);
            if (cur_inView && !alreadyEntered) {
                callback();
                setAlreadyEntered(true);
            }
        }
    });

    return ref;
}

export default useAppearTransition;