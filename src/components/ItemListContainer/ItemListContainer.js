import ItemCount from "../ItemCount/ItemCount";
import { products } from "../../data/Products/Products";

export default function ItemListContainer() {
    return (
            <div>
                {products.map((product, index) => (
                <ItemCount product={product} key={product.id}/>
                )
            )}
            </div>
        );
  }
