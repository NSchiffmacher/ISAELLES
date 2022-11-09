import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const useAppearTransition = (callback) => {
    const { ref, inView } = useInView({});
    const [alreadyEntered, setAlreadyEntered] = useState(false);

    useEffect(() => {
        if (inView && !alreadyEntered) {
            callback();
            setAlreadyEntered(true);
        }
    }, [inView, alreadyEntered, callback]);

    return ref;
}

export default useAppearTransition;