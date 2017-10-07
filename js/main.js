var typed = new Typed('#quote', {
    strings: ['The last one is the best one.','Je pense donc je suis.'],
    typeSpeed: 100,
    backSpeed: 0,
    fadeOut: true,
    loop: true
});

var myDate = new Date(),
    yearData = myDate.getFullYear(); 
$("#year").html(yearData);