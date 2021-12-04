// 3a
import { useState } from 'react';

// 3b
function Bonus(){
  // 3d
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  // 3f
  const [nextLetter, upOneLetter] = useState(0);
  // OR
  // const [index, setIndex] = useState(0);

  // 3e
  return(
    <div>
      {/* 3f */}
      <h1>{letters[nextLetter]}</h1>
      {/* 3f */}
      <button onClick={() => upOneLetter(nextLetter + 1)}>NEXT LETTER</button>
    </div>
  );
}

// 3c
export default Bonus;