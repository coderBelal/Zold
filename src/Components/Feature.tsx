const Feature = () => {
  return (
    <div className=" container pt-[180px]">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          {" "}
          <img src="/makeup.jpg" alt="" />
        </div>
        <div>
          <h2 className=" uppercase font-extrabold text-5xl">Makeup</h2>
          <p className=" ml-8 italic text-gray-500 text-xl py-6">
            Lorem, ipsum dolor consectetur adipisicing elit.
          </p>
          <div className=" bg-black h-[4px] w-[100px] mt-2 mb-4"></div>
          <p className=" text-gray-500 text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            reiciendis optio corporis cupiditate culpa veniam iure repellat
            quidem! Deserunt minus sapiente nisi dignissimos distinctio!
            Voluptas nihil ab quasi sint a? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Animi reiciendis optio corporis
            cupiditate culpa veniam iure repellat quidem! Deserunt minus
            sapiente nisi dignissimos distinctio! Voluptas nihil ab quasi sint
            a?
          </p>

          <button className=" text-gray-500 border border-black text-black px-16 py-2">
            View More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
