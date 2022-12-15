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

 //设为首页
function SetHome(obj,url){
     try{
         obj.style.behavior='url(#default#homepage)';
         obj.setHomePage(url);
     }catch(e){
         if(window.netscape){
             try{
                 netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
             }catch(e){
                 alert("抱歉，此操作被浏览器拒绝！\n\n请在浏览器地址栏输入“about:config”并回车然后将[signed.applets.codebase_principal_support]设置为'true'");
             }
         }else{
             alert("抱歉，您所使用的浏览器无法完成此操作。\n\n您需要手动将【"+url+"】设置为首页。");
         }
     }
 }
 //收藏本站
function AddFavorite(title, url) {
     try {
         window.external.addFavorite(url, title);
     }
     catch (e) {
         try {
             window.sidebar.addPanel(title, url, "");
         }
         catch (e) {
             alert("抱歉，您所使用的浏览器无法完成此操作。\n\n加入收藏失败，请使用Ctrl+D进行添加");
         }
     }
 }
 //保存到桌面
function toDesktop(sUrl,sName){
 try {
     var WshShell = new ActiveXObject("WScript.Shell");
     var oUrlLink =          WshShell.CreateShortcut(WshShell.SpecialFolders("Desktop")     + "\\" + sName + ".url");
     oUrlLink.TargetPath = sUrl;
     oUrlLink.Save();
     }  
 catch(e)  {  
           alert("当前IE安全级别不允许操作！");  
 }
 } 