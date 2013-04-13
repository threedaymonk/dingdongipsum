function generate_a_paragraph() {
	var paragraph = "";
	var sentence_count = Math.floor(Math.random()*4) + 4;
	for (var i = 0; i < sentence_count; i++) { 
		var word_count = Math.floor(Math.random()*4) + 3;
		var sentence = generate_a_sentence(word_count);
		paragraph = paragraph + sentence;
	}
	return paragraph;
}

function generate_a_sentence(word_count) {
	var balls = "ed balls";
	var sentence = balls;
	var punctuation = [" ", " ", " ", ", "];
	for (var i = 0; i < word_count; i++) {
		sentence = sentence + punctuation[Math.floor(Math.random()*4)] + balls;
	}
	sentence = format_sentence(sentence);
	return sentence;
}

function generate_ed_balls_ipsum(paragraph_count) {
	var ipsum = "";
	for (var i = 0; i < paragraph_count; i++) {
		var paragraph = generate_a_paragraph();
		paragraph = "<p>" + paragraph + "</p>";
		ipsum = ipsum + paragraph;
	} 
	insert_paragraphs_into_page(ipsum);
}

function insert_paragraphs_into_page(ipsum) {
	$('#ed-balls').html(ipsum);
}

function format_sentence(sentence) {
	return sentence.substring(0,1).toUpperCase() + sentence.substring(1, sentence.length) + '. ';
}


$(document).ready(function(){
	generate_ed_balls_ipsum(3);

	$('#ball-slider').on('change', function(){
		var paragraph_count = $('#ball-slider').val();
		$('#ball-counter').html(paragraph_count);

		generate_ed_balls_ipsum(paragraph_count);
	});
});