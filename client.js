
  var editor = document.getElementById("wysiwyg");
  var doc = editor.contentDocument//? editor.contentDocument: editor.contentWindow.document; // this ternar operator is in case that browser(ex. before older than IE8, doesn't support contentDocument property)
  doc.designMode = 'on'; 

  var handlers = {


      boldText: function() {
        doc.execCommand('Bold');
      },

      italicText: function() {
        doc.execCommand('Italic');
      },

      underlineText: function() {
        doc.execCommand('Underline');
      },

      printDocument: function() {
        window.print();
      },

      changeFontColor: function(event) {
         doc.execCommand('ForeColor',false,  event.target.value);
      },

      changeBckgColor: function(event) {
          var textArea = document.getElementById("textArea");
          textArea.style.background= event.target.value;

      },

      changeFontFamily: function(event) {
          doc.execCommand('FontName',false,  event.target.value);
      },

      changeFontSize: function(event) {
          doc.execCommand('FontSize', false,  event.target.value);
      }
  }




  


