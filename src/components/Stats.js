export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="footer" style={{ marginLeft: "3rem" }}>
        <em>Start adding some items to your packing list</em>
      </p>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer>
      <em style={{ marginLeft: "3rem" }}>
        {packedPercentage === 100
          ? `You got everything. Ready to go ✈️ `
          : `You have ${totalItems} items on your list and you already packed
        ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
