import { useParams } from 'react-router-dom';

const Post = () => {
  // useParams() is used to capture the variable part of the URL
  const { postId } = useParams(); 
  return (
    <div>
      <h2>Blog Post Viewer (Dynamic Routing)</h2>
      <p>Currently viewing post with ID: <strong>{postId}</strong></p>
    </div>
  );
};
export default Post;