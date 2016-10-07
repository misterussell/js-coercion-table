function hello() {
  console.log("Hello world!");
}

var foo = [undefined , null , true , false , "" , "1.2", "one" , 0 , -0 , NaN , Infinity , -Infinity , 1 , {} , [] , [12] , ['something'], function(){}];

var bar = ['undefined' , 'null' , 'true' , 'false' , '""' , '"1.2"', '"one"' , '0' , '-0' , 'NaN' , "Infinity" , "-Infinity" , "1" , "{}" , "[]" , '[12]' , "['something']" , 'function(){}'];

document.write('<table>');
document.write('<tr><th>Origin</th><th>Number Coercion</th><th>String Coercion</th><th>Boolean Coercion</th></tr>');
for (x=0; x < foo.length; x++) {
      document.write('<tr><td>' + bar[x] + '</td><td>' + Number(foo[x]) + '</td><td>' + String(foo[x]) + '</td><td>' + Boolean(foo[x]) + '</td></tr>');
      console.log(foo[x]);
};
document.write('</table>');
