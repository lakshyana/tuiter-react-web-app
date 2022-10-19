

const WhoToFollowListItem = (item) => {
    return (`
<!--           &lt;!&ndash;        list group&ndash;&gt;-->
<!--            <ul class="list-group">-->
<!--                &lt;!&ndash;          title &ndash;&gt;-->
<!--                <div class="list-group-item"> <span class="fw-bold">Who to follow</span></div>-->

        <!--         item  -->
        <div class="list-group-item flex-grow-1">
            <!--            division for image & text content and the follow button-->
            <div class="d-flex align-items-center">
                <!--                image-->
                <img src="${item.avatarIcon}" class="img-fluid me-2 wd-image-circular"/>
                <!--                image and text content-->
                <div class="flex-grow-1">
                    <!--                title-->
                    <div class="mb-1">
                        ${item.userName}<i class="mx-1 fa-solid fa-circle-check"></i>
                    </div>
                    <!--                meta data-->
                    @${item.handle}
                </div>
                <!--  Button-->
                <button type="button" class="btn btn-primary rounded-pill">
                    Follow
                </button>
            </div>
        </div><!--end of item -->

<!--                            end of list group-->
<!--            </ul>-->
`);
};

export default WhoToFollowListItem;
