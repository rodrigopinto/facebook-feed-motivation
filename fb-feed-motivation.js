var div = document.querySelector("#newsFeedHeading + div");
div.innerHTML = "";

var quotes = [
  "A persistência é o caminho do êxito.|Charlie Chaplin",
  "We are what we repeatedly do. Excellence, therefore, is not an act but a habit.|Aristotle",
  "Mais vale a lágrima da derrota, do que a vergonha de não ter lutado.|Bob Marley",
  "Aquele que tentou e não conseguiu, é superior àquele que não tentou.|Desconhecido",
  "Se quer viver uma vida feliz, amarre-se a uma meta, não a pessoas nem a coisas.|Albert Einstein",
  "Acredite, corra atrás, a única coisa que existe entre você e o seu sonho é o seu medo.|Desconhecido",
  "Nada é difícil se for dividido em pequenas partes.|Henry Ford)"
];

var template = "<div class=\"_5pcb\" id=\"u_ps_0_0_0\"> \
  <div class=\"_4ikz\" id=\"substream_0\"> \
    <div> \
      <div class=\"_4-u2 mbm _5jmm _5pat _5v3q _5sq8 _5x16\"> \
        <div class=\"userContentWrapper _5pcr _3ccb\"> \
          <h1 style=\"font-size: 2em;text-align: center;\">${quote}</h1> \
          <p style=\"font-size: 1.3em;text-align: right;margin-right: 5%;\">${author}</p> \
        </div> \
      </div> \
    </div> \
  </div> \
</div>"

var showQuotes = function() {
    var totalQuotes = quotes.length,
        random = Math.floor((Math.random() * totalQuotes) + 1),
        randomQuote = quotes[random],
        q = randomQuote.split("|"),
        quote = q[0],
        author = q[1];

    div.innerHTML = template.replace("${author}", author).replace("${quote}", quote);
};

showQuotes();

