import React, { useState } from 'react';

// Componente contador com estado local
export default function Contador({ inicial = 0 }) {
  const [count, setCount] = useState(inicial);

  return (
    <div>
      <p>Contador: {count}</p>
      <button onClick={() => setCount(c => c - 1)}>-</button>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}
