function update()
{
	var idoc = document.getElementById('iframe').contentWindow.document;

	idoc.open();
	idoc.write(editor.getValue());
	idoc.close();
}

function setupEditor()
{
    window.editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/html");
    editor.setValue(`
    <!DOCTYPE html>
    <html>
    <head>
    </head>

    <body>
    <img src="https://raw.githubusercontent.com/AishwaryaSingh21/aishwaryasingh21.github.io/master/images/type.png" style="width:70%;margin-left:auto;margin-right:auto;display:block;">

    </body>

    </html>`,1); //1 = moves cursor to end

  editor.getSession().on('change', function() {
    update();
  });

  editor.focus();
  
  
  editor.setOptions({
    fontSize: "12pt",
    showLineNumbers: false,
    showGutter: false,
    vScrollBarAlwaysVisible:true,
    enableBasicAutocompletion: false, enableLiveAutocompletion: false
  });

  editor.setShowPrintMargin(false);
  editor.setBehavioursEnabled(false);
}

setupEditor();
update();

//TOGGLE DIV MOBILE
function code()
{
  if($("#header-ide").is(":visible"))
      {
          $('#output').hide();
          $('#code').show();
          $('.cbt').addClass("active");
          $('.obt').removeClass("active");

          
      }
}
function output()
{
  if($("#header-ide").is(":visible"))
      {
          $('#output').show();
          $('#code').hide();
          $('.obt').addClass("active");
          $('.cbt').removeClass("active");
          
      }
}

//TOGGLE DIV DESKTOP
function code_desktop()
{
  if($("#header").is(":visible"))
      {
          $('#output').hide();
          $('#code').show();
          $('#code').addClass("col-md-12");
          $('#code').removeClass("col-md-6");

          $('.cbt').addClass("active");
          $('.obt').removeClass("active");  
      }
}
function output_desktop()
{
  if($("#header").is(":visible"))
      {
        $('#output').show();
        $('#code').hide();
        $('#output').addClass("col-md-12");
        $('#output').removeClass("col-md-6");

        $('.obt').addClass("active");
        $('.cbt').removeClass("active");  
      }
}