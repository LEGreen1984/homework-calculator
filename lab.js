
   var calculator = prompt ("hello, would you like to use a (b)asic or (a)dvanced calculator?").toLowerCase();
    if (calculator == "b")
    {var basicFunction = prompt("Would you like to use the (a)dd (d)ivide, (m)ultiply or (s)ubtract?").toLowerCase();
    }
      if (calculator == "b" && basicFunction == "d"){
        var number = prompt("enter a number");
        var divideBy = prompt("divide by")
        alert(result = number / divideBy);
      }
      else if (calculator == "b" && basicFunction == "a"){
        var numberToAdd = prompt("enter a number");
        var nowAdd = prompt("Plus");
        alert(result = parseInt(numberToAdd) + parseInt(nowAdd));
      }
      else if (calculator == "b" && basicFunction == "m"){
        var numberToMultiply = prompt("enter a number");
        var multiplyBy = prompt("Times by")
        alert(result = numberToMultiply * multiplyBy);
      }
      else if (calculator == "b" && basicFunction == "s"){
        var number = prompt("enter a number");
        var takeAway = prompt("minus")
        alert(result = number - takeAway);
      }

      if (calculator == "a")
      {var basicFunction = prompt("Would you like to use the (s)quare root or (p)ower of?").toLowerCase();
      }
        if (calculator == "a" && basicFunction == "s"){
          var number = prompt("enter a number");
          alert(result = Math.sqrt(number));
        }
        else if (calculator == "a" && basicFunction == "p"){
          var number = prompt("enter a number");
          var powerTo = prompt("to the power of");
          alert(result = Math.pow(number, powerTo));
        }



    // else if (calculator == "advanced" && advancedFunction == "Square     Root"){
    //   var number = prompt("enter a number");
    //   var divideBy = prompt("divide by")
    //   alert(result = number  divideBy);
    // var advanced-calculation =
    // if (calculator == "advanced" && )
