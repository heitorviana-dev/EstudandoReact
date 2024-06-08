export const loadMorePosts = (state) => {
    const {posts, allPosts, page, postsPerPage} = state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    
    posts.push(...nextPosts);

    return {posts, nextPage};
}