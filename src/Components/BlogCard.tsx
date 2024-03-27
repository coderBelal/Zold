interface PropsType {
  img: string;
  title: string;
}
const BlogCard = ({ img, title }: PropsType) => {
  return (
    <div className=" space-y-4">
      <img src={img} alt={title} />
      <p className=" text-gray-500 font-semibold ">
        Feb 29 2035 by:Belal Uddin
      </p>
      <h2 className=" text-4xl font-bold">{title}</h2>
      <p className=" text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, quis
        commodi enim sunt consequatur praesentium fugit beatae. Quo, doloribus
        tempore a possimus eligendi quibusdam hic nulla dolores eius, odio
        expedita!
      </p>
      <button className=" border-b border-black font-semibold italic">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;
