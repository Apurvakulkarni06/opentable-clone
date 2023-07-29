import { Review } from "@prisma/client";
import ReviewCard from "../../../components/ReviewCard/ReviewCard";

const Reviews = ({ reviews }: { reviews: Review[] }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 pb-5 border-b">
        What {reviews.length} {reviews.length > 1 ? "people" : "person"} are
        saying
      </h1>

      {reviews &&
        reviews.map((review) => (
          <ReviewCard
            userInitials={review.first_name[0] + review.last_name[0]}
            username={review.first_name + " " + review.last_name}
            review={review.text}
            rating={review.rating}
            key={review.id}
          />
        ))}
    </div>
  );
};

export default Reviews;
