function Diceroller() 
      {
        var sides =document.getElementById("di-Sides").value;
        var amount = document.getElementById("di-Amount").value;
        let counter =0;
        var rolls =[];
        let test=0;
        var results
        
        while (counter < amount)
        {
          results = Math.floor(Math.random() * sides )+ 1 ;
          rolls.push(results);
          counter++;
          
        }
        alert(rolls);
      }