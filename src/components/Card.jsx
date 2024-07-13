import { Link } from "react-router-dom";

const Card = ({ data, image, date, route }) => {
  console.log("data: ", data);
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={image} alt="" className="w-full" />
          </div>
          <div>
            {date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose text-white">
                {date}
              </span>
            )}
            <h3>
              <Link
                to={`/${route}/${data.slug}`}
                className="mb-4 inline-block text-xl font-semibold text-slate-700 hover:text-primary  sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {data?.title}
              </Link>
            </h3>
            <p className="text-base text-slate-500 dark:text-dark-6">
              {data?.desc}
            </p>
            <p className="mb-3 font-normal text-gray-700">{data.subtitle}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;

// import React from "react";
// import { Link } from "react-router-dom";

// const Card = ({ data, route }) => {
//   return (
//     <div className="w-full bg-white border border-gray-200 rounded-lg shadow">
//       <div>
//         <img
//           className="rounded-t-lg"
//           src="https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//           // src="https://placehold.co/600x400/EEE/31343C"
//           alt="Technology Acquisitions 2021"
//         />
//       </div>
//       <div className="p-5">
//         <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
//           {data.title}
//         </h5>
// <p className="mb-3 font-normal text-gray-700">{data.subtitle}</p>
// <Link
//   to={`/${route}/${data.slug}`}
//   className=" inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-primary rounded-lg hover:bg-primary-dark focus:ring-4 focus:outline-none focus:ring-primary-light"
// >
//   Read more
//   <svg
//     className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
//     aria-hidden="true"
//     xmlns="http://www.w3.org/2000/svg"
//     fill="none"
//     viewBox="0 0 14 10"
//   >
//     <path
//       stroke="currentColor"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="2"
//       d="M1 5h12m0 0L9 1m4 4L9 9"
//     />
//   </svg>
// </Link>
//       </div>
//     </div>
//   );
// };

// export default Card;
