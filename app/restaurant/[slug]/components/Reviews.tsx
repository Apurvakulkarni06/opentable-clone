import ReviewCard from "../../../components/ReviewCard/ReviewCard";

const Reviews = (props:{reviews:any}) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 pb-5 border-b">
        What people are saying
      </h1>

      {/* Review Cards */}
      {/* Review 1 */}
      <ReviewCard
        userInitials="MJ"
        username="Micheal Jorden"
        date="25st Dec 2022"
        rating="*****"
        review={props.reviews[0]["review"]}
      />

      {/* Review 2 */}
      <ReviewCard
        userInitials="AK"
        username="Anuj Kale"
        date="22st Nov 2021"
        review={props.reviews[1]["review"]}
        rating="****"
      />
      {/* Review Cards */}
    </div>
  );
};

export default Reviews;
