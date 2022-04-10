import './style.css'

function Header(){
    return(
        <div className="card bg-dark text-white">
            <img src={process.env.PUBLIC_URL + '/salon.jpg'} className="card-img" alt=".."/>
                <div className="card-img-overlay">
                    <h1 className="card-title">Kosmetický salon</h1>
                </div>
        </div>
    )
}
export default Header;