//获取信息 
var lastid=0; //保存上次取的最后消息id
var colorClassList = ["black","green","purple","red","blue","brown"];
var speakerList = [];
function getMsg(){
  //$.getJSON('msgGet.php', function(json){
  //var arr = json;      //得到对象中的信息的数组
  var arr= [{speaker:"miao",text:"Perhaps you are an average student with average intelligence.You do well enough in school,but you probably think you will never be a top student."},{speaker:'speaker2',text:"This is not necessarily the case,however.You can receive better grades if you want to."},{speaker:"miao",text:"Yes,even students of average intelligence can be top students without additional work"},{speaker:"speaker 3",text:"Plan your time carefully.Make a list of your weekly tasks."},{speaker:"speaker2",text:"Find a good place to study."}];
  for( var i=0;i<arr.length;i++){
   var $oneMessage = $("<div>").addClass("one-msg");
   var speaker = arr[i].speaker;
   var text = arr[i].text;
      var index = speakerList.indexOf(speaker);
      if (index >= 0){
          $oneMessage.addClass(colorClassList[index]);
      }else{
          $oneMessage.addClass(colorClassList[speakerList.length]);
          speakerList.push(speaker);
      }
      var $speakerName = $("<span>").addClass("speaker-name").text(speaker);
      var $speakertext = $("<span>").addClass("speaker-text").text(":"+text);
      $oneMessage.append($speakerName,$speakertext);
   //var str = arr[i].sourceip + "(" +arr[i].mtime + ")对" + arr[i].destip + "说：\r\n    " +arr[i].content + "\r\n";


   $("#chat_conversation").append($oneMessage);
   /*$("#content").text($("#content").text() + str);//信息添加到文本域后面
   //将信息滚动显示到最新 
   $("#content")[0].scrollTop = $("#content")[0].scrollHeight; */
  } 
//});
}
//getMsg();
//每两秒从服务器取一次数据 
setInterval("getMsg()", 2000);