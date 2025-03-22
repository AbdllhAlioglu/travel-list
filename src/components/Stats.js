export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer>
        <em>Hazırlık listenize eşya eklemeye başlayın ✨</em>
      </footer>
    );

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const packedPercentage =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <footer>
      <em>
        {packedPercentage === 100
          ? `Tüm hazırlıklarınız tamamlandı! Yolculuk için hazırsınız! ✈️`
          : `Listenizde ${totalItems} eşya var ve ${packedItems} tanesini hazırladınız (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
