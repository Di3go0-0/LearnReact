// OBjetivo: memorizar (cache) el resultado de una funcion costosa, para evitar  que se vuelva a llamar el metodo
// Controla si el beneficio de memorizarlo es superior al recalcularlo

import { useMemo, useState } from "react";

// Ejmplo:
// Tenemos una lista de compras y ya calculaste el costo toal de hacer toda compra,
// si no agregamos ni tampoco cambio nada, cual es el costo total?

interface Item {
  id: number;
  name: string;
  price: number;
}

export const ShoppingCart = () => {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      name: "Manzana",
      price: 1.4,
    },
    {
      id: 2,
      name: "Pera",
      price: 12.4,
    },
    {
      id: 3,
      name: "Pineaple",
      price: 2.4,
    },
  ]);

  const [discount, setDiscount] = useState<number>(0);

  // Use Memo Recibe un metodo y el cuando actualizarlo
  const totalCost = useMemo(
    () => items.reduce((total, item) => total + item.price, 0),
    [items],
  );

  const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

  const addItem = () => {
    const NewItem = {
      id: items.length + 1,
      name: `Producto ${items.length + 1}`,
      price: Math.random() * 5,
    };
    setItems([...items, NewItem]);
  };

  return (
    <div>
      <h2>Lista de compras</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name}: ${item.price.toFixed(2)}
          </li>
        ))}
      </ul>

      <p>Costo Total : ${totalCost.toFixed(2)}</p>

      <p>
        Descuento: $
        <input
          type="number"
          value={discount}
          onChange={(e) => setDiscount(parseFloat(e.target.value) || 0)}
        />
      </p>

      <p>Costo Final: ${finalCost.toFixed(2)}</p>
      <button onClick={addItem}>Add Item</button>
    </div>
  );
};
