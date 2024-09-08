'use client';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../../utils/supabase/client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

type Poem = {
  id: string;
  title: string;
  content: string;
  user_id: string;
  username: string | null;
};

const PoetryPage = () => {
  const [poems, setPoems] = useState<Poem[]>([]);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const supabase = supabaseClient();

  useEffect(() => {
    const fetchPoems = async () => {
      const { data, error } = await supabase.rpc('random_poems');

      if (error) {
        console.error('Error fetching poems:', error.message);
      } else {
        setPoems(data);
      }
    };

    fetchPoems();
  }, [supabase]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = (content: string) => {
    const htmlTagPattern = /<\/?[a-z][\s\S]*>/i;
    if (htmlTagPattern.test(content)) {
      return <div dangerouslySetInnerHTML={{ __html: content }} />;
    } else {
      return content.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ));
    }
  };

  return (
    <div>
      <center>
        <h3>✨️Muse&apos;s Melody✨️</h3>
      </center>
      <Link href="/poetry/submit" className="block text-primary underline mb-4 hover:text-blue-500 transition-colors duration-300">
        Submit a poem!
      </Link> 
      <p>Refresh to get a new poem!</p>   
      <ul>
        {poems.map((poem) => (
          <li key={poem.id}>
            <h2>{poem.title}</h2>
            {renderContent(poem.content)}
            <p><i>by {poem.username}</i></p>
            <br />
          </li>
        ))}
      </ul>
      {showScrollToTop && (
        <button 
        onClick={handleScrollToTop} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '50%',
          transform: 'translateX(50%)',
          padding: '10px',
          backgroundColor: '#b2a4d4',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 1000
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </button>
      )}
    </div>
  );
};

export default PoetryPage;
