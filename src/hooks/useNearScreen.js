import React, { useEffect, useRef, useState } from 'react'

export function useNearScreen() {
    const element = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        Promise.resolve(//verify if the browser uses IntersectionObserver
            typeof IntersectionObserver !== 'undefined' ? IntersectionObserver
                : import('intersection-observer')//dinamic import
        )
            .then(() => {
                const observer = new IntersectionObserver((entries) => {
                    const { isIntersecting } = entries[0]
                    if (isIntersecting) {
                        setShow(true)
                        observer.disconnect()
                    }
                });
                observer.observe(element.current);
            })
    }, [element])

    return[show,element]
}
