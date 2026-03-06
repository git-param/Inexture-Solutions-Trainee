function RecommendationCard() {
  return (
    <div className="bg-card-dark border border-white/10 rounded-xl p-6 shadow-2xl">

      <h3 className="font-bold text-white mb-4">
        Recommended for You
      </h3>

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-background-dark p-3 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
            className="rounded-md mb-2"
          />
          <p className="text-xs font-bold text-white">
            Quinoa Salmon Bowl
          </p>
        </div>

        <div className="bg-background-dark p-3 rounded-lg">
          <img
            src="https://images.unsplash.com/photo-1594007654729-407eedc4be65"
            className="rounded-md mb-2"
          />
          <p className="text-xs font-bold text-white">
            Mushroom Pizza
          </p>
        </div>

      </div>

    </div>
  );
}

export default RecommendationCard;