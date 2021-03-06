$(document).ready(function(){
  function PageHeight(){
    
    // 获取内容框的高度
    ch=$('.content').outerHeight();
    
    // 获取侧边栏的高度
    sh=$('.sidebar').outerHeight();
    
    // 如果内容框高度大于侧边栏高度
    if(ch>sh){
      $('.sidebar').css({'height':ch+'px'});
    }
    if(sh>ch){
      $('.content').css({'height':sh+'px'});
    }
  }

  PageHeight();

  // 当页面尺寸调整时触发PageHeight事件
  $(window).resize(function(){
    PageHeight();
  });
  $('#searchModal').on('shown.bs.modal',function(e){
    $('#search').focus(); //通过ID找到对应输入框，让其获得焦点
  });
  
  $(document).scroll(function(){
  	  offset=$('.toc').offset();
      sw=$('.sidebar').width();
      if(offset.top<=451){
         $('.toc>ul').css({'position':''});
      }
      if(offset.top<$(window).scrollTop()){
         $('.toc>ul').css({'position':'fixed','top':'0px','max-width':sw+'px'});
      }
  });
});