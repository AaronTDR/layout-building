const Categories = ({ domain }) => {
  return (
    <div>
      <ul>
        {domain.categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
