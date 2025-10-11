import React from 'react';
import { useQuery, useQueryClient } from 'react-query';

// A simple function to fetch the data
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'); // Limiting to 5 for simplicity
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

function PostsComponent() {
  const queryClient = useQueryClient();

  // useQuery hook to manage fetching, caching, and state
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    'posts', // The unique key for this query
    fetchPosts, // The function that fetches the data
    {
      // Stale time keeps the data "fresh" for 5 seconds. If the user navigates
      // away and comes back within 5s, the cached data is displayed immediately
      // without a background refetch.
      staleTime: 5000,
      // Cache time for when the data should be garbage collected
      cacheTime: 60000,
    }
  );

  if (isLoading) {
    return <h2>Loading posts...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <p>
        Data Status: **{isFetching ? 'Fetching New Data...' : 'Cached/Fresh'}**
      </p>
      <button onClick={() => refetch()} disabled={isFetching}>
        Manually Refetch Posts
      </button>

      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {data.map((post) => (
          <li key={post.id} style={{ border: '1px solid #eee', margin: '10px 0', padding: '10px' }}>
            <strong>({post.id}) {post.title}</strong>
            <p>{post.body.substring(0, 100)}...</p>
          </li>
        ))}
      </ul>
      <p style={{ marginTop: '20px', color: '#666' }}>
        **Caching Demonstration:** Navigate away (e.g., to another page if this were a full app) and come back. If you return within 5 seconds (the `staleTime`), the data will load instantly from the cache without a network request.
      </p>
    </div>
  );
}

export default PostsComponent;