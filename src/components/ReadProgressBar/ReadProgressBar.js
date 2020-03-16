import React, { useEffect, useState } from 'react';

const ReadProgressBar = props => {
    const [progress, setProgress] = useState(0);

    const trackScrollEvent = () => {
        const { top, height } = props.attachTo.current.getBoundingClientRect();
        const progress = (top / (height - window.innerHeight)) * 100;
        const translateValue = progress < -100 ? 0 : -100 - progress;
        setProgress(translateValue < -100 ? -100 : top > 0 ? 0 : translateValue);
    };

    useEffect(() => {
        if (props.attachTo && props.attachTo.current && props.attachTo.current.getBoundingClientRect()) {
            window.addEventListener('scroll', trackScrollEvent);
        }
        return () => {
            window.removeEventListener('scroll', trackScrollEvent);
        };
    });

    return (
        <div className="progressBarContainer">
            <div className="progressBar" style={{ transform: `translateX(${progress}%)`, height: progress === -100 || progress === 0 ? 0 : 5 }} />
        </div>
    );
}

export default ReadProgressBar;