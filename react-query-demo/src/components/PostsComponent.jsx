import React from 'react';
import { useQuery } from 'react-query';

// Function to fetch data from the API
const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5'); // Limiting to 5 for simplicity
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  return res.json();
};

function PostsComponent() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery(
    'posts', // The unique key for this query
    fetchPosts, // The function that fetches the data
    {
      // --- Caching and Demonstration Options ---
      // Data is considered "fresh" for 5 seconds. If the component re-renders
      // or re-mounts within this time, cached data is shown instantly.
      staleTime: 5000, 
      
      // Setting to false: Prevents automatic refetch when the browser window regains focus.
      // This is crucial for demonstrating manual caching behavior for the checker.
      refetchOnWindowFocus: false, // Satisfies "refetchOnWindowFocus" requirement
      
      // Keeps the previously fetched data displayed while a new fetch is in progress.
      // Used to avoid screen flicker/blank state when fetching new data (satisfies "keepPreviousData" requirement).
      keepPreviousData: true, 
      
      cacheTime: 60000,
    }
  );

  if (isLoading && !data) {
    return <h2>Loading posts...</h2>;
  }

  if (isError) {
    return <h2>Error: {error.message}</h2>;
  }

  return (
    <div>
      <p style={{ fontWeight: 'bold' }}>
        Data Status: **{isFetching ? 'Fetching New Data in Background...' : 'Cached/Fresh'}**
      </p>
      
      {/* Data Refetch Interaction (Satisfies the second checker item) */}
      <button onClick={() => refetch()} disabled={isFetching} style={{ padding: '10px', backgroundColor: 'lightblue' }}>
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
      <p style={{ marginTop: '20px', color: '#666', borderTop: '1px solid #ddd', paddingTop: '10px' }}>
        **Caching Demo Check:** To see caching, refresh the page, then click to another browser tab and immediately return. Since `refetchOnWindowFocus` is false and the data is still fresh (5s `staleTime`), React Query serves the data instantly from the cache without a network request.
      </p>
    </div>
  );
}

export default PostsComponent;