
import PostItem from "./PostItem.js";
import item from "./posts.js";

const PostList = () => {
    return (`<div 
class='list-group'>${item.map(post => { return (PostItem(post))}).join('')} 
</div>`);
};

export default PostList;



// var mainString = "Hello #today is #Sunday #everywhere";
// r = /#\w*/g; // big letter with word symbols, global search
// function f(x){
//     return '<span class="OrangeColor">'+x+'</span>' // rewrited
// }
// h = mainString.replace(r,f); //replace
// $("#mainString").html(h); //set$('td').filter(function() {
// return $(this).text().indexOf('10,963.89 €') > -1;
// }).css('background-color', 'green');


