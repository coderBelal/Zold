const catData = [
  {
    img: "/cat_1.png",
    text1: "Flats",
    text2: "From The Spring",
  },
  {
    img: "/cat_2.png",
    text1: "Boots",
    text2: "From The Fall",
  },
  {
    img: "/cat_3.png",
    text1: "Sandals",
    text2: "From The Summer",
  },
];
const Category = () => {
  return (
    <div className=" container pt-[140px]">
      <div className=" grid grid-cols-1 sm:grid-cols-3">
        {catData.map((cat) => (
          <div key={cat.text1} className=" flex flex-col items-center gap-4">
            <img src={cat.img} alt={cat.img} />
            <div>
              <h2 className=" text-3xl font-bold uppercase">{cat.text1}</h2>
              <p className=" ml-4 text-gray-500">{cat.text2}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
