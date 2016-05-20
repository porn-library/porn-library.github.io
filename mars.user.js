// ==Userscript==
// @name legendsgame_bot
// @description бот для какой-то игры
// @author vk.com/it256
// @include http://marsgame.spaces-games.com/*
// ==/Userscript==
(function(){
if(location.href.match('marsgame.spaces-games.com')) {
var i=0;
var tx='';
speed=1;
/*
Поиск текста на странице
пример: legendsFindText("Победа");
*/
function legendsFindText(tx) {if(document.body.innerHTML.match(tx)) {return true;} else {return false;}}


/*
Поиск ссылок на странице
пример: legendsFindLink("Бой");
*/
function legendsFindLink(tx) {l=0;for(i=0;i<document.links.length;i++){if(document.links[i].text.match(tx)) {l=document.links[i].href; break;}} if(l!=0) {return l;} else {return false;}}

/*
Переход по ссылке с интервалом

*/
function legendsLink(tx, sec) {if(tx!="") {setTimeout(function(){location.href=tx;}, sec);}}

/*
Проверка значения хранилища
*/
function legendsIsStorage(name, tx) {if(localStorage.getItem(name)==tx) { return true; } else { return false;}}

/*
Назначение для хранилища
*/
function legendsSet(name, tx) {if(localStorage.setItem(name, tx)) { return true; } else { return false;}}
function legendsI(name, tx) {document.getElementById(name).innerHTML=tx;}

function legendsClick(tx, sec) {for(var q=0;q<document.forms.length;q++){for(var y=0;y<document.forms[q].elements.length;y++){if (document.forms[q].elements[y].value.match(tx)){var go = document.forms[q].elements[y];setTimeout(function(){go.click();}, sec);}}}}
function legends(a, z) {var num=(Math.floor(Math.random() * (a - z)) + z); return num;}



legendsLink(legendsFindLink('Автопрокачка'),15000);
legendsLink(legendsFindLink('Сбросить бизнесы и получить'),(5*1000*60));
if(legendsFindText('Космический мусор')) legendsLink(legendsFindLink('Купить'),1000);














}
}
)();
