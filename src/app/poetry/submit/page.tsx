'use client';
import { useState, useEffect } from 'react';
import { supabaseClient } from '../../../../utils/supabase/client';
import Link from 'next/link';

const SubmitPoemPage = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [error, setError] = useState('');
    const [userId, setUserId] = useState<string>('');
    const supabase = supabaseClient();
  
    useEffect(() => {
      // Fetch the user ID from Supabase auth
      const fetchUserId = async () => {
        const { data: { session } } = await supabase.auth.getSession();
        if (session) {
          setUserId(session.user.id);
        }
      };
  
      fetchUserId();
    }, [supabase]);
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!userId) {
        setError('User is not logged in');
        return;
      }
  
      const { error } = await supabase.from('poems').insert([{ title, content, user_id: userId }]);
  
      if (error) {
        setError('Failed to submit poem. Please try again.');
      } else {
        setTitle('');
        setContent('');
        setError('');
        alert('Poem submitted successfully!');
      }
    };
  
    return (
      <div>
        <center>
        <h3>Submit a Poem</h3>
        </center>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title</label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="content">Content</label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={10}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <Link href="/poetry" className="block text-primary underline mb-4 hover:text-blue-500 transition-colors duration-300">Back to Poems</Link>
      </div>
    );
  };
  
  export default SubmitPoemPage;