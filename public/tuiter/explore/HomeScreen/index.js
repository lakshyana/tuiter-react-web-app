
import NavigationSidebar from "../NavigationSidebar/index.js";
// import PostSummaryList from "../PostSummaryList/index.js";
import PostList from "../PostList/index.js";


function homeScreen() {
    $('#wd-home').append(`
<!--       <h2>Explore</h2>-->
  <div class="row mt-3 flex-nowrap">
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar('home')}
    </div>
    
    
    <!--      Second section start-->
    <div class="col-xxl-6 col-xl-7 col-lg-8 col-md-11 col-sm-10 col-10 wd-border-gray">
    ${PostList()}
    </div>
    
    
    
   </div>
 
            
  </div>
   `);
}
$(homeScreen());

// <div className="col-xxl-3 col-xl-4 col-lg-4 col-4 d-none d-lg-block col-5">
//     ${WhoToFollowList()}
// </div>