function insert(value) {
    document.getElementById('display').value += value;
  }
  
  function clearDisplay() {
    document.getElementById('display').value = '';
  }
  
  function backspace() {
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
  }
  
  function calculate() {
    var expression = document.getElementById('display').value;
  
    
    var unsafeChars = /[^-()\d/*+. ]/g;
    // if (unsafeChars.test(expression)) {
    //   alert('Error: Invalid input');
    //   return;
    // }
  
  
    expression = expression.replace(/x/g, '*');
  
    try {
      var result = eval(expression);
      document.getElementById('display').value = result;
    } catch (e) {
      alert('Error: ' + e.message);
    }
    
  }

  function sin(value){
    return Math.sin(value*Math.PI/180);

  
  } function cos(value){
    return Math.cos(value*Math.PI/180);

  
  }
  function tan(value){
    return Math.tan(value*Math.PI/180);

  
  }
