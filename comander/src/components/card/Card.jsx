import "./card.css";

const Card = ({ key, post, clic }) => {

  return (
    <div onClick={clic(key)}  className="card">
      <div className="info">
        <img src={post.userImg} alt="" className="userImg" />
        <span>{post.fullname}</span>
      </div>
      
    </div>
  );
};

export default Card