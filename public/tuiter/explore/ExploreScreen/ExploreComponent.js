import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
       <!--      Second section start-->
       <div class="col-xxl-7 col-xl-7 col-lg-8 col-md-11 col-sm-10 col-10">
            <!--            Top section: Search-->
            
            <!--      Justify content in between and align the list group items in the center-->
            <div class="d-flex align-items-center my-2">
                <!--      Search bar  -->
                <div class="wd-border-gray rounded-pill d-flex align-items-center py-1 ps-2 col-11 ms-2 me-1 bg-white">
                    <!--            icon-->
                    <i class="fa-solid fa-search mx-2"></i>
                    <!--            text box-->
                    <input class="ms-1 w-50 border-0" type="text"
                           placeholder="Search Twitter"/>
                </div>
                <!--          Explore settings-->
                <a href="explore_settings.html"><i
                        class="fa-solid fa-gear fs-4 p-1"></i></a>
                        
            </div>  
                  
            <!--    end of    search section-->
            
            <!--            nav tabs-->
            <ul class="nav mb-2 nav-tabs">
               <!-- tabs -->
               <!--          for you-->
                <li class="nav-item">
                    <a class="nav-link active" href="for_you.html">For you</a>
                </li>
                <!--          Trending-->
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <!--          News-->
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <!--          Sports-->
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <!--          Entertainment (with size-based hide/unhide)-->
                <li class="nav-item d-none d-sm-none d-md-inline">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>    
           </ul>
           
           <!--        Main body image -->
           <div class="position-relative">
                <img src="img/spacex.jpeg" class="img-fluid w-90 wd-border-y" />
                <span class="text-light fs-2 fw-bold position-absolute start-0 bottom-0 p-2">
                SpaceX's Starship
                 </span>
            </div>
           
<!--            image with overlaid text -->
            ${PostSummaryList()}
            
        </div><!-- End of second section--> 

           
    `);


}
export default ExploreComponent;
