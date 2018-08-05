//Busca o JSON da API do Bing Image of the day
function GetJsonBing() {
  var xmlhttp = new XMLHttpRequest()
  var url = "https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1"

  xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
          var objeto = JSON.parse(this.responseText);
          GetImageURL(objeto);
      }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//Busca o url da imagem do Bing disponível no JSON e aplica ao background do body
function GetImageURL(objeto) {
  var suffix = objeto.images[0].url;
  document.body.style.backgroundImage = "url('http://bing.com/" + suffix + "')";
}

//Busca O JSON da API do Yahoo Weather
function GetJsonYahoo() {
  //Faz a solicitação para pegar a latitude e longitude atual no navegador e chama a função showPosition passando essa posição
  navigator.geolocation.getCurrentPosition(showPosition);

  function showPosition(position){
    var xmlhttp = new XMLHttpRequest()
    var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u='c' and woeid in (select woeid from geo.places(1) where text='(" + position.coords.latitude + "," + position.coords.longitude + ")')&format=json"
    xmlhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var objeto = JSON.parse(this.responseText);
        console.log(objeto);
        mostrarWeather(objeto);
      }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
}

//Atualização de textos da página com os dados do JSON recolhida da API do Yahoo Weather
function mostrarWeather(objeto) {
  document.getElementById("local").innerHTML = objeto.query.results.channel.location.city + ", " + objeto.query.results.channel.location.region;
  document.getElementById("temp_hoje").innerHTML = objeto.query.results.channel.item.condition.temp + "°C";

  //Os ifs abaixo são para testar todos os códigos das condições disponibilizadas pela API, assim atualizando o ícone e o texto do clima atual de acordo com o código
  if(objeto.query.results.channel.item.condition.code == 0){
    document.getElementById("texto_hoje").innerHTML = "Tornado";
    document.getElementById("icone_hoje").innerHTML = "F";
  }
  if(objeto.query.results.channel.item.condition.code == 1){
    document.getElementById("texto_hoje").innerHTML = "Tempestade tropical";
    document.getElementById("icone_hoje").innerHTML = "F";
  }
  if(objeto.query.results.channel.item.condition.code == 2){
    document.getElementById("texto_hoje").innerHTML = "Furacão";
    document.getElementById("icone_hoje").innerHTML = "F";
  }
  if(objeto.query.results.channel.item.condition.code == 3){
    document.getElementById("texto_hoje").innerHTML = "Tempestade severa";
    document.getElementById("icone_hoje").innerHTML = "F";
  }
  if(objeto.query.results.channel.item.condition.code == 4){
    document.getElementById("texto_hoje").innerHTML = "Trovoadas";
    document.getElementById("icone_hoje").innerHTML = "0";
  }
  if(objeto.query.results.channel.item.condition.code == 5){
    document.getElementById("texto_hoje").innerHTML = "Chuva e neve";
    document.getElementById("icone_hoje").innerHTML = "U";
  }
  if(objeto.query.results.channel.item.condition.code == 6){
    document.getElementById("texto_hoje").innerHTML = "Chuva e granizo fino";
    document.getElementById("icone_hoje").innerHTML = "X";
  }
  if(objeto.query.results.channel.item.condition.code == 7){
    document.getElementById("texto_hoje").innerHTML = "Neve e granizo fino";
    document.getElementById("icone_hoje").innerHTML = "X";
  }
  if(objeto.query.results.channel.item.condition.code == 8){
    document.getElementById("texto_hoje").innerHTML = "Garoa gélida";
    document.getElementById("icone_hoje").innerHTML = "Q";
  }
  if(objeto.query.results.channel.item.condition.code == 9){
    document.getElementById("texto_hoje").innerHTML = "Garoa";
    document.getElementById("icone_hoje").innerHTML = "Q";
  }
  if(objeto.query.results.channel.item.condition.code == 10){
    document.getElementById("texto_hoje").innerHTML = "Chuva gélida";
    document.getElementById("icone_hoje").innerHTML = "T";
  }
  if(objeto.query.results.channel.item.condition.code == 11){
    document.getElementById("texto_hoje").innerHTML = "Chuvisco";
    document.getElementById("icone_hoje").innerHTML = "Q";
  }
  if(objeto.query.results.channel.item.condition.code == 12){
    document.getElementById("texto_hoje").innerHTML = "Chuva";
    document.getElementById("icone_hoje").innerHTML = "R";
  }
  if(objeto.query.results.channel.item.condition.code == 13){
    document.getElementById("texto_hoje").innerHTML = "Neve em flocos finos";
    document.getElementById("icone_hoje").innerHTML = "U";
  }
  if(objeto.query.results.channel.item.condition.code == 14){
    document.getElementById("texto_hoje").innerHTML = "Leve precipitação de neve";
    document.getElementById("icone_hoje").innerHTML = "V";
  }
  if(objeto.query.results.channel.item.condition.code == 15){
    document.getElementById("texto_hoje").innerHTML = "Ventos com neve";
    document.getElementById("icone_hoje").innerHTML = "W";
  }
  if(objeto.query.results.channel.item.condition.code == 16){
    document.getElementById("texto_hoje").innerHTML = "Neve";
    document.getElementById("icone_hoje").innerHTML = "W";
  }
  if(objeto.query.results.channel.item.condition.code == 17){
    document.getElementById("texto_hoje").innerHTML = "Chuva de granizo";
    document.getElementById("icone_hoje").innerHTML = "X";
  }
  if(objeto.query.results.channel.item.condition.code == 18){
    document.getElementById("texto_hoje").innerHTML = "Pouco granizo";
    document.getElementById("icone_hoje").innerHTML = "X";
  }
  if(objeto.query.results.channel.item.condition.code == 19){
    document.getElementById("texto_hoje").innerHTML = "Pó em suspensão";
    document.getElementById("icone_hoje").innerHTML = "E";
  }
  if(objeto.query.results.channel.item.condition.code == 20){
    document.getElementById("texto_hoje").innerHTML = "Neblina";
    document.getElementById("icone_hoje").innerHTML = "M";
  }
  if(objeto.query.results.channel.item.condition.code == 21){
    document.getElementById("texto_hoje").innerHTML = "Névoa seca";
    document.getElementById("icone_hoje").innerHTML = "M";
  }
  if(objeto.query.results.channel.item.condition.code == 22){
    document.getElementById("texto_hoje").innerHTML = "Enfumaçado";
    document.getElementById("icone_hoje").innerHTML = "M";
  }
  if(objeto.query.results.channel.item.condition.code == 23){
    document.getElementById("texto_hoje").innerHTML = "Vendaval";
    document.getElementById("icone_hoje").innerHTML = "F";
  }
  if(objeto.query.results.channel.item.condition.code == 24){
    document.getElementById("texto_hoje").innerHTML = "Ventando";
    document.getElementById("icone_hoje").innerHTML = "F";
  }
  if(objeto.query.results.channel.item.condition.code == 25){
    document.getElementById("texto_hoje").innerHTML = "Frio";
    document.getElementById("icone_hoje").innerHTML = "G";
  }
  if(objeto.query.results.channel.item.condition.code == 26){
    document.getElementById("texto_hoje").innerHTML = "Nublado";
    document.getElementById("icone_hoje").innerHTML = "N";
  }
  if(objeto.query.results.channel.item.condition.code == 27){
    document.getElementById("texto_hoje").innerHTML = "Muitas nuvens (noite)";
    document.getElementById("icone_hoje").innerHTML = "%";
  }
  if(objeto.query.results.channel.item.condition.code == 28){
    document.getElementById("texto_hoje").innerHTML = "Muitas nuvens (dia)";
    document.getElementById("icone_hoje").innerHTML = "Y";
  }
  if(objeto.query.results.channel.item.condition.code == 29){
    document.getElementById("texto_hoje").innerHTML = "Parcialmente nublado (noite)";
    document.getElementById("icone_hoje").innerHTML = "4";
  }
  if(objeto.query.results.channel.item.condition.code == 30){
    document.getElementById("texto_hoje").innerHTML = "Parcialmente nublado (dia)";
    document.getElementById("icone_hoje").innerHTML = "H";
  }
  if(objeto.query.results.channel.item.condition.code == 31){
    document.getElementById("texto_hoje").innerHTML = "Céu limpo (noite)";
    document.getElementById("icone_hoje").innerHTML = "2";
  }

  if(objeto.query.results.channel.item.condition.code == 32){
    document.getElementById("texto_hoje").innerHTML = "Ensolarado";
    document.getElementById("icone_hoje").innerHTML = "B";
  }
  if(objeto.query.results.channel.item.condition.code == 33){
    document.getElementById("texto_hoje").innerHTML = "Tempo bom (noite)";
    document.getElementById("icone_hoje").innerHTML = "2";
  }
  if(objeto.query.results.channel.item.condition.code == 34){
    document.getElementById("texto_hoje").innerHTML = "Tempo bom (dia)";
    document.getElementById("icone_hoje").innerHTML = "B";
  }
  if(objeto.query.results.channel.item.condition.code == 35){
    document.getElementById("texto_hoje").innerHTML = "Chuva e granizo";
    document.getElementById("icone_hoje").innerHTML = "X";
  }
  if(objeto.query.results.channel.item.condition.code == 36){
    document.getElementById("texto_hoje").innerHTML = "Quente";
    document.getElementById("icone_hoje").innerHTML = "B";
  }
  if(objeto.query.results.channel.item.condition.code == 37){
    document.getElementById("texto_hoje").innerHTML = "Tempestades isoladas";
    document.getElementById("icone_hoje").innerHTML = "F";
  }
  if(objeto.query.results.channel.item.condition.code == 38){
    document.getElementById("texto_hoje").innerHTML = "Tempestades esparsas";
    document.getElementById("icone_hoje").innerHTML = "F";
  }
  if(objeto.query.results.channel.item.condition.code == 39){
    document.getElementById("texto_hoje").innerHTML = "Tempestades esparsas";
    document.getElementById("icone_hoje").innerHTML = "F";
  }
  if(objeto.query.results.channel.item.condition.code == 40){
    document.getElementById("texto_hoje").innerHTML = "Chuvas esparsas";
    document.getElementById("icone_hoje").innerHTML = "R";
  }
  if(objeto.query.results.channel.item.condition.code == 41){
    document.getElementById("texto_hoje").innerHTML = "Nevasca";
    document.getElementById("icone_hoje").innerHTML = "G";
  }
  if(objeto.query.results.channel.item.condition.code == 42){
    document.getElementById("texto_hoje").innerHTML = "Tempestades de neve esparsas";
    document.getElementById("icone_hoje").innerHTML = "W";
  }
  if(objeto.query.results.channel.item.condition.code == 43){
    document.getElementById("texto_hoje").innerHTML = "Nevasca";
    document.getElementById("icone_hoje").innerHTML = "G";
  }
  if(objeto.query.results.channel.item.condition.code == 44){
    document.getElementById("texto_hoje").innerHTML = "Parcialmente nublado";
    document.getElementById("icone_hoje").innerHTML = "N";
  }
  if(objeto.query.results.channel.item.condition.code == 45){
    document.getElementById("texto_hoje").innerHTML = "Chuva com trovoadas";
    document.getElementById("icone_hoje").innerHTML = "Z";
  }
  if(objeto.query.results.channel.item.condition.code == 46){
    document.getElementById("texto_hoje").innerHTML = "Tempestade de neve";
    document.getElementById("icone_hoje").innerHTML = "W";
  }
  if(objeto.query.results.channel.item.condition.code == 47){
    document.getElementById("texto_hoje").innerHTML = "Relâmpagos e chuvas isoladas";
    document.getElementById("icone_hoje").innerHTML = "0";
  }

  document.getElementById("vento_hoje").innerHTML = "Vento: " + objeto.query.results.channel.wind.speed + " km/h";
  document.getElementById("max_amanha").innerHTML = "Máxima: " + objeto.query.results.channel.item.forecast[0].high + "°C";
  document.getElementById("min_amanha").innerHTML = "Mínima: " + objeto.query.results.channel.item.forecast[0].low + "°C";
  document.getElementById("max_depois").innerHTML = "Máxima: " + objeto.query.results.channel.item.forecast[1].high + "°C";
  document.getElementById("min_depois").innerHTML = "Mínima: " + objeto.query.results.channel.item.forecast[1].low + "°C";

  //Mudar a cor de fundo de acordo com o valor da temperatura
  if(objeto.query.results.channel.item.condition.temp < 15){
    document.getElementById("hoje").style.backgroundColor = "rgba(65,105,225,0.7)";
    document.getElementById("amanha").style.backgroundColor = "rgba(65,105,225,0.8)";
    document.getElementById("depois").style.backgroundColor = "rgba(65,105,225,0.9)";
  }
  else if(objeto.query.results.channel.item.condition.temp > 35){
    document.getElementById("hoje").style.backgroundColor = "rgba(225,65,65,0.7)";
    document.getElementById("amanha").style.backgroundColor = "rgba(225,65,65,0.8)";
    document.getElementById("depois").style.backgroundColor = "rgba(225,65,65,0.9)";
  }
  else{
    document.getElementById("hoje").style.backgroundColor = "rgba(255,215,0,0.7)";
    document.getElementById("amanha").style.backgroundColor = "rgba(255,215,0,0.8)";
    document.getElementById("depois").style.backgroundColor = "rgba(255,215,0,0.9)";
  }
}

