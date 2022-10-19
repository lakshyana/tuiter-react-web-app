
import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js";

const PostSummaryList = () => {
    console.log('Current directory: ' + window.location.pathname);
    return posts.map((post)=> PostSummaryItem(post)).join("");
};

export default PostSummaryList;