import SectionTitle from "./SectionTitle";
const catData = [
  {
    img: "/pro_1.png",
    text1: "Ladies bag",
    text2: "From The India",
  },
  {
    img: "/pro_2.png",
    text1: "Ladies Bag",
    text2: "From The France",
  },
  {
    img: "/pro_3.png",
    text1: "Ladies Bag",
    text2: "From The America",
  },
  {
    img: "/pro_4.png",
    text1: "Ladies Bag",
    text2: "From The Italy",
  },
];
const Collection = () => {
  const handleClick = () => {
    alert("we are working on it");
  };
  return (
    <div className=" container pt-[140px]">
      <SectionTitle
        topHeading="Our Heading"
        mainHeading="FROM THE NEW COLLECTION"
        subHeading="Check out some of the stand outs from our collection"
      />
      <div className=" grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {catData.map((cat) => (
          <div key={cat.text1} className=" flex flex-col items-center gap-4">
            <img src={cat.img} alt={cat.img} />
            <div>
              <h2 className=" text-3xl font-bold uppercase">{cat.text1}</h2>
              <p className=" ml-4 text-gray-500">{cat.text2}</p>
              <button
                className=" text-gray-500 border bg-black text-white px-16 py-2"
                onClick={handleClick}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
