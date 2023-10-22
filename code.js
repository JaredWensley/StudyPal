onEvent("text_input1", "click", function( ) {
  setText("text_input1", "");
});
onEvent("text_input2", "click", function( ) {
  setText("text_input2", "");
});
onEvent("button1", "click", function( ) {
  setScreen("screen2");
});
onEvent("text_input1", "click", function( ) {
  setText("text_input1", "");
});
onEvent("button2", "click", function( ) {
  setScreen("screen3");
});
onEvent("prev", "click", function( ) {
  setScreen("screen2");
});
onEvent("Home", "click", function( ) {
  setScreen("screen1");
});
