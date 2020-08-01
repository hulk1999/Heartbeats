$(() => {

	const COUNTS = 10;

	var currentCount = 0;
	var lastClick = 0;
	var currentClick = 0;
	var timeArr = [];

	$('#instruction').on('click', () => {

		$('#instruction').css('display', 'none');
		$('#counter').css('display', 'block');
		$('#counter-value').html(++currentCount);

		currentClick = Date.now();

	});

	$('#counter').on('click', () => {

		lastClick = currentClick;
		currentClick = Date.now();
		timeArr[currentCount-1] = currentClick - lastClick;

		$('#counter-value').html(++currentCount);
		$('#counter-animation').css('display', 'none');
		$('#counter-animation').width();
		$('#counter-animation').css('display', 'block');

		if (currentCount == COUNTS){

			var sum = 0;
			for (var i = 0; i < COUNTS-1; i++) sum += timeArr[i];
			var bpm = 60000/(sum/(COUNTS-1));

			$('#counter').css('display', 'none');
			$('#result').css('display', 'block');
			$('#result-value').html(bpm.toFixed(1) + ' BPM');

		}

	});

	$('#result-redo').on('click', () => {
		$('#result').css('display', 'none');
		$('#instruction').css('display', 'block');
		currentCount = 0;
	});

});