import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const useAppearTransition = (callback, options = {}) => {
    const intersectionRatio = options.intersectionRatio | 0;

    const { ref, inView, entry } = useInView({});
    const [alreadyEntered, setAlreadyEntered] = useState(false);

    useEffect(() => {
        if (inView && !alreadyEntered && entry.intersectionRatio >= intersectionRatio) {
            callback();
            setAlreadyEntered(true);
        }
    }, [inView, alreadyEntered, callback, entry, intersectionRatio]);

    return ref;
}

export default useAppearTransition;