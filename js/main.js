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


// 通过配置决定前端显示内容

var site_name = '';
var icp = '';

if (site_name.length !=0) {
    $('.site_name').html(site_name);
    $('.site_name').attr("href","//"+site_name);
    document.title = site_name+'建设中';
}
if (icp.length != 0) {
    $('#icp').attr("href","https://beian.miit.gov.cn/");
    $('#icp').attr("target","_blank");
    $('#icp').attr("content","nofollow");
    $('#icp').html(icp);
}


