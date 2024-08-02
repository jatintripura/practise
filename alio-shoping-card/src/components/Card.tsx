import { clearCard, selectItemCard } from "@/redux/feature/cardSlics";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

function Card() {
  const cardItem = useSelector(selectItemCard);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-col items-center gap-y-4 py-4">
        {cardItem.length == 0 && (
          <div className="">
            <p className="text-xl font-bold text-center py-4">
              Your card is empty
            </p>
            <Link to={"/"}>
              <Button type="button" variant={"outline"}>
                Please continue shopping
              </Button>
            </Link>
          </div>
        )}

        {cardItem.map((item: any) => {
          return (
            <>
              <div
                key={item.id}
                className="w-[600px] flex  justify-between gap-4 border p-4 items-center"
              >
                <div className="w-[300px] h-30">
                  <img src={item.imgSrc} alt="" />
                </div>
                <div className="flex flex-col gap-y-4">
                  <p>{item.title}</p>
                  <p>{item.description}</p>

                  <div className="flex items-center gap-x-10">
                    <h3> $ {item.price}</h3>
                    <Button type="button" variant={"outline"}>
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
        {cardItem.length != 0 && (
          <Button
            onClick={() => dispatch(clearCard())}
            variant={"outline"}
            type="button"
          >
            Clear Card
          </Button>
        )}
      </div>
    </>
  );
}

export default Card;
