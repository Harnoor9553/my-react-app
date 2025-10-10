import Profile from './assets/profile.JPG'
function Card(){
    return(
        <div className="card">
            <img className="card-img"src={Profile}alt="Profile"></img>
            <h2 className="card-item">Bro Code</h2>
            <p>I am learning React js </p>
        </div>
    );
}
 export default Card