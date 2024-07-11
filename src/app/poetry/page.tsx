'use client';
import { useEffect, useState } from 'react';
import { supabaseClient } from '../../../utils/supabase/client';
import Link from 'next/link';

type Poem = {
  id: string;
  title: string;
  content: string;
  user_id: string;
  username: string | null;
};

const PoetryPage = () => {
  const [poems, setPoems] = useState<Poem[]>([]);
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

  const renderContentWithLineBreaks = (content: string) => {
    return content.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  return (
    <div>
        <center>
      <h3>✨️Muse&apos;s Melody✨️</h3>
      </center>
      <Link href="/poetry/submit" className="block text-primary underline mb-4 hover:text-blue-500 transition-colors duration-300">Submit a poem!</Link>    
      <ul>
        {poems.map((poem) => (
          <li key={poem.id}>
            <h2>{poem.title}</h2>
            <p>{renderContentWithLineBreaks(poem.content)}</p>
            <p><i>by {poem.username}</i></p>
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PoetryPage;
