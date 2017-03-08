<!DOCTYPE>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
  </head>
<body>

  <ul id="source">
    <li>北京空气质量：<b>90</b></li>
    <li>上海空气质量：<b>70</b></li>
    <li>天津空气质量：<b>80</b></li>
    <li>广州空气质量：<b>50</b></li>
    <li>深圳空气质量：<b>40</b></li>
    <li>福州空气质量：<b>32</b></li>
    <li>成都空气质量：<b>90</b></li>
  </ul>

  <ul id="resort">
    <!--
    <li>第一名：北京空气质量：<b>90</b></li>
    <li>第二名：北京空气质量：<b>90</b></li>
    <li>第三名：北京空气质量：<b>90</b></li>
     -->

  </ul>

  <button id="sort-btn">排序</button>

<script type="text/javascript">

function getData() {
    let aqiData = document.getElementById('source');
    let data = [];
    for (i=0; i<aqiData.childElementCount; i++) {
     // 选中对象这里出了问题，首先检查这一行代码，如果代码没有问题，可能是分隔符的内容出错了
      let aqiElement =aqiData.children[i].innerText.split('空气质量：');
      let aqiCityName = aqiElement[0];
      let aqiNumber = Number(aqiElement[1]);
      data.push([aqiCityName, aqiNumber]);
    }

  //成对数据放array里，记得在每一对的外头加[]
  /*
  coding here
  */

  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */

  return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */

function sortAqiData(data) {
  data.sort(function(a, b){
   return a[1] - b[1];
  });
  return data;
  // a[1] - b[1] 弄清楚 a[1] - b[1] 什么意思
}

function render(data) {
let aqiRender = document.getElementById("resort");
let chnRank = ["一","二","三","四","五","六","七"];
for (i in data) {
  aqiRender.innerHTML += `<li>第${chnRank[i]}名${data[i][0]}空气质量:<b>${data[i][1]}</b></li>`
}
}

var buttonSorted = document.getElementById('sort-btn');

function btnHandle() {
  let aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
  buttonSorted.disabled = true;
}

function init() {
  buttonSorted.addEventListener("click", btnHandle);
}

init();

</script>
</body>
</html>
