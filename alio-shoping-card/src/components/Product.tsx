import { useDispatch, useSelector } from "react-redux";
import { Products } from "../data";
import { Button } from "./ui/button";
import { addToCard, selectItemCard } from "@/redux/feature/cardSlics";

function Product() {
  const cardItem = useSelector(selectItemCard);

  const dispatch = useDispatch();
  const handleAddToCard = (item: any) => {
    dispatch(addToCard(item));
  };
  console.log("carditem", cardItem);
  return (
    <div className=" container mx-auto flex flex-wrap items-start justify-between gap-4 ">
      {Products.map((item) => {
        return (
          <div key={item.id}>
            <div className="border p-4 flex flex-col gap-y-4 w-[300px] bg-slate-100">
              <img src={item.imgSrc} alt="" className="w-full " />
              <p>{item.title}</p>
              <p>{item.description}</p>
              <div className="flex items-center justify-between ">
                <h3> $ {item.price}</h3>
                <Button
                  type="button"
                  variant={"outline"}
                  onClick={() => handleAddToCard(item)}
                >
                  Add to card
                </Button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
