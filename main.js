const text = "hiiii loveloveee, happy 28th monthsarryyyyy sa'tin, first of all ay tatagan lang natin ang pag mamahalan natin tatagan lang natin yung rs natin at ipag-patuloy natinnn, wala na atrasan ito hehe. sa'kin ka na habang buhay, at sa'yong-sa'yo lang akoo. and sorry sa mga nagawa ko lahat-lahattt, sa mga mali kong decision sa mali kong gawa na hindi umaayon sa gusto mo sorryyyy nawa'y mapatawad mo akoo, promise inimprove ko sarili ko para maging kagaya ako sa gusto mo sa isang lalake, gagawin ko lahat para mapasakin ka lang, gagawin ko mga bagay na gusto mo, gagawin ko lahat para mag stay ka lang, i know na hindi pa masyado nag iimprove ang ugali ko na ayaw mo at kilos ko pero mag babago nang mag babago 'yan. tandaan mo na palagi kitang mamahalin, wag mag hahanap ng iba nandito lang ako para sa'yo, wag mag hahanap ng mas better sa'kin i know na marami pa iba diyan na mas better sa'kin but i'll make myself better for you. and goodluckkkk sa magiging college life mo medyo mahirap lang kasi marami pinapagawa and i know baka maging ganon din sainyo tas nursing pa, galingan mo palagi, tuparin natin mga gusto natin and tuparin natin pangarap natin para sa isa't-isa, wag sirain yung tiwala na binigay ko, hinding-hindi ko rin sisirain yung tiwala na binigay mo sa'kin, alaaga ko 'yun and nawa'y maging maayos ang circle of friend mo sa college dadating na yung puyatan time diya😭😭 basta gawin mo lang mga bagay na mag papasaya sa'yo, and advance goodluckkkkkk sa graduation mo galing talaga so much ng baby ko with honors pa 'yan matik baka baby zel ko 'yannn hehehe ano gusto ng baby ko sa graduation gift niya and ano gusto ng baby ko ngayon araww it's our dayyyy sabihin mo lang kung ano gusto mo hehehe gagawin ko ikaw masusunod🫡🫡 commender zel🫡🫡 HAHAHAHAHWHW gusto mo t hehehehehehehe btw goodluckkkkkk din sa exam mo galingan mo at i perfect mo lahat😎😎 partida na ba 'yan na walang review-review, mamaw talaga baby ko binabasic lang ang exam nawa'y ako rin, sa identification ako nahihirapan lagi e HAHAHAHAHAAH ayun kahinaan ko at magaganda mo na ngiti at cute pics mo😁 hihi HAHAHAHAHA pag luto ko baby ko ngayon ng fav niya na mala-chowking fried rice and siomai, tocino na may kasamang manga at empa at pepsi hehehehe babawiin natin yung star na nawala natin mag papa-mg ulit tayoo😈 mang dudurog na😈 devil mode time HAHAHAHAHAA sakit mata ko gusto makita b mo hihi🤭 HAHAHAAHAHAH tas matik tutusukin mo😭😭😭 masakit na nga tutusukin pa😞 HAHAHAHAHA pag uwi mo cuddle kita at pahinga ka sa'kin alam ko napagod sobra baby ko sa exam halika pinag-handa kita lahat-lahat hehehe mahal na mahal na mahal na mahal kitaa tandaan mo lagi kitang mamahalin iloveyouuuuuuuuuuuuuuuuuuuuuuuu, iloveyoualwaysssssssssssssssss, mwaamwaaaaaaa, nawa'y magi maganda araw mo ngayonnn, happy monthsarryyy sa'tin hehehe ay-ayaten" ;
const paragraph = text.split("");
let i = 0; 
// var clickSound = new Audio("http://www.freesfx.co.uk/rx2/mp3s/6/18660_1464810669.mp3");
function dashOut (arr){   
    if (i<arr.length) {
        console.log(arr[i]);
        document.querySelector(".textCont").textContent += arr[i];
        // $(".textCont").text() = $(".textCont").text() + arr[i];
        // clickSound.play();
        i++;
        console.log ('The i count: ' + i);
        setTimeout(function(){dashOut(arr)},interval(arr[i]));
    }
}
// setInterval(function(){(dashOut(paragraph))}, 500);
function interval(letter) {
    console.log(letter);
    if (letter == ";" || letter == "." || letter == ",") {
        return Math.floor(Math.random() * 500 + 500);
    } else {
        return Math.floor(Math.random() * 130 + 5);
    }
}
function startFromBegin (){
    i = 0;
    dashOut(paragraph);
}
startFromBegin();