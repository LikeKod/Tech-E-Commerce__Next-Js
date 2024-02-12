
import "./style.css"

export default function ShoppingItem({ item, orders }) {

    const order = orders.orders.find(el => el.id == item )

    return (
        <div className="shopping__cart-item">
            <div className="shopping__cart-info">
                <div className="shopping__cart-info__product">
                    {/* <img src={order.images[0].src} alt={order.name} /> */}
                    {order.name}

                </div>
                <div className="shopping__cart-article">#25139526913984</div>
            </div>
            <div className="shopping__cart-pagintaion">
                <button className="minus">-</button>
                <div className="shopping__cart-score"></div>
                <button className="plus">+</button>
            </div>
            <div className="shopping__cart-price">50$</div>
            <div className="shopping__cart-delete">+</div>
        </div>
    );
}
