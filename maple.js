var TotalMeso=0
var CanTradeMesoStone=180
var TradingMesoStone=0


var Easy={
    Zaqqum: "20,0000",
    Cygnus: "9,112,500",
    Horntail: "882,000",
    VonLeon: "1,058,000",
    Magnus: "722,000",
    Papulatus: "684,500",
    DreamWomen: "35,112,500",
    ARKarium: "1,152,000"
}

var Normal={
    Zaqqum: "612,500",
    Horntail: "1,012,500",
    VacuumCleaner: "1,250,000", //카웅
    PinkBean: "1,404,500",
    Papulatus: "2,664,500",
    NormalRootAbyss: "968,000", //4노말루타
    Cygnus: "14,450,000",
    Dusk: "49,612,500",
    Hilla: "800,000",
    VonLeon: "1,458,000",
    Magnus: "25,920,000",
    ARKarium: "25,920,000",
    ElectricLineMan: "32,512,500",
    Demian: "33,800,000",
    DreamWomen: "40,612,500",
    SpiderFucker: "46,512,500",
    Djunkel: "52,812,500"

}
var Hard={
    Pierre: "16,200,000",
    HalfHalf: "16,200,000",
    BloodyQueen: "16,200,000",
    Vellum: "21,012,500",
    Zaqqum: "16,200,000",
    Horntail: "1,352,000",
    PinkBean: "12,800,000",
    Papulatus: "26,450,000",
    Dusk: "92,450,000",
    Hilla: "11,250,000",
    VonLeon: "2,450,000",
    Magnus: "19,012,500",
    ElectricLineMan: "74,112,500",
    Demian: "70,312,500",
    DreamWomen: "80,000,000",
    SpiderFucker: "88,200,000",
    Djunkel: "96,800,000",
    StrongHilla: "110,450,000",
    BlackMage: "500,000,000",
    WingWomen: "151,250,000" //세렌
}
function RevString(str){
    var RevStr=str.split("").reverse().join("");
    return RevStr
}
function ParseNum(str){
    var regex= /[^0-9]/g
    Fstr=str.replace(regex,"");
    num=parseInt(Fstr);
    return num;
}
function AddSymbol(str){
    var RevStr=RevString(str)
    var regex= /(.{3})/g
    RevStr=RevStr.replace(regex,"$1,")
    RevStr=RevString(RevStr)
    if(RevStr[0]==","){
        RevStr=RevStr.substr(1)
    }
    return RevStr
}

function AddResult(str){
const TradingMesoStoneContainer=document.querySelector(".TradingMesoStone")
const MaxMesoStone=document.querySelector(".CanTradeMesoStone")
    MaxMesoStone.innerText=`판매 가능한 결정석 : ${CanTradeMesoStone-=1} 개`;
    TradingMesoStoneContainer.innerText = `선택된 결정석 : ${TradingMesoStone+=1} 개`;
    WriteMeso(str,ChkReboot());
}
function WriteMeso(str,times){
    var num=ParseNum(str);
    TotalMeso=TotalMeso+num
    displayMeso(times);
}
function ChkReboot(){
    var a=document.querySelector(".Reboot")
    var b=a.querySelector('input[name="server"]').checked
    if(b==true)
        return 5;
    else
        return 1;
    
}
function displayMeso(times){
    const TotalMesoContainer=document.querySelector(".result");
    TotalMesoContainer.innerText = `총 메소 : ${AddSymbol(String(TotalMeso*times))}메소`;
}
function RadioChk(){
    displayMeso(ChkReboot);
}
