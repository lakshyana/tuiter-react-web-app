

const PostItem = (item) => {
    return (`
        <!--Post 1 -->
        <!--  Bookmark post content section-->
        <div class="wd-content-section wd-border-bottom">
            <!--      Circular thumbnail image-->
            <img src="${item.author.icon}"
                 class="wd-thumbnail-circular"/>
            <!--      Content text section-->
            <div class="wd-content-text-section">
                <!--        Header row of the content-->
                <div class="wd-content-header-section">
                    <!--          Content author-->
                    <span class="wd-content-author">${item.author.name}
                        <!--                       Content metadata -->
                        <span class="wd-content-metadata">
                        @${item.author.handle} &#183; 
                        ${item.metadata.time} </span>
                        </span>
                    <i class="fa-solid fa-ellipsis wd-regular"></i>
                </div>
                <!--        Content message-->
                <div class="wd-content-message">
                    @${item.post.title} 
                </div>
                <!--        Content image-->
                <img class="wd-content-image"
                     src="${item.post.thumbnail}"/>
                <div class="wd-content-caption-section">
                    <div class="wd-content-caption-title">${item.post.caption} 
                    </div>
                    <div class="wd-content-caption-text">${item.post.message}</div>
                    <div class="wd-content-caption-text">
                        <i class="fa-solid fa-link"></i>
                        ${item.post.source} </div>
                </div>
        
                <!--       Stats -->
                <!--        Stats Section-->
                <div class="wd-stats-section">
                    <!--          comment link-->
                    <a href="#" class="wd-stats-anchor">
                        <!--            Comment color style-->
                        <span class="wd-stats-regular">
        <!--                            comment icon-->
                            <i class="wd-margin-right fa-regular fa-comment"></i>
                                    22
                                </span>
                    </a>
                    <!--          Retweet link-->
                    <a href="#" class="wd-stats-anchor">
                        <!--            Retweet color style-->
                        <span class="wd-stats-regular">
        <!--                            Retweet icon-->
                            <i class="wd-margin-right fa-solid fa-retweet"></i>
                                    9
                                </span>
                    </a>
                    <!--          heart link-->
                    <a href="#" class="wd-stats-anchor">
                        <!--            heart color style-->
                        <span class="wd-stats-selected">
        <!--                            heart icon-->
                            <i class="wd-margin-right fa-solid fa-heart"></i>
                                    37
                                </span>
                    </a>
                    <!--          Upload link-->
                    <a href="#" class="wd-stats-anchor">
                        <!--            Upload color style-->
                        <span class="wd-stats-regular">
        <!--                            upload icon-->
                            <i class="fa fa-upload" aria-hidden="true"></i>
                                </span>
                    </a>
                </div>
        
            </div>
        </div>
        <!--    End of post 1-->


    `);
}
export default PostItem;



// <!--       post 1: -->
// <div class="d-flex justify-content-between p-3 wd-border-gray">
//     <!--  post -->
//     <div class="col-md-8 col-9">
//
//         <div class="mb-1">
//             <!--       image icon-->
//             <img src="${item.author.icon}" class="img-fluid wd-image-circular me-4" />
//             <!-- author-->
//             <span class="fw-bold"> ${item.author.name}
//                 <!--              verified-->
//                 <i class="fa-solid fa-circle-check mx-1"></i>
//                 </span>
//             <!--              time stamp-->
//             <span class="wd-posts-metadata"> &middot ${item.metadata.time} &nbsp</span>
//
//         </div>
//         <!--            post title-->
//         <div class="wd-posts-title">
//             ${item.title}
//         </div>
//     </div>
//     <!--          image-->
//     <div class="my-auto col-md-2 col-3">
//         <img src="${item.image}" class="img-fluid wd-posts-thumbnail" />
//     </div>
//
// </div> <!-- end of post 1-->