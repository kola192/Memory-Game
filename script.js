//Splash screen setups
let control = document.querySelector('.control-button'),

    span = document.querySelector('.control-button span'),

    myInput = document.querySelector('.input'),

    nameTage = document.querySelector('.name');

    span.onclick =function () {
		
	control.classList.add('clicked');

	myInput.focus();
 
}

myButton = document.querySelector('.btn'),

controls = document.querySelector('.controls');

myButton.onclick = function() {

	let playerName = myInput.value;

	controls.classList.add('show');

	if (playerName == null || playerName == '') {

		nameTage.textContent = 'Unknown';

	} else {

		nameTage.textContent = playerName;
			
}

}


kickOffBtn = document.querySelector('.kick-off');

kickOffBtn.onclick = function() {
	
		control.classList.remove('clicked');
	
		controls.classList.remove('show');

		controls.style.display = "none";

	}

//Game setups
let duration = 500,

    blocksContainer = document.querySelector('.game-blocks-container'),

		blocks = Array.from(blocksContainer.children),

		orderRange = [...Array(blocks.length).keys()],
		
		congratulationContainer = document.querySelector('.congratulation-container');

	shuffle(orderRange);

	blocks.forEach((block, index) => {

		block.style.order = orderRange[index];

		block.addEventListener('click', function() {

			flipBlock(block);

		});

	});


//Flip block function
function flipBlock(selectedBlock) {

	selectedBlock.classList.add('fliped');

	let allFlipedBlocks = blocks.filter(flipedBlock => flipedBlock.classList.contains('fliped'));

	if (allFlipedBlocks.length === 2) {

		stopClicking();

		checkMatchedBlocks(allFlipedBlocks[0], allFlipedBlocks[1]);

	}	

}


//Stop clicking function
function stopClicking() {

	blocksContainer.classList.add('no-click');

	setTimeout(() => {

	blocksContainer.classList.remove('no-click');	

	}, duration);

};

//shuffle function
function shuffle(array) {

	let current = array.length,

		temp,

		random;

	while (current > 0) {

		random = Math.floor(Math.random() * current);

		current--;

		temp = array[current];

		array[current] = array[random];

		array[random] = temp;

	}

	return array;

}


//Check matched blocks function
function checkMatchedBlocks(firstBlock, secondBlock) {

	let triesElement = document.querySelector('.tries span');

	if (firstBlock.dataset.animals === secondBlock.dataset.animals) {

		firstBlock.classList.remove('fliped');

		secondBlock.classList.remove('fliped');



		firstBlock.classList.add('matched');

		secondBlock.classList.add('matched');

		let allMatchedBlocks = blocks.filter(matchedBlock => matchedBlock.classList.contains('matched'));


		if (allMatchedBlocks.length === blocks.length) {
		
		  triesElement.textContent = 0;
			
			success();

		}

	} else {

		triesElement.textContent = parseInt(triesElement.textContent) + 1;


		setTimeout(() => {

		firstBlock.classList.remove('fliped');

		secondBlock.classList.remove('fliped');

		}, duration);


	}

}


//here is where I'am getting troubles (uncomment the next sectoin)

/*

//Success function
function success() {
	
	
	
	setTimeout(() => {
		 congratulationContainer.classList.add('success')
		
	}, duration);
	
	//play again button
	document.querySelector('.play-again').onclick = function() {	
		
		blocks.forEach((block, index) => {

		block.style.order = orderRange[index];

		block.classList.remove('matched');			

		block.addEventListener('click', function() {

			flipBlock(block);

		});

		});
		
		congratulationContainer.style.display = 'none';
	
};

	//leave button
	document.querySelector('.leave').onclick = function() {
		
		reset();
		
	}

}


//reset function
function reset() {
	
	blocks.forEach((block, index) => {

		block.style.order = orderRange[index];

		block.classList.remove('matched');			

		block.addEventListener('click', function() {

			flipBlock(block);

		});

		});
		
		congratulationContainer.style.display = 'none';
	
	setTimeout(() => {
		
		controls.style.display = "block";
		
	}, duration);
	
};


*/


















