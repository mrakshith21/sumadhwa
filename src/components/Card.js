import '../styles/style.css';

function Card({imgSrc, iconClass, title, description}){

    return (
        <div className="col-md-12 col-lg-4 align-items-stretch d-flex mb-5 mb-lg-5">
            <div className="icon-box">
                {/* <!-- <div className="icon"><i className="bx bx-tachometer"></i></div> --> */}
                <div className="icon">
                    {iconClass ? <i className={iconClass}></i>: ""}                    
                    {imgSrc ? <img src={require("../images/" + imgSrc)} alt="" className="icon-img" /> : ""}
                </div>
                <h4 className="title">
                    {title}
                </h4>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card;