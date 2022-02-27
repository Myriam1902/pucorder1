$(document).ready(function(){

    $.getJSON("https://restcountries.eu/rest/v2/all",
    function (data) {
        console.log(data);
        var countries = document.getElementById("countries");
        //var createOpption = document.createElement("option");
        var addCountryName;
        //createOpption.appendChild(addCountryName);
        //countries.appendChild(createOpption);
        for(var key in data){
            var createOpption = new Option(data[key].alpha3Code);
            countries.appendChild(createOpption);
        }

    });

});
/*
for (var key in content){
  var createOpption = new Option( content[key], key);
  selectTest.appendChild(createOpption)
}
*/
/*
var createOpption = new Option( content[key], key);
  selectTest.appendChild(createOpption)
*/

/* for(var key in data){
var createOpption = new Option(data[key].name);
countries.appendChild(createOpption);
}
*/

$(function () {

  $(".close").click(function(){
    $(".singin").toggleClass("open");
    $(this).toggleClass("open-x");

  });
});

