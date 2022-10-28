
import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/index.js";



function exploreComponent() {
    $('#wd-explore').append(`
<!--       <h2>Explore</h2>-->
  <div class="row mt-3 flex-nowrap">
<!--  -->
   <div class="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-3 col-3">
   <!--<h3>Navigation Sidebar</h3>-->
    ${NavigationSidebar('explore')}
   </div>
   
    ${ExploreComponent()}
    
    <div class="col-xxl-3 col-xl-4 col-lg-4 col-4 d-none d-lg-block col-5">
                ${WhoToFollowList()}
    </div>
            
  </div>
   `);
}
$(exploreComponent);


// <div class="col-10 col-lg-7 col-xl-6 bg-primary text-white">
//  ${ExploreComponent()}
// </div>
// <div class="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 bg-danger text-white">
//    ${WhoToFollowList()