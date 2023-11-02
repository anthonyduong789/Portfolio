import React, { useState, useEffect } from 'react';

function ResponsiveComponent() {
    const [width, setWidth] = useState(window.innerWidth);

    // Update the width state whenever the window is resized
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup: remove the event listener when the component is unmounted
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div>
            {width > 500 ? (
                <div>hello world</div>
            ) : (
                <>
                    <div>hello</div>
                    <div>world</div>
                </>
            )}
        </div>
    );
}


/* 
.hello-world {
    display: block;
}

.hello, .world {
    display: none;
}

@media (max-width: 500px) {
    .hello-world {
        display: none;
    }

    .hello, .world {
        display: block;
    }
}


*/

export default ResponsiveComponent;
