"use client"
import React, { useEffect } from 'react';

const InstagramEmbed = ({ embedHtml }: { embedHtml: string }) => {
  useEffect(() => {
    // Ensure Instagram's embed.js script is loaded
    const script = document.createElement('script');
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div dangerouslySetInnerHTML={{ __html: embedHtml }} />;
};

export default InstagramEmbed;
