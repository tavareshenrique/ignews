import { Post } from '../../../@types/pages/posts';

export interface IPostsProps {
  posts: Post[];
}

export interface IPostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}
