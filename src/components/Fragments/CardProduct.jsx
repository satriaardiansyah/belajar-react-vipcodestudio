/* eslint-disable react/prop-types */
const CardProduct = (props) => {
    const { children } = props;
    return (
        <div className="w-full max-w-xs bg-gray-800 border border-gray-200 rounded-lg shadow mx-3 my-2 flex flex-col justify-between">
            {children}
            </div>
    );
};

const Body = (props) => {
    const { children, name } = props;
    return (
        <div className="px-5 pb-5 h-full">
                    <a href="">
                        <h5 className="text-xl font-semibold tracking-tight text-white">{name}</h5>
                        <p className="text-m text-white">{children}</p>
                    </a>
                </div>
    )
}

const Footer = (props) => {
    const { price, handleAddToCart,id } = props;   
    return (
        <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-xl font-bold text-white"> {price.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</span>
                    <button className="bg-blue-500 text-white px-3 py-1 rounded-lg" onClick={() => handleAddToCart(id)}>Add to Cart</button>
                </div>
    )
}

const Header = (props) => {
    const { image } = props;    
    return (
        <a href="">
                    <img src={image} alt="product" className="p-8 rounded-t-lg" />
                </a>
    )
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

export default CardProduct;