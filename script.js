var subjects=['🍎','🍌','🍑','🍐','🍒','🍇','🍋','🍍','🍊','🍉','🥝'];
var preps=['at','on','inside','beside','under','behind','in','outside','down','up','opposite'];
var mods=['wet','dry','listening','watching','looking','cool','pretty','rough','sketchy','smooth','smelly'];
var objects=['juice','blood','source','skin','leaf','seed','candy','knife','animals','trashcan','land'];
var punctuations=['_(:з」∠)_','(*^▽^*)','(O_o)??','(╯▽╰)'，'(⊙o⊙)…','ε=(´ο｀*)))','(〃＞皿＜)','',':('];



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
}, 4000);

wordGenerator();

