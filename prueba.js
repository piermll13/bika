$(document).ready(main);

var contador = 1;

function main(){
	$('.hamburguesa').click(function(){
		//simple//$('nav').toggle();
		if(contador==1){
			$('nav').animate({
				left:'0'
			});
			contador='0';
		}else{
			contador=1;
			$('nav').animate({
				left:'-100%'
			});
		}
	});
}