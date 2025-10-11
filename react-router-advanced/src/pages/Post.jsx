import { useParams } from 'react-router-dom';

const Post = () => {
  const { postId } = useParams(); // Retrieves the value from the URL parameter
  return (
    <div>
      <h2>Blog Post Viewer</h2>
      <p>Currently viewing post with ID: **{postId}**</p>
      <p>This demonstrates dynamic routing.</p>
    </div>
  );
};
export default Post;