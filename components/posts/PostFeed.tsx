import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation

import usePosts from '@/hooks/usePosts';
import PostItem from './PostItem';

interface PostData {
  id: string;
}

interface PostFeedProps {
  userId?: string;
}

const PostFeed: React.FC<PostFeedProps> = ({ userId }) => {
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post: PostData) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

PostFeed.propTypes = {
  userId: PropTypes.string, // userId prop is optional
};

export default PostFeed;
