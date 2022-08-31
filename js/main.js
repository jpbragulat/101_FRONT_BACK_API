$( document ).ready(function() {
  console.log( "ready!" );
  $("#dialog").toggle();

  $.get( "https://localhost:7233/WeatherForecast", function( data ) {
      $( "#result" ).html(data[1]["date"] + " - " + data[1]["summary"] + " - " + data[1]["temperatureC"]); // accede a id objeto porq quiere cambiar solo ese y no se pueden repetir
          console.log (data); // para modificar una clase es con ".nombre"
       
       let i = 0;
       for (i=0; i < data.length; i ++)
       {
          $("#listini").append('<li>' + data[i]["date"] + '</li>');
       }
  });

/*  $.get( "http://headers.jsontest.com/", function(data){

      $(".result").html(data);
          console.log(data["Host"]);
      $("#jsonHeader").append('<li>' + data["Host"] + '</li>' + '<li>' + data["Accept-Language"] + '</li>');1
  });

  $.get("http://date.jsontest.com", function(data){

      $(".result").html(data);
          console.log(data["time"]);
      $("#jsonDate").append('<li>' + data["time"] + '</li>' + '<li>' + data["date"] + '</li>');       

  });

  //prueba de traer todo - uso api dummyjson
  $.get("http://dummyjson.com/products", function(data){

      $(".result").html(data);
          console.log(data.products[0]["id"],data.products[1]["id"]);
          console.log(data.products[0]["title"],data.products[1]["title"]);
          const nombre = "http://dummyjson.com/products/";
          console.log(nombre);
          let i=0;
          let z = `${nombre}${i}`;
          console.log(z);
      for(i=0; i<data.products.length; i++){

          const pagina = '<a href="http://dummyjson.com/products/"';
          let listado = `${nombre}${i+1}`;
          let nombreAref = "linkJsonListado";
          const linkJ = `${nombreAref}${i+1}`;
          console.log("listado: ", listado);
          console.log(linkJ);
          $("#jsonListado").append('<li>' + '<a id = "' + linkJ + '" href="' + listado + '">' + data.products[i]["id"] + '</a>' + " " + data.products[i]["title"] + '</li>');       
         
          
      }
          $('[id*="linkJsonListado"]').hover(function(){ //toma valor ID que contenga el string "linkJsonListado"
                  
                  console.log(this.id); // this.id es el object ID que se le hizo HOVER
                  //let numero = this.id;
                  //console.log(numero);
                  let lastChar = this.id.substr(this.id.length - 1); // saco numero seleccionado
                  console.log(lastChar); 
                  //let numeroLinkj = linkJ1;
                  console.log("Entre HOVER: ");
                  //$("#dialog").show().html('<li>HOLA</li>');
                  lastChar = lastChar - 1;
                  $("#dialog").show().html('<li>' + data.products[lastChar]["id"] + '</li>' + '<li>' + data.products[lastChar]["title"] + '</li>' + '<li>' + '<img src="' + data.products[lastChar]["thumbnail"] + '">' + '</li>');
                  $("#dialog").dialog();
                  }, function(){
                  $("#dialog").dialog("close");
                  console.log("sale hover");
          });
      
      

  });

*/

  console.log ("hasta aca"); 
});