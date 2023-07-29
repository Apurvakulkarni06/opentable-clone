import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "../../../../utils/calculateReviewRatingAvgerage";
import Stars from "../../../components/Stars/Stars";

const Rating = ({reviews}:{reviews:Review[]}) => {
  return (
    <div className="flex items-end">
      <p>
      <Stars reviews={reviews} />
      </p>
      
      <p className="text-reg ml-3 ">{calculateReviewRatingAverage(reviews).toFixed(1)}</p>
      <div>
        <p className="text-reg ml-4 ">{reviews.length} Review{reviews.length > 1 ? "s": ""}</p>
      </div>
    </div>
  );
};

export default Rating;
