var selectedRow = null;
var i = 0;

function onFormSubmit() {
  document.getElementById("mostraTabela").style.display = "none";
  document.getElementById("exibeCursoPorId").style.display = "none";
  if (validar()) {
    var formData = readFormData();
    if (selectedRow == null) criarCurso(formData);
    else updateRecord(formData);
    resetForm();
  }
}

function readFormData() {
  var formData = {};
  formData["titulo"] = document.getElementById("titulo").value;
  formData["descricao"] = document.getElementById("descricao").value;
  formData["imagem"] = document.getElementById("imagem").value;
  formData["professor"] = document.getElementById("professor").value;
  formData["link"] = document.getElementById("link").value;
  return formData;
}

var newRow;
function criarCurso(data) {
  var table = document
    .getElementById("listaCurso")
    .getElementsByTagName("tbody")[0];
  newRow = table.insertRow(table.length);
  var num = i++;
  newRow.id = num;
  cell1 = newRow.insertCell(0);
  cell1.id = "id" + num;
  cell1.innerHTML = num;
  cell2 = newRow.insertCell(1);
  cell2.id = "titulo" + num;
  cell2.innerHTML = data.titulo;
  cell3 = newRow.insertCell(2);
  cell3.id = "descricao" + num;
  cell3.innerHTML = data.descricao;
  cell4 = newRow.insertCell(3);
  cell4.id = "imagem" + num;
  cell4.innerHTML = data.imagem;
  cell5 = newRow.insertCell(4);
  cell5.id = "professor" + num;
  cell5.innerHTML = data.professor;
  cell6 = newRow.insertCell(5);
  cell6.id = "link" + num;
  cell6.innerHTML = data.link;
  cell7 = newRow.insertCell(6);
  cell7.innerHTML = `<a onClick="atualizarCurso(this)">Editar</a>
                       <a onClick="deletarCurso(this)">Deletar</a>`;
}

function resetForm() {
  document.getElementById("titulo").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("imagem").value = "";
  document.getElementById("professor").value = "";
  document.getElementById("link").value = "";
  selectedRow = null;
}

function atualizarCurso(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("titulo").value = selectedRow.cells[1].innerHTML;
  document.getElementById("descricao").value = selectedRow.cells[2].innerHTML;
  document.getElementById("imagem").value = selectedRow.cells[3].innerHTML;
  document.getElementById("professor").value = selectedRow.cells[4].innerHTML;
  document.getElementById("link").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[1].innerHTML = formData.titulo;
  selectedRow.cells[2].innerHTML = formData.descricao;
  selectedRow.cells[3].innerHTML = formData.imagem;
  selectedRow.cells[4].innerHTML = formData.professor;
  selectedRow.cells[5].innerHTML = formData.link;
}

function deletarCurso(td) {
  if (confirm("Você tem certeza que quer excluir esse registro ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("listaCurso").deleteRow(row.rowIndex);
    resetForm();
  }
}

function listaCursos() {
  document.getElementById("mostraTabela").style.display = "block";
}
function limpaDados() {
  document.getElementById("exibeCursoPorId").style.display = "none";
  document.getElementById("exibeCursoPorId").deleteRow(1);
  document.getElementById("idCurso").value = "";
}

function exibirCurso() {
  document.getElementById("mostraTabela").style.display = "none";
  document.getElementById("exibeCursoPorId").style.display = "block";
  var id = document.getElementById("idCurso").value;
  document.getElementById("exibeCursoPorId").style.display = "block";
  var table = document
    .getElementById("exibeCursoPorId")
    .getElementsByTagName("tbody")[0];
  var novaLinha = table.insertRow(table.length);
  cell1 = novaLinha.insertCell(0);
  cell1.innerHTML = document.getElementById("id" + id).textContent;
  cell2 = novaLinha.insertCell(1);
  cell2.innerHTML = document.getElementById("titulo" + id).textContent;
  cell3 = novaLinha.insertCell(2);
  cell3.innerHTML = document.getElementById("descricao" + id).textContent;
  cell4 = novaLinha.insertCell(3);
  cell4.innerHTML = document.getElementById("imagem" + id).textContent;
  cell5 = novaLinha.insertCell(4);
  cell5.innerHTML = document.getElementById("professor" + id).textContent;
  cell6 = novaLinha.insertCell(5);
  cell6.innerHTML = document.getElementById("link" + id).textContent;
}

function validar() {
  isValid = true;
  if (document.getElementById("titulo").value == "") {
    isValid = false;
    document.getElementById("tituloValidaErro").classList.remove("hide");
  } else {
    isValid = true;
    if (!document.getElementById("tituloValidaErro").classList.contains("hide"))
      document.getElementById("tituloValidaErro").classList.add("hide");
  }
  return isValid;
}
