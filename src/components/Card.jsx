import { Link } from "react-router-dom";
import { supabase } from "../supabase/supabase";
import { useEffect, useState } from "react";

const Card = ({ data, route, bucketName }) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchImageUrl = async () => {
      try {
        console.dir(data)
        const { data:imgPath, error } = await supabase
          .storage
          .from(bucketName)
          .getPublicUrl(data.thumbnail);

        if (error) {
          console.error('Error fetching image URL:', error);
          return;
        }
        console.log(imgPath.publicUrl)
        setImageUrl(imgPath.publicUrl);
      } catch (error) {
        console.error('Unexpected error:', error);
      }
    };

    fetchImageUrl();
  },[data.thumbnail])
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/2 ">
      <Link
            to={`/${route}/${data.slug}`}
            className="w-full mb-4 inline-block text-xl font-semibold text-dark hover:text-primary sm:text-2xl lg:text-xl xl:text-2xl"
          >
        <div className="mb-10 w-full">
          <div className="mb-2 overflow-hidden rounded ">
            <img src={imageUrl} alt="" className="w-full" />
          </div>
          <div>
            {data.date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {data.date}
              </span>
            )}
            <h3>
                {data?.title}
            </h3>
            <p className="text-sm font-normal text-body-color text-gray-600">
              {data.subtitle}
            </p>
          </div>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Card;
