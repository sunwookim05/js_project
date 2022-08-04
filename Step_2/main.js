let str = '';	


for (let i = 97; i <= 122; i++) {
    document.write(String.fromCharCode(i));
    
    str += String.fromCharCode(i);
}

document.write("<br>");

for (let i = 97; i <= 122; i++) {
    document.write(String.fromCharCode(i));
    document.write("<br>");
    
    str += String.fromCharCode(i);
}