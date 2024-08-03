	
		let box_game = document.querySelector('.box-game');
		let hole = document.querySelector('.hole');
		let block = document.querySelector('.block');
		let boln = document.querySelector('.boln');
		let getHoleLeft = hole.getBoundingClientRect('left');

	
		document.querySelector('button')
		.addEventListener('click',()=>{
			document.querySelector('button').classList.toggle('play');
			if(document.querySelector('button').classList.contains('play')){
				setInterval(chekGame,1)
			}
			document.querySelectorAll('.play-inmatdet').forEach(e=>{
				e.classList.toggle('inmatdet')
			})
		})

		hole.addEventListener('animationiteration',()=>{
			
			let randomLeft = Math.random() * 240 +'px' ;
			hole.style.left = randomLeft;
			
			
		});

		
		
		function chekGame(){
			let getHoleLeft = parseInt(window.getComputedStyle(hole).getPropertyValue('left'));
			let getBlockBottom = parseInt(window.getComputedStyle(block).getPropertyValue('top')) + 30 ;
			let getBolnkTop =  parseInt(window.getComputedStyle(boln).getPropertyValue('top'));
			let getBolnkLeft =  parseInt(window.getComputedStyle(boln).getPropertyValue('left'));
	
			let valueGame= true;
			if(getBlockBottom == 426 || getBlockBottom == getBolnkTop + 2||getBlockBottom == getBolnkTop - 2){
				valueGame = false;
				if(getBolnkLeft >= getHoleLeft){
					valueGame = true;
		
				}
			}
			if(valueGame === false){
				alert('نهاية اللعبه');
				
			}
		}
	
	
		
		
		
		
		let kebord=false;
		let setClear;
		
		
		
			window.addEventListener('keydown',(e)=>{
		
			if(kebord == false){
			   if(e.code ==='ArrowRight'){
					
					setClear = setInterval(ArrowRight,1)
				}
				if(e.code ==='ArrowLeft'){
					
					setClear = setInterval(ArrowLeft,1)
				}
				kebord = true;
			}
			})
		
		window.addEventListener('keyup',(e)=>{
				
				clearInterval(setClear) 
				kebord= false;
		
		})
		
		
		function ArrowRight(){
			let getBolnkLeft =  parseInt(window.getComputedStyle(boln).getPropertyValue('left'));
			if( getBolnkLeft < box_game.clientWidth - 30 ){
				boln.style.left = getBolnkLeft + 2 +'px';
			}
		}
		function ArrowLeft(){
			let getBolnkLeft =  parseInt(window.getComputedStyle(boln).getPropertyValue('left'));
			if(getBolnkLeft >0 ){
					boln.style.left = getBolnkLeft - 2 +'px';
			}
		}
		
		
		
		
		
		
		
		
		
		
		