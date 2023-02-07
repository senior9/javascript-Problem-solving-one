/* Description :
The gemsToDiamond function converts gems to diamonds based on predefined conversion rates (21 gems = 1 diamond, 32 gems = 1 diamond, 43 gems = 1 diamond). If any of the inputs is not a number or empty, it returns an error message "Please enter valid numbers as input." If the total diamonds converted is more than 2000, it returns the total diamonds minus 2000, otherwise it returns the total diamonds.
*/

function gemsToDiamond(gems1,gems2,gems3){
    if (typeof gems1 !== 'number' || typeof gems2 !== 'number' || typeof gems3 !== 'number'){
        return "Please enter a valid number";
    }
    if (!gems1 || !gems2 || !gems3) {
        return "Please enter valid numbers as input.";
      }

            const gemsToDiamond1 = 21;
            const gemToDiamond2 = 32;
            const gemToDiamond3 = 43;
            const getDiamond1 = gems1* gemsToDiamond1; 
            const getDiamond2 = gems2* gemToDiamond2;
            const getDiamond3 = gems3* gemToDiamond3;
            const totalDiamond = getDiamond1 + getDiamond2 + getDiamond3 ;

            if(totalDiamond > 1000*2){
                return totalDiamond-2000;
            }
            else {
                return totalDiamond;
            }
}
const friendsDiamon = gemsToDiamond(-20, -200, -50);
console.log(friendsDiamon);