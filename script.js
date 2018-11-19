$(document).ready(function() {

	$("p").click(function() {
		$("p").css("color", "red");
	});

	$("h2").hover(function() {
		$("h2").css("background", "lightblue");
	});

	/*Here only works for HTML h2, to make it work in all, we need to repeat the code for each*/

	$("#hr_html").hover(function() { //HTML h2 increase font-size when hover
		$("#hr_mysql").removeClass("h2_font_size");
		$("#hr_python").removeClass("h2_font_size");
		$("#hr_jquery").removeClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
		$("#hr_html").addClass("h2_font_size");
	});

	$("#hr_mysql").hover(function() { //MySqL h2 increase font-size when hover

		$("#hr_python").removeClass("h2_font_size");
		$("#hr_jquery").removeClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
		$("#hr_mysql").addClass("h2_font_size");
	});

	$("#hr_python").hover(function() { //python h2 increase font-size when hover

		$("#hr_python").addClass("h2_font_size");
		$("#hr_jquery").removeClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
		$("#hr_mysql").removeClass("h2_font_size");
	});

	$("#hr_jquery").hover(function() { //hquery h2 increase font-size when hover

		$("#hr_python").removeClass("h2_font_size");
		$("#hr_jquery").addClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
		$("#hr_mysql").removeClass("h2_font_size");
	});

	$("#hr_django").hover(function() { //django h2 increase font-size when hover

		$("#hr_python").removeClass("h2_font_size");
		$("#hr_jquery").removeClass("h2_font_size");
		$("#hr_django").addClass("h2_font_size");
		$("#hr_css").removeClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
		$("#hr_mysql").removeClass("h2_font_size");
	})

	$("#hr_css").hover(function() { //css h2 increase font-size when hover

		$("#hr_python").removeClass("h2_font_size");
		$("#hr_jquery").removeClass("h2_font_size");
		$("#hr_django").removeClass("h2_font_size");
		$("#hr_css").addClass("h2_font_size");
		$("#hr_html").removeClass("h2_font_size");
		$("#hr_mysql").removeClass("h2_font_size");
	});

	/*-------------Bottom change brackgroung color when hovered*/

	$(".bottom_button").mouseover(function() {
		$("body").css("background-color", "black");
	});

	/*-------------Bottom change brackgroung color when no hovered*/

	$(".bottom_button").mouseleave(function() {
		$("body").css("background-color", "grey");
	});

	/*-------------------CHALLENGE  EFFECTS----------------------*/

	/*------------------first button hide when clicked-------- */

	$("#my_button").on("click", function() {
		$("#my_button").hide("slow");
	});

	/*------------------ P hide when clicked- mysql button ------- */

	$("#mysql_button").on("click", function() {
		$("#mysql_p").slideToggle("slow");
	});

	/*----------------------------------------------Use fadeTo--*/

	$("#python-button").mouseover(function() {
		$("#python-button").fadeTo(1000, 0.5);
	});
	$("#python-button").mouseleave(function() {
		$("#python-button").fadeTo(1000, 1);
	});


	/*-------------------Original code of the challenge before I add something*/

	$("#stream1_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
		$(".stream3").addClass('highlight_stream');
	});


});
