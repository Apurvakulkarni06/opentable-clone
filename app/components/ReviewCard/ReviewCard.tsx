import Stars from "../Stars/Stars";

interface ReviewCardProp {
    userInitials: string;
    username: string;
    review: string;
    rating: number
  }
const ReviewCard = ({userInitials, username, review, rating}: ReviewCardProp) => {
  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-500 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl uppercase">{userInitials}</h2>
          </div>
          <p className="text-center">{username}</p>
        </div>
        <div className="ml-8 w-5/6">
          <div className="flex items-center">
            <div className="flex mr-5">
              <Stars rating={rating} />
            </div>
          </div>

          <div className="mt-5">
            <p className="text-lg font-light">
              {review}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
