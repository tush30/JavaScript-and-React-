//setTime+closures when using loop for settimeout take reference to memory of i which is stored in after loop compleetition i =6
function outer(){
    // to avoid this we can use let instaed var beacuse let will create new memory space for each iteration.
    for(var i=1; i<=5;i++) {
            setTimeout(function(){
                console.log(i);
             }
            , i*1000);
    }
    console.log("hello world! 1");
}
outer();
//output
// hello world!
// 6
// 6
// 6
// 6
// 6

// to avoid this we put setTimeout() inside the another function  as closure
function outerr(){
    for(var i=1; i<=5;i++) {
            function close(i){
                setTimeout(function(){
                    console.log(i);
                 }
                , i*1000);
            }
            close(i);
    }
    console.log("hello world! outer2");
}
outerr();
//op
// hello world! outer2
// 1
// 2
// 3
// 4
// 5
