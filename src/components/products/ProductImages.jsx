import { useState } from "react"

const ProductImages = ({ images = [[]] }) => {
  const [main, setMain] = useState(images[0])

  return (
    <section>
      <img
        src={main.url}
        alt=""
        className="main w-full h-[600px] object-cover rounded md:h-[500px] sm:h-[300px]"
      />
      <div className="gallery mt-4 grid grid-cols-5 gap-4">
        {images.map((image, index) => (
          <img
            src={image.url}
            alt=""
            key={index}
            className={`${
              image.url === main.url ? "border-2 border-primary" : ""
            } w-full h-[100px] object-cover cursor-pointer rounded sm:h-[50px] md:h-[75px]`}
            onClick={() => setMain(images[index])}
          />
        ))}
      </div>
    </section>
  )
}

export default ProductImages
