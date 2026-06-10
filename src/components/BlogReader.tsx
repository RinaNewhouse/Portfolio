import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import useMetaTags from '../hooks/useMetaTags';

export default function BlogReader() {
  useMetaTags();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((entry) => entry.id === id);
  const [clock, setClock] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const value = new Date().toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/New_York',
      });
      setClock(`${value} EST`);
    };

    updateClock();
    const interval = window.setInterval(updateClock, 30_000);
    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="blog-reader">
      <div className="topband">
        <div>Vol. 02 · Iss. 26</div>
        <div className="center">Rina Newhouse — Portfolio &amp; Field Notes</div>
        <div className="right">{clock} · Baltimore, MD</div>
      </div>

      <header className="blog-reader-bar">
        <button type="button" className="blog-reader-back" onClick={() => navigate('/')}>
          ← Back to portfolio
        </button>
        <div className="blog-reader-label">The Diary · Field Note</div>
      </header>

      {!post ? (
        <div className="blog-reader-article">
          <h1>Post not found</h1>
          <p>This field note may have been moved or removed.</p>
        </div>
      ) : (
        <article className="blog-reader-article">
          <p className="post-date">{post.date}</p>
          <h1>{post.title}</h1>
          <div className="blog-reader-tags">{post.tags.join(' · ')}</div>
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      )}
    </div>
  );
}
