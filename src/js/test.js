function huy(m1, m2, m3) {
b1.addEventListener('mouseover', function() {
    result = m1;
    document.getElementsByClassName("t")[0].innerHTML = result;
    $('.t').css("background", "green");
});

b2.addEventListener('mouseover', function() {
    result = m2;
    document.getElementsByClassName("t")[0].innerHTML = result;
    $('.t').css("background", "orange");
});

b3.addEventListener('mouseover', function() {
    result = m3;
    document.getElementsByClassName("t")[0].innerHTML = result;
    $('.t').css("background", "yellow");
});
}

huy(
    "Майнкрафт - это бизнес игра для заработка бабла.", 
    "КС ГО - это просто игра на улучшение логики", 
    "Кодинг - это самый лучший вариант из всех игр"
);

let persone = {
    name: "John Smith",
    age: "29",
    dalboeb: true
}

console.log(5 + +"5")