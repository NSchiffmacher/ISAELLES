import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const useAppearTransition = (callback, options = {}) => {
    const [alreadyEntered, setAlreadyEntered] = useState(false);

    const { inView, ref } = useInView({
        ...options, 
    });

    useEffect(() => {
        console.log('.')
        // if (!alreadyEntered && inView && document.readyState === 'complete') {
        if (!alreadyEntered && inView   ) {
            callback();
            setAlreadyEntered(true);
        }
    }, [alreadyEntered, inView, callback, ref])

    return ref;
}

export default useAppearTransition;