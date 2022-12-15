//头部新闻滚动
jQuery(".toptit .w1000 .left").slide({ mainCell:".topnews", effect:"topLoop", autoPlay:true});
//首页banner
jQuery(".in_banner").slide({mainCell:".bd ul",titCell:".hd ul",effect:"leftLoop",autoPlay:true,autoPage:true});
//服务领域滚动
jQuery(".xm_box").slide({ mainCell:"ul", effect:"leftLoop",vis:4, autoPlay:true});
//导航菜单
jQuery(".navBara").slide({ type:"menu", titCell:".m", targetCell:".sub",effect:"slideDown",delayTime:300,triggerTime:0});
//新闻切换
jQuery(".in_news").slide({ mainCell:".bd", targetCell:".more a", effect:"leftLoop"});

//自定义百度分享
window._bd_share_config={"common":{"bdSnsKey":{},"bdText":"","bdMini":"1","bdMiniList":["qzone","tsina","weixin","tqq","douban","ty"],"bdPic":"","bdStyle":"0","bdSize":"16"},"share":{}};
with(document)0[(getElementsByTagName('head')[0]||body).appendChild(createElement('script')).src='http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion='+~(-new Date()/36e5)];


$(document).ready(function(){
	// 头部旗下JS
	$("#qxweb").hover(function(){	
		$(this).find("dl").animate({top:"0px"},600);
		$(this).addClass("on");	
			},function(){
			$(this).find("dl").animate({top:"-200px"},600);
			$(this).removeClass("on");	
		});
	// 底部小图标效果
	$(".foot_list li").hover(function(){		
			$(this).find("img").animate({top:"-30px"},200);
	},function(){
		$(this).find("img").animate({top:"0px"},200);
	});
	
	
	//内容页分享
	$("#nrfxff").click(function(){
		$("#nrfxffa").slideDown("fast");
		})
	$("#nrfxff").mouseleave(function(){
		$("#nrfxffa").slideUp("fast");
		})
});