function AboutPage() {
  return (
    <div className="bg-[#FAF9F6] min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-yellow-700 mb-4 text-center">
          About GH Market
        </h1>
        <p className="text-gray-700 text-lg mb-6 text-center">
          Welcome to GH Market – your trusted online marketplace for authentic
          Ghanaian products!
        </p>
        <div className="space-y-4">
          <p>
            <span className="font-semibold text-yellow-700">Our Mission:</span>{" "}
            To connect buyers with local artisans, sellers, and small businesses
            across Ghana, making it easy to discover and purchase unique,
            high-quality products.
          </p>
          <p>
            <span className="font-semibold text-yellow-700">
              What We Offer:
            </span>{" "}
            From handwoven kente and beautiful crafts to delicious foods and
            innovative electronics, GH Market brings the best of Ghana to your
            doorstep.
          </p>
          <p>
            <span className="font-semibold text-yellow-700">
              Why Shop With Us?
            </span>
            <ul className="list-disc ml-6 mt-2 text-gray-700">
              <li>Support local entrepreneurs and communities</li>
              <li>Safe and secure shopping experience</li>
              <li>Fast delivery and reliable customer service</li>
              <li>Wide variety of authentic Ghanaian products</li>
            </ul>
          </p>
          <p>
            <span className="font-semibold text-yellow-700">Join Us:</span>{" "}
            Whether you’re a buyer looking for something special or a seller
            ready to reach new customers, GH Market is your platform for growth
            and discovery.
          </p>
        </div>
        <div className="mt-8 text-center">
          <span className="text-gray-500">Made with ❤️ in Ghana</span>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
