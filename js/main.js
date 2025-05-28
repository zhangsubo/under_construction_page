// created by 20250523
var site_name = '';
var icp = '';
var email = '';
// 获取当前访问的域名
var currentDomain = window.location.hostname;

// 加载配置文件
fetch('/config.json')
    .then(response => response.json())
    .then(config => {
        // 查找匹配的域名配置
        const domainConfig = config.domains.find(d => d.domain === currentDomain);
        if (domainConfig) {
            site_name = domainConfig.domain;
            icp = domainConfig.icp;
            email = domainConfig.email;
            updateSiteInfo();
        }
    })
    .catch(error => console.error('Error loading config:', error));

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

// 更新网站信息的函数
function updateSiteInfo() {
    if (site_name.length != 0) {
        $('.site_name').html(site_name);
        document.title = site_name + '建设中';
        $('#site_url').attr('href', 'http://' + site_name);
    }
    if (icp.length != 0) {
        $('#icp').attr("href","https://beian.miit.gov.cn/");
        $('#icp').attr("target","_blank");
        $('#icp').attr("content","nofollow");
        $('#icp').html(icp);
    }
    if (email.length != 0) {
        $('#email').html("违法和不良信息举报邮箱：" + email);
    }
}


