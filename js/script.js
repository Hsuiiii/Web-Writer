

var subjects=['Apple🍎','Banana🍌','Peach🍑','Pear🍐','Cherry🍒','🍇','🍋','🍍','🍊','🍉','🥝'];
var preps=['from','on','inside','beside','under','behind','in','outside','down','up','opposite'];
var mods=['soft','cutting','eating','sleeping','tasty','colorful','ugly','beautiful','lovely','smoothy','pretty'];
var objects=['juice','blood','source','skin','leaf','seed','candy','knife','animals','trashcan','land'];
var punctuations=['..._(:з」∠)_','!(*^▽^*)','(O_o)??','.(╯▽╰)'，'(⊙o⊙)…','ε=(´ο｀*)))','!!!(〃＞皿＜)',':)',':('];



function wordGenerator(){
    var subject = subjects[Math.floor(Math.random()* subjects.length)];
    var prep = preps[Math.floor(Math.random()* preps.length)];
    var mod = mods[Math.floor(Math.random()* mods.length)];
    var object = objects[Math.floor(Math.random()* objects.length)];
    var punctuation = punctuations[Math.floor(Math.random()* punctuations.length)];
    // console.log();
    var sentence=subject+' '+prep+' '+mod+' '+object+punctuation;
    document.getElementById('sentence').innerHTML = sentence;
    document.title = sentence;
    
}

window.setInterval(function() {
    wordGenerator();
}, 2000);

wordGenerator();

