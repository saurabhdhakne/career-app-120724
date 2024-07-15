import { Link } from "react-router-dom";

const Card = ({ data, image, date, route, CardDescription }) => {
  console.log("data: ", data);
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
      <Link
            to={`/${route}/${data.slug}`}
            className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {route} / {data.slug} {date}
              </span>
            )}
            <h3>
            
                {data?.title}
             
            </h3>
            <p className="text-base text-body-color text-gray-700">
              {CardDescription}
            </p>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
