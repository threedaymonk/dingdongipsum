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
	var dingdong = "ding dong";
	var sentence = dingdong;
	var punctuation = [" ", " ", " ", ", "];
	for (var i = 0; i < word_count; i++) {
		sentence = sentence + punctuation[Math.floor(Math.random()*4)] + dingdong;
	}
	sentence = format_sentence(sentence);
	return sentence;
}

function generate_dingdong_ipsum(paragraph_count) {
	var ipsum = "";
	for (var i = 0; i < paragraph_count; i++) {
		var paragraph = generate_a_paragraph();
		paragraph = "<p>" + paragraph + "</p>";
		ipsum = ipsum + paragraph;
	} 
	insert_paragraphs_into_page(ipsum);
}

function insert_paragraphs_into_page(ipsum) {
	$('#dingdong').html(ipsum);
}

function format_sentence(sentence) {
	return sentence.substring(0,1).toUpperCase() + sentence.substring(1, sentence.length) + '. ';
}


$(document).ready(function(){
	generate_dingdong_ipsum(3);

	$('#ball-slider').on('change', function(){
		var paragraph_count = $('#ball-slider').val();
		$('#ball-counter').html(paragraph_count);

		generate_dingdong_ipsum(paragraph_count);
	});
});
