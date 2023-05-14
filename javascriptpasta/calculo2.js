//Adição com números aleatórios

var m = Array();
var n = Array();

m.push([parseInt(Math.random() * 3), parseInt(Math.random() * 4), parseInt(Math.random() * 12), parseInt(Math.random() * 9)]);
m.push([parseInt(Math.random() * 140), parseInt(Math.random() * 310), parseInt(Math.random() * 160), parseInt(Math.random() * 5000)]);
m.push([parseInt(Math.random() * 100), parseInt(Math.random() * 150), parseInt(Math.random() * 200), parseInt(Math.random() * 250)]);
m.push([parseInt(Math.random() * 100), parseInt(Math.random() * 150), parseInt(Math.random() * 200), parseInt(Math.random() * 250)]);

n.push([parseInt(Math.random() * 14), parseInt(Math.random() * 31), parseInt(Math.random() * 16), parseInt(Math.random() * 500)]);
n.push([parseInt(Math.random() * 104), parseInt(Math.random() * 301), parseInt(Math.random() * 106), parseInt(Math.random() * 50)]);
n.push([parseInt(Math.random() * 300), parseInt(Math.random() * 350), parseInt(Math.random() * 400), parseInt(Math.random() * 450)]);
n.push([parseInt(Math.random() * 300), parseInt(Math.random() * 350), parseInt(Math.random() * 400), parseInt(Math.random() * 450)]);


document.write("Matriz M(4x4)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (o = 0; o < m.length; o++) {
    document.write("<tr>");
    for (p = 0; p < m[o].length; p++) {

        document.write("<td>" + m[o][p] + "</td>");
    }
    document.write("<br>");
    document.write("<tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz N(4x4)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (q = 0; q < n.length; q++) {
    document.write("<tr>");
    for (r = 0; r < n[q].length; r++) {

        document.write("<td>" + n[q][r] + "</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz de Subtração entre M e N(4x4)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
document.write("<tr>");
document.write("<td>" + (m[0][0] - n[0][0]) + "</td>" + "<td>" + (m[0][1] - n[0][1]) + "</td>" + "<td>" + (m[0][2] - n[0][2]) + "</td>" + "<td>" + (m[0][3] - n[0][3]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (m[1][0] - n[1][0]) + "</td>" + "<td>" + (m[1][1] - n[1][1]) + "</td>" + "<td>" + (m[1][2] - n[1][2]) + "</td>" + "<td>" + (m[1][3] - n[1][3]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (m[2][0] - n[2][0]) + "</td>" + "<td>" + (m[2][1] - n[2][1]) + "</td>" + "<td>" + (m[2][2] - n[2][2]) + "</td>" + "<td>" + (m[2][3] - n[2][3]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (m[3][0] - n[3][0]) + "</td>" + "<td>" + (m[3][1] - n[3][1]) + "</td>" + "<td>" + (m[3][2] - n[3][2]) + "</td>" + "<td>" + (m[3][3] - n[3][3]) + "</td>");
document.write("</tr>");
document.write("</table>");
document.write("</div>");

//Subtração com números aleatórios

var s = Array();
var t = Array();

s.push([parseInt(Math.random() * 3), parseInt(Math.random() * 4), parseInt(Math.random() * 12), parseInt(Math.random() * 9)]);
s.push([parseInt(Math.random() * 140), parseInt(Math.random() * 310), parseInt(Math.random() * 160), parseInt(Math.random() * 5000)]);
s.push([parseInt(Math.random() * 100), parseInt(Math.random() * 150), parseInt(Math.random() * 200), parseInt(Math.random() * 250)]);
s.push([parseInt(Math.random() * 100), parseInt(Math.random() * 150), parseInt(Math.random() * 200), parseInt(Math.random() * 250)]);

t.push([parseInt(Math.random() * 14), parseInt(Math.random() * 31), parseInt(Math.random() * 16), parseInt(Math.random() * 500)]);
t.push([parseInt(Math.random() * 104), parseInt(Math.random() * 301), parseInt(Math.random() * 106), parseInt(Math.random() * 50)]);
t.push([parseInt(Math.random() * 300), parseInt(Math.random() * 350), parseInt(Math.random() * 400), parseInt(Math.random() * 450)]);
t.push([parseInt(Math.random() * 300), parseInt(Math.random() * 350), parseInt(Math.random() * 400), parseInt(Math.random() * 450)]);

document.write("<br>");
document.write("Matriz S(4x4)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (u = 0; u < s.length; u++) {
    document.write("<tr>");
    for (v = 0; v < s[u].length; v++) {

        document.write("<td>" + s[u][v] + "</td>");
    }
    document.write("<br>");
    document.write("<tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz T(4x4)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
for (w = 0; w < t.length; w++) {
    document.write("<tr>");
    for (x = 0; x < t[w].length; x++) {

        document.write("<td>" + t[w][x] + "</td>");
    }
    document.write("<br>");
    document.write("</tr>");
}
document.write("</table>");
document.write("</div>");

document.write("<br>");
document.write("Matriz de Adição entre S e T(4x4)");
document.write("<br>");

document.write("<div id=div3>");
document.write("<table border=1>");
document.write("<tr>");
document.write("<td>" + (s[0][0] + t[0][0]) + "</td>" + "<td>" + (s[0][1] + t[0][1]) + "</td>" + "<td>" + (s[0][2] + t[0][2]) + "</td>" + "<td>" + (s[0][3] + t[0][3]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (s[1][0] + t[1][0]) + "</td>" + "<td>" + (s[1][1] + t[1][1]) + "</td>" + "<td>" + (s[1][2] + t[1][2]) + "</td>" + "<td>" + (s[1][3] + t[1][3]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (s[2][0] + t[2][0]) + "</td>" + "<td>" + (s[2][1] + t[2][1]) + "</td>" + "<td>" + (s[2][2] + t[2][2]) + "</td>" + "<td>" + (s[2][3] + t[2][3]) + "</td>");
document.write("</tr>");
document.write("<br>");
document.write("<tr>");
document.write("<td>" + (s[3][0] + t[3][0]) + "</td>" + "<td>" + (s[3][1] + t[3][1]) + "</td>" + "<td>" + (s[3][2] + t[3][2]) + "</td>" + "<td>" + (s[3][3] + t[3][3]) + "</td>");
document.write("</tr>");
document.write("</table>");
document.write("</div>");