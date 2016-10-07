var foo = [undefined , null , true , false , "" , "1.2", "one" , 0 , -0 , NaN , Infinity , -Infinity , 1 , {} , [] , [12] , ['something']];

document.write('<table>');
document.write('<tr><th>Origin</th><th>Number Coercion</th><th>String Coercion</th><th>Boolean Coercion</th></tr>');
for (x=0; x <= 10; x++) {
      document.write('<tr><td>' + foo[x] + '</td><td>' + Number(foo[x]) + '</td><td>' + String(foo[x]) + '</td><td>' + Boolean(foo[x]) + '</td></tr>');
};
document.write('</table>');
