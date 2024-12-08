// YelpReview.js
import { useEffect, useRef } from 'react';

const YelpReview = ({ html }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.innerHTML = html;
      const script = containerRef.current.querySelector('script');
      if (script) {
        const newScript = document.createElement('script');
        newScript.src = script.src;
        newScript.async = true;
        document.body.appendChild(newScript);
      }
    }
  }, [html]);

  return <div ref={containerRef} />;
};

export default YelpReview;