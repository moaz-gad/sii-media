const Stars = ({ stars, reviews }) => {
  const tempStars = Array.from({ length: 5 }, (_, index) => {
    const number = index + 0.5
    return (
      <span key={index} className="text-yellow-400 ">
        {stars > number ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 1l1.12 3.36L16 5.23l-2.48 2.15.74 3.91L12 10.77l-3.26 1.52.74-3.91L8 5.23 10.88 4.36 12 1z"
            />
          </svg>
        ) : stars > index ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 1l1.12 3.36L16 5.23l-2.48 2.15.74 3.91L12 10.77l-3.26 1.52.74-3.91L8 5.23 10.88 4.36 12 1z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 1l1.12 3.36L16 5.23l-2.48 2.15.74 3.91L12 10.77l-3.26 1.52.74-3.91L8 5.23 10.88 4.36 12 1z"
            />
          </svg>
        )}
      </span>
    )
  })

  return (
    <div className=" flex items-center my-2">
      <div className="flex">{tempStars}</div>
      <p className="ml-2 text-gray-600">{`(${reviews} customer reviews)`}</p>
    </div>
  )
}

export default Stars
