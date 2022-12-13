import { randomScrambleForEvent } from "https://cdn.cubing.net/js/cubing/scramble";
  
    
function getScramble()
{
    const scramble = randomScrambleForEvent("333");
    scramble.log();
    document.getElementById("scramble").innerHTML = scramble.toString();
}

export default {getScramble};