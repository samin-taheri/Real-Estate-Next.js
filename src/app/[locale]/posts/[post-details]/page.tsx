import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import { PostProps } from '@/types'; 

const PostDetails: React.FC<PostProps> = ({ post }) => {
  const router = useRouter();
  const { id } = router.query; 

  return (
    <div>
      <h1>Post Detail Page</h1>
      <p>Post ID: {id}</p>
    </div>
  );
};

export default PostDetails;
