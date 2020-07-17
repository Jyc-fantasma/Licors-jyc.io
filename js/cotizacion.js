function cotizar(){
	var p1 = document.cuestionario.p1.value
	var p2 = document.cuestionario.p2.value
	var p3 = document.cuestionario.p3.value
	var p4 = document.cuestionario.p4.value
	var p5 = document.cuestionario.p5.value
	var p6 = document.cuestionario.p6.value
	var p7 = document.cuestionario.p7.value
	var p8 = document.cuestionario.p8.value
	var p9 = document.cuestionario.p9.value
	var p10 = document.cuestionario.p10.value
	var p11 = document.cuestionario.p11.value
	var p12 = document.cuestionario.p12.value
	var total=0
	total=total+parseInt(p1)+parseInt(p2)+parseInt(p3)+parseInt(p4)+parseInt(p5)+parseInt(p6)+parseInt(p7)+parseInt(p8)+parseInt(p9)+parseInt(p10)+parseInt(p11)+parseInt(p12)
	document.getElementById("resp").innerHTML = total;
}