

const PostSummaryItem = (post) => {
    return (`
    <!--       post 1: -->
    <div class="d-flex justify-content-between p-3">
        <!--  post -->
        <div class="col-md-8 col-9">
            <!--       meta data-->
            <div class="wd-posts-metadata mb-1"> ${post.topic} </div>
            <!--            author-->
            <div class="fw-bold wd-posts-author mb-1">
                ${post.userName}
                <!--              verified-->
                <i class="fa-solid fa-circle-check mx-1"></i>
                <!--              time stamp-->
                <span class="wd-posts-metadata"> &middot ${post.time} &nbsp</span>
            </div>
            <!--            post title-->
            <div class="wd-posts-title">
                ${post.title}
            </div>
        </div>
        <!--          image-->
        <div class="my-auto col-md-2 col-3">
            <img src="${post.image}" class="img-fluid wd-posts-thumbnail" />
        </div>

    </div> <!-- end of post 1-->
    
    `);
}

export default PostSummaryItem;