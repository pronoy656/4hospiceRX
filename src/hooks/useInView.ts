"use client";

import { useEffect, useState, useRef, RefObject } from 'react';

export function useInView(options: IntersectionObserverInit = {}): [RefObject<HTMLDivElement | null>, boolean] {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                // Once it's in view, we can stop observing if we only want it to animate once
                if (ref.current) observer.unobserve(ref.current);
            }
        }, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [options]);

    return [ref, isInView];
}
