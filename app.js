var today = new Date();
var year = today.getFullYear();

var curentYear = document.getElementById("copy-right");
curentYear.innerHTML = '<p> Copyright &copy;' + year + ' <a class="footer-name" href="index.html"> Biniyam Alemu. </a>' + ' All rights reserved.' + '</p>';
