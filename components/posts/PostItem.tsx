import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart, AiOutlineMessage } from 'react-icons/ai';

interface PostItemProps {
  data: {
    id: string;
    body: string;
    createdAt: Date;
    user: {
      id: string;
      name: string;
      username: string;
    };
    comments?: unknown[]; // Adjust type as needed
    likedIds?: unknown[]; // Adjust type as needed
  };
}

const PostItem: React.FC<PostItemProps> = ({ data }) => {
  const [hasLiked, setHasLiked] = useState<boolean>(false); // Assuming you initialize hasLiked as false

  const goToUser = () => {
    // Implement your logic here
  };

  const goToPost = () => {
    // Implement your logic here
  };

  const onLike = () => {
    setHasLiked((prev) => !prev); // Toggle hasLiked state
    // Implement your like logic here
  };

  const LikeIcon = hasLiked ? AiFillHeart : AiOutlineHeart; // Determine which icon to display based on hasLiked state

  const createdAt = data.createdAt ? new Date(data.createdAt).toISOString() : null;



  return (
    <div
      onClick={goToPost}
      className="
        border-b-[1px]
        border-neutral-800
        p-5
        cursor-pointer
        hover:bg-neutral-900
        transition
      ">
      <div className="flex flex-row items-start gap-3">
        {/* Avatar Component */}
        <div>
          <div className="flex flex-row items-center gap-2">
            {/* User Name */}
            <p
              onClick={goToUser}
              className="
                text-white
                font-semibold
                cursor-pointer
                hover:underline
              ">
              {data.user.name}
            </p>
            {/* User Username */}
            <span
              onClick={goToUser}
              className="
                text-neutral-500
                cursor-pointer
                hover:underline
                hidden
                md:block
              ">
              @{data.user.username}
            </span>
            {/* Created At */}
            <span className="text-neutral-500 text-sm">
              {createdAt}
            </span>
          </div>
          {/* Post Body */}
          <div className="text-white mt-1">
            {data.body}
          </div>
          {/* Actions */}
          <div className="flex flex-row items-center mt-3 gap-10">
            {/* Comments */}
            <div
              className="
                flex
                flex-row
                items-center
                text-neutral-500
                gap-2
                cursor-pointer
                transition
                hover:text-sky-500
              ">
              <AiOutlineMessage size={20} />
              <p>
                {data.comments?.length || 0}
              </p>
            </div>
            {/* Likes */}
            <div
              onClick={onLike}
              className="
                flex
                flex-row
                items-center
                text-neutral-500
                gap-2
                cursor-pointer
                transition
                hover:text-red-500
              ">
              <LikeIcon color={hasLiked ? 'red' : ''} size={20} />
              <p>
                {data.likedIds?.length || 0}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
