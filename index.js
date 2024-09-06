var pdf = require("html-pdf");

// Informações do aluno e curso
var nomeDoUsuario = "Júlia Cavalcante";
var curso = "Técnico em Desenvolvimento de Sistemas";
var instituicao = "SENAI";
var materias = [
  { nome: "Hardware", nota: 9 },
  { nome: "Lógica de Programação", nota: 8 },
  { nome: "Front-End", nota: 10 },
];

// Imagem do logo do SENAI
var logoSenai = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj4TYKka5QS8bMtzBEp7Mxn_RwuOryFea-ag&s";

// Geração do conteúdo do boletim
var conteudo = `
  <div style='text-align: center;'>
    <img src='${logoSenai}' style='width: 150px;' />
    <h1>Boletim Escolar</h1>
    <h2>${instituicao}</h2>
    <hr>
    <p>Nome do Aluno: <strong>${nomeDoUsuario}</strong></p>
    <p>Curso: <strong>${curso}</strong></p>
    <h3>Matérias Cursadas</h3>
    <ul>
      ${materias.map(materia => `<li>${materia.nome}: Nota ${materia.nota}</li>`).join('')}
    </ul>
  </div>
`;

// Geração do PDF
pdf.create(conteudo, {}).toFile("./boletim.pdf", (err, res) => {
  if (err) {
    console.log("Um erro aconteceu: ", err);
  } else {
    console.log("Arquivo gerado: ", res);
  }
});
