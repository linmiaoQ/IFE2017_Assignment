<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>JS Bin</title>
</head>
<body>

<h3>污染城市列表</h3>
  <ul id="aqi-list">
<!--
    <li>第一名：福州（样例），10</li>
      <li>第二名：福州（样例），10</li> -->
  </ul>

<script type="text/javascript">
  let aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];



 (function () {

  /*
  在注释下方编写代码
  遍历读取aqiData中各个城市的数据
  将空气质量指数大于60的城市显示到aqi-list的列表中
  */

 let aqiIndex = ['一', '二', '三', '四', '五', '六']

 let aqiSorted = aqiData.sort(function(a,b) {
   return b[1] - a[1];
 });

 let aqiList = document.getElementById('aqi-list');

 for (i in aqiSorted) {

   if (aqiSorted[i][1] >60 ){
   aqiList.innerHTML += `<li>第${aqiIndex[i]}名：${aqiSorted[i]}</li>`;
   }

 }

})();


</script>

</body>
</html>
