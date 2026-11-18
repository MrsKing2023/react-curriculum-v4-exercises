import { useState } from 'react';
import { getSinglePost } from './api.js';
import './Lesson07Styles.css';

export default function FetchOnClick() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleClick() {
    setIsLoading(true);
    setError('');
    try {
      const data = await getSinglePost(1);
      setPost(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="root">
      <h1 className="heading">Fetch single post on click</h1>
      <button type="button" onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading...' : 'Get post'}
      </button>
      <div className="content">
        {error && <p>Error: {error}</p>}
        {post && (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        )}
        {!post && !error && !isLoading && (
          <>
            TODO: Replace me with fetched data when the <code>Get post</code>{' '}
            button is clicked
          </>
        )}
      </div>
    </div>
  );
}
