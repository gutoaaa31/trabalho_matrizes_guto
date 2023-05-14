//Adição com Matriz de tamanho fixo e números digitados pelo usuário

var y = Array();
var z = Array();

y.push([0, 0, 0]);
y.push([0, 0, 0]);

z.push([0, 0, 0]);
z.push([0, 0, 0]);

for (a = 0; a < y.length; a++) {
    //Errado(tentativa 01)y[0][i]= parseInt(prompt("Diga-me um número para a Matriz Y de tamanho 2x3."));
    for (b = 0; b < y[a].length; b++) {
        y[a][b] = parseInt(prompt("Diga-me um número para a Matriz Y de tamanho 2x3, na linha " + a + " e na coluna " + b + "."));
    }
}
/*(tentativa 02)if(y.length = 0){
    i = 0;
    i++;
    y[0][i]= parseInt(prompt("Diga-me um número para a Matriz Y de tamanho 2x3.")); 
}else{
    if(y.length){
        j = 0;
        j++;
        y[1][j]= parseInt(prompt("Diga-me um número para a Matriz Y de tamanho 2x3."));
    } 
}*/

for (c = 0; c < z.length; c++) {
    for (d = 0; d < z[c].length; d++) {
        z[c][d] = parseInt(prompt("Diga-me um número para a Matriz Z de tamanho 2x3, na linha " + c + " e na coluna " + d + "."));
    }
}

document.write("Matriz Y(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (e = 0; e < y.length; e++) {
    document.write("<tr>");
    for (f = 0; f < y[e].length; f++) {

        document.write("<td>" + y[e][f] + "</td>");
    }
    document.write("<br>");
    document.write("<tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz Z(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (g = 0; g < z.length; g++) {
    document.write("<tr>");
    for (h = 0; h < z[g].length; h++) {

        document.write("<td>" + z[g][h] + "</td>");
    }
    document.write("<br>");
    document.write("<tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz de Adição entre Y e Z(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
document.write("<tr>");
document.write("<td>" + (y[0][0] + z[0][0]) + "</td>" + "<td>" + (y[0][1] + z[0][1]) + "</td>" + "<td>" + (y[0][2] + z[0][2]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (y[1][0] + z[1][0]) + "</td>" + "<td>" + (y[1][1] + z[1][1]) + "</td>" + "<td>" + (y[1][2] + z[1][2]) + "</td>");
document.write("</tr>");
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz de Subtração entre Y e Z(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (y[0][0] - z[0][0]) + "</td>" + "<td>" + (y[0][1] - z[0][1]) + "</td>" + "<td>" + (y[0][2] - z[0][2]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (y[1][0] - z[1][0]) + "</td>" + "<td>" + (y[1][1] - z[1][1]) + "</td>" + "<td>" + (y[1][2] - z[1][2]) + "</td>");
document.write("</tr>");
document.write("</table>");
document.write("</div>");