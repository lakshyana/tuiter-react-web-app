import React from "react";

// import postsArray from './posts.json'; // replace getting tuits from a file
import {useSelector} from "react-redux"; // to getting tuits from the store

import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.tuits) // get tuits from the state in the store
    return(
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostSummaryItem
                        key={post._id}
                        post={post}/> )
            }
        </ul>
    );
};
export default PostSummaryList;