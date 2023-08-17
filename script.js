// Here is where I will extract the needed information

fetch("https://api.le-systeme-solaire.net/rest/bodies/ ")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj) {
    console.log(obj);

    //Mercury
    console.log(obj.bodies[240].englishName);

    console.log(obj.bodies[240].perihelion);

    console.log(obj.bodies[240].aphelion);

    var name5 = obj.bodies[240].englishName;
    document.querySelector(".section5").innerHTML = name5;

    var item9 = obj.bodies[240].perihelion;
    document.querySelector(".item9").innerHTML = item9;

    var item10 = obj.bodies[240].aphelion;
    document.querySelector(".item10").innerHTML = item10;


    //Venus
    console.log(obj.bodies[244].englishName);

    console.log(obj.bodies[244].perihelion);

    console.log(obj.bodies[244].aphelion);

    var name4 = obj.bodies[244].englishName;
    document.querySelector(".section4").innerHTML = name4;

    var item7 = obj.bodies[244].perihelion;
    document.querySelector(".item7").innerHTML = item7;

    var item8 = obj.bodies[244].aphelion;
    document.querySelector(".item8").innerHTML = item8;

    // Earth
    console.log(obj.bodies[243].englishName); //info for Earth 249

    console.log(obj.bodies[243].perihelion);

    console.log(obj.bodies[243].aphelion);

    var name3 = obj.bodies[243].englishName;
    document.querySelector(".section3").innerHTML = name3;

    var item5 = obj.bodies[243].perihelion;
    document.querySelector(".item5").innerHTML = item5;

    var item6 = obj.bodies[239].aphelion;
    document.querySelector(".item6").innerHTML = item6;

    // Mars
    console.log(obj.bodies[239].englishName); //info for Mars 239

    console.log(obj.bodies[239].perihelion); //closest distance to the earth in kilometers
    console.log(obj.bodies[239].aphelion); // farthest distance in kilometers

    var name2 = obj.bodies[239].englishName;
    document.querySelector(".section2").innerHTML = name2;
    var item3 = obj.bodies[239].perihelion;
    document.querySelector(".item3").innerHTML = item3;
    var item4 = obj.bodies[239].aphelion;
    document.querySelector(".item4").innerHTML = item4;
    // Moon (Luna)
    console.log(obj.bodies[0].englishName); // info for earth's moon

    console.log(obj.bodies[0].perihelion); //closest distance to the earth (perigee)
    console.log(obj.bodies[0].aphelion); //farthest distance to the earth  (apogee)

    var name1 = obj.bodies[0].englishName;
    document.querySelector(".section1").innerHTML = name1;
    var item1 = obj.bodies[0].perihelion;
    document.querySelector(".item1").innerHTML = item1;
    var item2 = obj.bodies[0].aphelion;
    document.querySelector(".item2").innerHTML = item2;
  });
