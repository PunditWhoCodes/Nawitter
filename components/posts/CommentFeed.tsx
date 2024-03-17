import React from 'react';

import CommentItem from './CommentItem';

interface Comment {
  id: string;
  // Add other properties if needed
}

interface CommentFeedProps {
  comments?: Comment[];
}

const CommentFeed: React.FC<CommentFeedProps> = ({ comments = [] }) => {
  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
