import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import Post from '../interfaces/Post';

interface PostsContextProps {
  posts: Post[];
}

const PostsContext = createContext<PostsContextProps>({
  posts: []
});

export const usePosts = () => useContext(PostsContext);

export const PostsProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('/assets/json/posts.json')
      .then(response => response.json())
      .then((data: Post[]) => setPosts(data));
  }, []);

  return (
    <PostsContext.Provider value={{ posts }}>
      {children}
    </PostsContext.Provider>
  );
};
