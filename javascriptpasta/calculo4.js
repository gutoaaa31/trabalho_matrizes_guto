//Multiplicação

var i = Array();
var j = Array();
var u = Array();

i.push([0, 0, 0]);
i.push([0, 0, 0]);

j.push([0, 0]);
j.push([0, 0]);
j.push([0, 0]);

u.push([0, 0]);
u.push([0, 0]);

for (k = 0; k < i.length; k++) {
    for (l = 0; l < i[k].length; l++) {
        i[k][l] = parseInt(prompt("Diga-me um número para a Matriz I de tamanho 2x3, na linha " + k + " e na coluna " + l + "."));
    }
}

for (m = 0; m < j.length; m++) {
    for (n = 0; n < j[m].length; n++) {
        j[m][n] = parseInt(prompt("Diga-me um número para a Matriz J de tamanho 3x2, na linha " + m + " e na coluna " + n + "."));
    }
}

document.write("<br>");
document.write("Matriz I(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (o = 0; o < i.length; o++) {
    document.write("<tr>");
    for (p = 0; p < i[o].length; p++) {

        document.write("<td>" + i[o][p] + "</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz J(3x2)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (q = 0; q < j.length; q++) {
    document.write("<tr>");
    for (r = 0; r < j[q].length; r++) {

        document.write("<td>" + j[q][r] + "</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");

for (s = 0; s < i.length; s++) {
    
    for (t = 0; t < j[0].length; t++) {
        u[s][t] = 0;
        for (v = 0; v < j.length; v++) {
            u[s][t] += i[s][v] * j[v][t];
        }
    }
}

document.write("<br>");
document.write("Matriz de Multiplicação entre I e J(2x2)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for(w=0; w<u.length; w++){
    document.write("<tr>");
    for(x=0; x < u[w].length; x++){
        
        document.write("<td>" + u[w][x] + "</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");