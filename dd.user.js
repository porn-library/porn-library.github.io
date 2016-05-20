// ==Userscript==
// @name legendsgame_bot
// @description бот для какой-то игры
// @author vk.com/it256
// @include http://xaos.my.mgates.spaces.ru/*
// ==/Userscript==
(function(){
if(location.href.match('xaos.my.mgates.spaces.ru')) {
legendsLink(legendsFindLink("Призрачный Разлом"),(5*1000*60));
legendsLink(legendsFindLink(" Пpизpaчный Paзлoм "),(5*1000*60));

var i=0;
var tx='';
speed=1;
legendsLink(legendsFindLink("Зaвepшить пoeдинки"), 1500);
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

legendsLink(legendsFindLink("Бить прoтивникa"), 500/speed);

if(legendsFindText("Призрачный Разлом")) {
if(legendsFindLink("150%")) {
legendsLink(legendsFindLink("150%"), 500/speed);
}else if(legendsFindLink("100%")) {
legendsLink(legendsFindLink("100%"), 500/speed);
} else if(legendsFindLink("50%")) {
legendsLink(legendsFindLink("50%"), 500/speed);
}
}
if(legendsFindText("Вы занимаете")) {
legendsLink(legendsFindLink("прoтивник"), 500/speed);
}
if(legendsFindText("Арена Смерти")) {
if(legendsFindLink("В атаку")) {
legendsLink(legendsFindLink("В атаку"), 500/speed);
}
if(legendsFindLink("бить прoтивникa")) {
legendsLink(legendsFindLink("бить прoтивникa"), 500/speed);
}


}
if(legendsFindText("Колизей")) {
if(legendsFindLink("Отправиться в Колизей!")) {
legendsLink(legendsFindLink("Отправиться в Колизей!"), 500/speed);
}
if(legendsFindText("Ожидают")) {
legendsLink(legendsFindLink("Обновить..."), 1500);


}
if(legendsFindLink("Атаковать")) {
legendsLink(legendsFindLink("Атаковать"), 500);
}
if(legendsFindText("Бой окончен")) {
legendsLink(legendsFindLink("Вернуться в Колизей"), 1500);
}
}




}
}
)();
