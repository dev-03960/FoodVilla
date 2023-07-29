import { IMG_CDN_URL } from "../Config/conatins";

const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
         <div className="card-image">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
         </div>
         <div className="card-context">
      <h2>{name}</h2>
      <h3 >{cuisines.join(", ").substring(0,20) + " ..."}</h3>
      <h4>{lastMileTravelString} minutes</h4>

         </div>
    </div>
  );
};

export default RestrauntCard;