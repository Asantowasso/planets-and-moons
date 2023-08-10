// Here is where I will extract the needed information

fetch("https://api.le-systeme-solaire.net/rest/bodies/ ")
  .then(function (response) {
    return response.json();
  })
  .then(function (obj){
    console.log(obj)
    console.log(obj.bodies[0].englishName) // info for earth's moon
    console.log(obj.bodies[0].perihelion) //closest distance to the sun
    console.log(obj.bodies[0].aphelion) //farthest distance to the sun

  })