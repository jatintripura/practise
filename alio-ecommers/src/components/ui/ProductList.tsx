import ProductCard from "./ProductCard";

function ProductList({ data }) {
  return (
    <div className="flex flex-wrap items-start gap-4">
      {data?.map((item) => {
        return <ProductCard item={item} />;
      })}
    </div>
  );
}

export default ProductList;
