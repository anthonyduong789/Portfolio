import React from "react";
import styles from "./headingAnimation.module.scss";


function HeadingAnimation({header}) {


    const headerMeRef = React.useRef(null);
    const UnderlineRef = React.useRef(null);
    const [headerVisible, setHeaderVisible] = React.useState(false);
    const [underlineVisble, setUnderLineVisible] = React.useState(false);


    let headerClass = styles.header;
    if (headerVisible) {
      headerClass += ` ${styles.slideInLeft}`
    }

    let underlineClass = styles.underline;
    if(underlineVisble){
      underlineClass += ` ${styles.slideInLeft2}`
    }




    React.useEffect(() => {
      const handleIntersection = (entries, set) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
              set(true);
          } else {
              set(false);
          }
        });
      };
  
      const observer = new IntersectionObserver((entries) => handleIntersection(entries, setHeaderVisible));
      const observer2 = new IntersectionObserver((entries) => handleIntersection(entries, setUnderLineVisible));
  
      observer.observe(headerMeRef.current);
      observer2.observe(UnderlineRef.current);
  
      return () => {
        observer.disconnect();
        observer2.disconnect();
      };
    }, []);
  

    return (
        <><h1 className={headerClass} ref={headerMeRef}>{header}</h1><div className={underlineClass} ref={UnderlineRef}></div></>
    );
};


export default HeadingAnimation;