import { useEffect } from "react";
import { useState } from "react";

export function useTime(interval = 1000) {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, interval);
        return () => {
            clearInterval(timer);
        };
    }, [interval]);

    return time;
}
