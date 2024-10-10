export default function ShoppingList({ products }: { products: string[] }) {
  if (!products.length) {
    return <h3>Список покупок пуст</h3>;
  } else {
    return (
      <ul>
        {products.map((val) => {
          return <li>{val}</li>;
        })}
      </ul>
    );
  }
}
