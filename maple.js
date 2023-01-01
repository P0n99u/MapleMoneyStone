var TotalMeso=0
var CanTradeMesoStone=180
var TradingMesoStone=0

var Easy={
    Zaqqum: "119,835",
    Cygnus: "5,493,394",
    Horntail: "528,474",
    VonLeon: "633,927",
    Magnus: "432,605",
    Papulatus: "410,135",
    DreamWomen: "48,058,319",
    ARKarium: "690,249"
}

var Normal={
    Zaqqum: "366,997",
    Horntail: "606,666",
    VacuumCleaner: "748,970", //카웅
    PinkBean: "841,544",
    Papulatus: "1,596,506",
    NormalRootAbyss: "580,003", //4노말루타
    Cygnus: "9,039,130",
    Dusk: "71,054,562",
    Hilla: "479,343",
    VonLeon: "873,601",
    Magnus: "1,553,066",
    ARKarium: "1,510,227",
    ElectricLineMan: "33,942,566",
    Demian: "35,517,853",
    DreamWomen: "57,502,626",
    SpiderFucker: "66,311,463",
    Djunkel: "52,812,500",
    Slime:"46,935,874"
    StrongHilla:"190,159,452",

}

var Hard={
    Pierre: "9,838,832",
    HalfHalf: "9,818,154",
    BloodyQueen: "9,806,780",
    Vellum: "12,590,202",
    Zaqqum: "9,741,285",
    Horntail: "810,086",
    PinkBean: "7,923,110",
    Papulatus: "26,725,937",
    Dusk: "160,183,752",
    Hilla: "6,936,489",
    VonLeon: "1,467,984",
    Magnus: "11,579,023",
    ElectricLineMan: "118,294,192",
    Demian: "112,480,613",
    DreamWomen: "131,095,655",
    SpiderFucker: "145,038,483",
    Djunkel: "168,609,280",
    StrongHilla: "190,159,452",
    BlackMage: "1,418,809,857",
    WingWomen: "268,825,621", //세렌
    Slime:"155,492,141"

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
    if(str!='0'){
        MaxMesoStone.innerText=`판매 가능한 결정석 : ${CanTradeMesoStone-=1} 개`;
        TradingMesoStoneContainer.innerText = `선택된 결정석 : ${TradingMesoStone+=1} 개`;
    }
    WriteMeso(str,ChkReboot());
}

function WriteMeso(str,times){
    const Share=document.querySelector('input[name="Share"]').value
    var num=ParseNum(str);
    TotalMeso=TotalMeso+(num/Share)
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
    var result=TotalMeso*times;
    result=parseInt(result);
    TotalMesoContainer.innerText = `합계 : ${AddSymbol(String(result))} 메소`;
}

function displayText(){
    
}
