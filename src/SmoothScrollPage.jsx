import React from 'react';

// CSS styles (you can extract these into a separate CSS module if you prefer)
const styles = {
    nav: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        backgroundColor: '#333',
        color: '#fff',
        padding: '10px 0',
    },
    link: {
        color: '#fff',
        margin: '0 15px',
        textDecoration: 'none',
        transition: 'color 0.3s ease',
    },
    section: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
    },
    colors: ['#E57373', '#81C784', '#64B5F6', '#FFD54F']
};

const SmoothScrollPage = () => {

    const handleNavClick = (e, sectionId) => {
        e.preventDefault();
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <div>
            <nav style={styles.nav}>
                {['section1', 'section2', 'section3', 'section4'].map((section, index) => (
                    <a
                        key={index}
                        href={`#${section}`}
                        style={styles.link}
                        onClick={(e) => handleNavClick(e, section)}
                    >
                        {`Section ${index + 1}`}
                    </a>
                ))}
            </nav>
            {['section1', 'section2', 'section3', 'section4'].map((section, index) => (
                <div
                    key={index}
                    id={section}
                    style={{ ...styles.section, backgroundColor: styles.colors[index] }}
                >
                    {`Welcome to ${section}`}
                </div>
            ))}
        </div>
    );
}

export default SmoothScrollPage;
