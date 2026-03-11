import React, { useEffect, useState } from "react";
import './App.css'
const ResizeExample: React.FC = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);
    let count=0;
    useEffect(() => {
        function handleResize() 
        {
            setWidth(window.innerWidth);
            console.log("Width change, count: ",++count,", width: ",width);
        }

        // Subscribe
        window.addEventListener("resize", handleResize);

        // Unsubscribe (cleanup)
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return <h2>Window Width: {width}px</h2>;
};

export default ResizeExample;