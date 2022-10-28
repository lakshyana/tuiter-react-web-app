

const PostItem = (item) => {
    return (`
        <!--Post 1 -->
        <!--  Bookmark post content section-->
        
        <div class="d-flex justify-content-between p-3 border border-secondary">
        
<!--        &lt;!&ndash;  post &ndash;&gt;-->
<!--        <div class="col-md-9 col-9 wd-border-gray">-->
        
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
                    ${item.post.title}
                </div>
                
                <!--        Content image-->
                <img class="img-fluid border border-secondary wd-b-top-r"
                     src="${item.post.thumbnail}"/>
                <div class="wd-content-caption-section border border-secondary border-top-0 wd-b-bottom-r">
                    <div class="wd-content-caption-title">${item.post.caption} 
                    </div>
                    <div class="wd-content-caption-text">${item.post.message}</div>
                    <div class="wd-content-caption-text">
                        <i class="fa-solid fa-link"></i>
                        ${item.post.source} </div>
                </div>
        
                <!--       Stats -->
                <!--        Stats Section-->
                <div class="wd-stats-section d-flex justify-content-between me-5">
                    <!--          comment link-->
                    <a href="#" class="text-decoration-none">
                        <!--            Comment color style-->
                        <span class="text-secondary small">
        <!--                            comment icon-->
                            <i class="wd-margin-right fa-regular fa-comment me-2"></i>
                                    ${item.metadata.comments}
                                </span>
                    </a>
                    
                    <!--          Retweet link-->
                    <a href="#" class="text-decoration-none">
                        <!--            Retweet color style-->
                        <span class="text-secondary small">
        <!--                            Retweet icon-->
                            <i class="wd-margin-right fa-solid fa-retweet"></i>
                                    ${item.metadata.retuits}
                                </span>
                    </a>
                    
                    <!--          heart link-->
                    <a href="#" class="text-decoration-none">
                        <!--            heart color style-->
                        <span class="text-secondary small">
        <!--                            heart icon-->
                            <i class="wd-margin-right fa-solid fa-heart"></i>
                                    ${item.metadata.likes}
                            </span>
                    </a>
                    <!--          Upload link-->
                    <a href="#" class="text-decoration-none">
                        <!--            Upload color style-->
                        <span class="text-secondary small">
        <!--                            upload icon-->
                            <i class="fa fa-upload" aria-hidden="true"></i>
                                </span>
                    </a>
                </div>
        
            </div>
            
<!--            </div>-->
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