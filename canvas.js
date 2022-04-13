
var canvas = document.getElementById('ahorcado');
	if(canvas.getContext) {
	var ctx = canvas.getContext('2d');
	



	//dibuja la horca
	ctx.beginPath();
	ctx.moveTo(30,200);
	ctx.lineTo(30,10);
	ctx.lineTo(150,10);
	ctx.lineTo(150,20);
	ctx.stroke();


	function dibujar() {
	


		if(vidas ==3){ //dibujar cabeza
			//cabeza
			ctx.beginPath();
			ctx.arc(150,40,20,0,Math.PI * 2)
			ctx.stroke();
			}



		if(vidas==2){ //dibujar cuerpo
			//cuerpo
			ctx.beginPath();
			ctx.moveTo(150,60);
			ctx.lineTo(150,100);
			ctx.stroke();
			}

		if (vidas ==1){ //dibujar brazos
			//brazos
			ctx.beginPath();
			ctx.moveTo(150,60);
			ctx.lineTo(130,100);
			ctx.stroke();

			ctx.beginPath();
			ctx.moveTo(150,60);
			ctx.lineTo(170,100);
			ctx.stroke();
			}


		if (vidas==0) { //dibujar piernas 
			//piernas
			ctx.beginPath();
			ctx.moveTo(150,100);
			ctx.lineTo(170,130);
			ctx.stroke();


			ctx.beginPath();
			ctx.moveTo(150,100);
			ctx.lineTo(130,130);
			ctx.stroke();
			}


		} 
 	}

   