var index =0

function ChangeColor(){
    var colors=["red","yellow","green","purple","orange"];

    document.getElementsByTagName("body")[0].style.backgroundColor=colors[index++];
    if(index> colors.length-1)
        index =0;
}