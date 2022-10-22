const NavigationSidebar = (selected) => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i>
     </a>
     <!-- continue rest of list, e.g., Home, Explore, Notifications,  Messages, etc. -->
<!--     Parameterized Sidebar for selected component-->
     <!--     Home-->
     
     <a href="HomeScreen/home.html" 
        class="list-group-item list-group-item-action ${selected == 'home' ? 'active' : ''}">
        <!--        Home symbol-->       
        
        <i class="fa-solid fa-house mx-2"></i>
        <!--        Hide text in size less than xl-->
        <span class="d-none d-xl-inline">Home</span>   
     </a>
     
    <!--        Explore-->
    <a href="./index.html"
        class="list-group-item list-group-item-action ${selected == 'explore' ? 'active' : ''}">
        <!--          Hashtag symbol-->
        <i class="fa-solid fa-hashtag mx-2"></i>
        <!--            Explore Text-->
        <div class="d-none d-xl-inline">Explore</div></a>
    <!--          Notifications-->
    <a class="list-group-item list-group-item-action ${selected == 'notifications' ? 'active' : ''}"
       href="notifications.html">
        <!--          Bell icon-->
        <i class="fa-solid fa-bell mx-2"></i>
        <div class="d-none d-xl-inline">Notifications</div></a>
    <!--          Messages-->
    <a class="list-group-item list-group-item-action ${selected == 'messages' ? 'active' : ''}"
       href="messages.html">
        <!--          Envelope Symbol-->
        <i class="fa-solid fa-envelope mx-2"></i>
        <div class="d-none d-xl-inline">Messages</div></a>
    <!--          Bookmarks-->
    <a class="list-group-item list-group-item-action pb-4 ${selected == 'bookmarks' ? 'active' : ''}"
       href="bookmarks.html">
        <!--          Bookmark Symbol-->
        <i class="fa-solid fa-bookmark mx-2"></i>
        <div class="d-none d-xl-inline">Bookmarks</div></a>
    <!--          Lists-->
    <a href="lists.html"
       class="list-group-item list-group-item-action pb-4 ${selected == 'lists' ? 'active' : ''}">
        <!--          List icon-->
        <i class="fa-solid fa-list mx-2"></i>
        <div class="d-none d-xl-inline">Lists</div></a>
    <a class="list-group-item list-group-item-action pb-4 ${selected == 'profile' ? 'active' : ''}"
       href="profile.html">
        <i class="fa-solid fa-user mx-2"></i>
        <div class="d-none d-xl-inline">Profile</div> </a>
    <a class="list-group-item list-group-item-action pb-4 ${selected == 'more' ? 'active' : ''}"
       href="more.html" >
        <i class="fa-solid fa-ellipsis mx-2"></i>
        <div class="d-none d-xl-inline">More</div> </a>     
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;