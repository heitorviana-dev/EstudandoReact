import { PostCard } from "../PostCard";

export const PostsDiv = (props) => {
    const { posts } = props;

    return(
        <div className="posts">
          {posts.map((post) => {
              return(
                  <PostCard
                    key={post.id}
                    post={post}
                  />
              );
          })}
        </div>
    );
}