//Adição
var a = Array();
var b = Array();

a.push([5, 9, 13]);
a.push([6, (-7), (-15)]);

b.push([3, (-8), 1]);
b.push([10, 11, 5]);

document.write("Matriz A(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (c = 0; c < a.length; c++) {
    document.write("<tr>");
    for (d = 0; d < a[c].length; d++) {

        document.write("<td>" + a[c][d] + "</td>");
    }
    document.write("<br>");
    document.write("<tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz B(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (e = 0; e < b.length; e++) {
    document.write("<tr>");
    for (f = 0; f < b[e].length; f++) {

        document.write("<td>" + b[e][f] + "</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz Adição de A e B(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
document.write("<tr>");
document.write("<td>" + (a[0][0] + b[0][0]) + "</td>" + "<td>" + (a[0][1] + b[0][1]) + "</td>" + "<td>" + (a[0][2] + b[0][2]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (a[1][0] + b[1][0]) + "</td>" + "<td>" + (a[1][1] + b[1][1]) + "</td>" + "<td>" + (a[1][2] + b[1][2]) + "</td>");
document.write("</tr>");
document.write("</table>");
document.write("</div>");

//Subtração
var g = Array();
var h = Array();

g.push([50, (-6), 31]);
g.push([902, (-9), (-155)]);

h.push([3, (-8), 9]);
h.push([3, 12, 4]);

document.write("<br>");
document.write("Matriz G(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (i = 0; i < g.length; i++) {
    document.write("<tr>");
    for (j = 0; j < g[i].length; j++) {

        document.write("<td>" + g[i][j] + "</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz H(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (k = 0; k < h.length; k++) {
    document.write("<tr>");
    for (l = 0; l < h[k].length; l++) {

        document.write("<td>" + h[k][l] + "</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz Subtração de G e H(2x3)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
document.write("<tr>");
document.write("<td>" + (g[0][0] - h[0][0]) + "</td>" + "<td>" + (g[0][1] - h[0][1]) + "</td>" + "<td>" + (g[0][2] - h[0][2]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (g[1][0] - h[1][0]) + "</td>" + "<td>" + (g[1][1] - h[1][1]) + "</td>" + "<td>" + (g[1][2] - h[1][2]) + "</td>");
document.write("</tr>");
document.write("</table>");
document.write("</div>");