//Faz a busca do JSON usando a cidade informada na caixa de texto
function GetCidade(cidade){
  var xmlhttp = new XMLHttpRequest()
  var url = "https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u='c' and woeid in (select woeid from geo.places(1) where text='" + cidade + "')&format=json"
  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var objeto = JSON.parse(this.responseText);
      //Teste para verificar se a chamada obteve resultados
      if(objeto.query.count == 0){
        document.getElementById("local").innerHTML = "Cidade não encontrada";
        document.getElementById("temp_hoje").innerHTML = "-°C";
        document.getElementById("texto_hoje").innerHTML = "-";
        document.getElementById("icone_hoje").innerHTML = ")";
        document.getElementById("vento_hoje").innerHTML = "Vento: - km/h";
        document.getElementById("max_amanha").innerHTML = "Máxima: -°C";
        document.getElementById("min_amanha").innerHTML = "Mínima: -°C";
        document.getElementById("max_depois").innerHTML = "Máxima: -°C";
        document.getElementById("min_depois").innerHTML = "Mínima: -°C";
        document.getElementById("hoje").style.backgroundColor = "rgba(105,105,105,0.7)";
        document.getElementById("amanha").style.backgroundColor = "rgba(105,105,105,0.8)";
        document.getElementById("depois").style.backgroundColor = "rgba(105,105,105,0.9)";
      }
      else{
        mostrarWeather(objeto);
      }
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

//Converte o valor Celcius para Fahrenheit dependendo do valor atual
function Converter(){
  if(document.getElementById("temp_hoje").innerHTML.endsWith("C")){
    var temp_hoje = document.getElementById("temp_hoje").innerHTML.replace("°C", "");
    var temp_hoje = parseInt(temp_hoje);
    document.getElementById("temp_hoje").innerHTML = Math.round((9*temp_hoje + 160)/5, 1) + "°F";
      
    var max_amanha = document.getElementById("max_amanha").innerHTML.replace("°C", "");
    var max_amanha = max_amanha.replace("Máxima: ", "");  
    var max_amanha = parseInt(max_amanha);
    document.getElementById("max_amanha").innerHTML = "Máxima: " + Math.round((9*max_amanha + 160)/5, 1) + "°F";
      
    var min_amanha = document.getElementById("min_amanha").innerHTML.replace("°C", "");
    var min_amanha = min_amanha.replace("Mínima: ", "");  
    var min_amanha = parseInt(min_amanha);
    document.getElementById("min_amanha").innerHTML = "Mínima: " + Math.round((9*min_amanha + 160)/5, 1) + "°F";
      
    var max_depois = document.getElementById("max_depois").innerHTML.replace("°C", "");
    var max_depois = max_depois.replace("Máxima: ", "");  
    var max_depois = parseInt(max_depois);
    document.getElementById("max_depois").innerHTML = "Máxima: " + Math.round((9*max_depois + 160)/5, 1) + "°F";
      
    var min_depois = document.getElementById("min_depois").innerHTML.replace("°C", "");
    var min_depois = min_depois.replace("Mínima: ", "");  
    var min_depois = parseInt(min_depois);
    document.getElementById("min_depois").innerHTML = "Mínima: " + Math.round((9*min_depois + 160)/5, 1) + "°F";  
    return;
  }

  if(document.getElementById("temp_hoje").innerHTML.endsWith("F")){
    var temp_hoje = document.getElementById("temp_hoje").innerHTML.replace("°F", "");
    var temp_hoje = parseInt(temp_hoje);
    document.getElementById("temp_hoje").innerHTML = Math.round((5*temp_hoje - 160)/9, 1) + "°C";
      
    var max_amanha = document.getElementById("max_amanha").innerHTML.replace("°F", "");
    var max_amanha = max_amanha.replace("Máxima: ", "");  
    var max_amanha = parseInt(max_amanha);
    document.getElementById("max_amanha").innerHTML = "Máxima: " + Math.round((5*max_amanha - 160)/9, 1) + "°C";
      
    var min_amanha = document.getElementById("min_amanha").innerHTML.replace("°F", "");
    var min_amanha = min_amanha.replace("Mínima: ", "");  
    var min_amanha = parseInt(min_amanha);
    document.getElementById("min_amanha").innerHTML = "Mínima: " + Math.round((5*min_amanha - 160)/9, 1) + "°C";
      
    var max_depois = document.getElementById("max_depois").innerHTML.replace("°F", "");
    var max_depois = max_depois.replace("Máxima: ", "");  
    var max_depois = parseInt(max_depois);
    document.getElementById("max_depois").innerHTML = "Máxima: " + Math.round((5*max_depois - 160)/9, 1) + "°C";
      
    var min_depois = document.getElementById("min_depois").innerHTML.replace("°F", "");
    var min_depois = min_depois.replace("Mínima: ", "");  
    var min_depois = parseInt(min_depois);
    document.getElementById("min_depois").innerHTML = "Mínima: " + Math.round((5*min_depois - 160)/9, 1) + "°C";  
    return;
  }
}

window.onload = function () {
  GetJsonBing();
  GetJsonYahoo();
}
