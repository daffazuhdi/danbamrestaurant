var prev = document.getElementById('previous');
var next = document.getElementById('next');

var arr = ["img/bannermenu1.png", "img/bannermenu2.png"];

var i = 0;

next.addEventListener('click', function(){
    i++;
    if(i > arr.length - 1){
        i = 0;
    }
    document.getElementById('image').src = arr[i];
})

prev.addEventListener('click', function(){
    i--;
    if(i < 0){
        i = arr.length - 1;
    }
    document.getElementById('image').src = arr[i];
})