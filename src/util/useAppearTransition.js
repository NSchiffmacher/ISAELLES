import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';

const useAppearTransition = (callback, options = {}) => {
    const [alreadyEntered, setAlreadyEntered] = useState(false);
    const wait_for_load = options.wait_for_load ?? false;

    const { inView, ref } = useInView({
        ...options, 
    });

    useEffect(() => {
        let run_animation = !alreadyEntered && inView;
        let set_interal_id = null;

        function executeCallback(){
            callback();
            setAlreadyEntered(true);
        }
        function isPossible(){
            return (!(wait_for_load && !(document.readyState === 'complete')));
        }
        
        // console.log(!alreadyEntered && inView, !(wait_for_load && !(document.readyState === 'complete')))
        // if (!alreadyEntered && inView && document.readyState === 'complete') {
        // console.log('hey', run_animation, isPossible())
        if (run_animation) {
            if (isPossible()) {
                executeCallback();
            } else if (set_interal_id == null) {
                // console.log("set interval")
                set_interal_id = setInterval(() => {
                    if (isPossible){
                        executeCallback();
                        clearInterval(set_interal_id);
                        // console.log('clear  ')
                    } else {
                        // console.log('wait')
                    }   
                }, 100);
            }
            // console.log('done')
        }
    }, [alreadyEntered, inView, callback, ref, wait_for_load])

    return ref;
}

export default useAppearTransition;