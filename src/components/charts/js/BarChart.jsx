google.charts.load("current", { packages: ["corechart"], language: "pt" });
google.charts.setOnLoadCallback(desenharGraficos);

function desenharGraficos() {
  var tabela = new google.visualization.DataTable();

  tabela.addColumn("string", "categorias");
  tabela.addColumn("number", "valores");
  tabela.addColumn({ type: "string", role: "annotation" });
  tabela.addColumn({ type: "string", role: "style" });

  tabela.addRows([
    ["Educação", 2000, "R$2.000,00", "blue"],
    ["Transporte", 500, "R$500,00", "grey"],
    ["Lazer", 230, "R$230,00", "grey"],
    ["Saúde", 50, "R$50,00", "grey"],
    ["Cartão de crédito", 900, "R$900,00", "#8904B1"],
    ["Alimentação", 260, "R$260,00", "grey"]
  ]);
  //ordenando a tabela pela coluna de indice 1
  tabela.sort([{ column: 1, desc: true }]);

  var opcoes = {
    title: "Tipos de Gastos",
    height: 400,
    width: 800,
    vAxis: {
      gridlines: {
        count: 0,
        color: "transparent"
      }
    },
    legend: "none",
    hAxis: {
      gridlines: {
        color: "transparent"
      },
      format: "currency",
      textPosition: "none"
    },
    annotations: {
      alwaysOutside: true
    }
  };

  var grafico = new google.visualization.BarChart(
    document.getElementById("BarChart")
  );
  grafico.draw(tabela, opcoes);
}
