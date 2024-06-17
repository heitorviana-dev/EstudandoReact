export const loadMorePosts = (posts, allPosts, page, postsPerPage) => {
    // const {posts, allPosts, page, postsPerPage} = state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    const morePosts = posts;
    morePosts.push(...nextPosts);

    return {morePosts, nextPage};
}