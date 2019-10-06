//huiswerk opdracht 1
{
  	const lapRounds = [2.99,  3.00, 3.01, 4.01, 2.79, 2.88, 3.10, 4.12];

    var rand = lapRounds[Math.floor(Math.random() * lapRounds.length)];

    console.log(rand);
}
//huiswerk opdracht 2
{
  const allMyRecords = [
   ["The Who - Pinball Wizard", "Rolling Stones - Exile on main street", "Police - Message in a bottle"],
   ["De Dijk - Alle 40 Goed", "Het Goede Doel - Belgie", "Doe Maar - skunk"]
];

  allMyRecords.forEach(function(value, index, arr){
    console.log(value);
  });
}

//huiswerk opdracht 3
{
  const filteredLapRoundsWithForLoop = function () {
   let newArray = [];
   for (let i = 0; i < lapRounds.length; i++) {

       if (lapRounds[i] < 4) {
           newArray.push(lapRounds[i]);
       }
   }
   return newArray;
 }
}
