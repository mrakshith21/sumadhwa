import '../styles/style.css';

function SolutionsCard({imgSrc, title, bullets}){
    console.log(bullets)
    return (
        <div className="col-md-12 col-lg-4 align-items-stretch d-flex mb-5 mb-lg-5">
            <div className="icon-box solutions-card">
                {/* <!-- <div className="icon"><i className="bx bx-tachometer"></i></div> --> */}
                <div className="icon">                  
                    {imgSrc ? <img src={require("../images/" + imgSrc)} alt="" className="icon-img" /> : ""}
                </div>
                <h4 className="title">
                    {title}
                </h4>
                <div className='description'>
                    <ul>
                        {
                            bullets.map(bullet => {
                                return <li>{bullet}</li>
                            })
                        }
                    </ul>   
                </div>
            </div>
        </div>
    )
}

export default SolutionsCard;