import { useParams } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  return <div className="p-4">This is post with ID: <strong>{id}</strong></div>;
}
