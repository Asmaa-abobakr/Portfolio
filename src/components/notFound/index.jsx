import notFound from "./../../assets/images/notfound.svg";
const NotFound = ()=>{
    return (
        <>
            <div className="w-75 mx-auto text-center pt-5">
                 <img src={notFound} alt="not-found-img" className="empty-cart-img" />
            </div>
        </>
    )
}

export default NotFound;