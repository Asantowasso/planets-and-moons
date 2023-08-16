// Here is where I will extract the needed information

fetch("https://api.le-systeme-solaire.net/rest/bodies/ ")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj){
    console.log(obj)
    // Mars
    console.log(obj.bodies[239].englishName) //info for Mars 239

    console.log(obj.bodies[239].perihelion) //closest distance to the earth in kilometers
    console.log(obj.bodies[239].aphelion) // farthest distance in kilometers

    var name2 = obj.bodies[239].englishName
    document.querySelector(".section2").innerHTML = name2;
    var item3 = obj.bodies[239].perihelion
    document.querySelector(".item3").innerHTML = item3;
    var item4 = obj.bodies[239].aphelion
    document.querySelector(".item4").innerHTML = item4;
    // Moon (Luna)
    console.log(obj.bodies[0].englishName) // info for earth's moon

    console.log(obj.bodies[0].perihelion) //closest distance to the earth (perigee)
    console.log(obj.bodies[0].aphelion) //farthest distance to the earth  (apogee)

     var name1 = obj.bodies[0].englishName;
    document.querySelector(".section1").innerHTML = name1;
    var item1 = obj.bodies[0].perihelion
    document.querySelector(".item1").innerHTML = item1;
    var item2 = obj.bodies[0].aphelion
    document.querySelector(".item2").innerHTML = item2

  })