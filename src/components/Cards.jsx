import react from "react";
function Cards({ item }) {
  return (
    <div className="mt-4 my-3 p-3">
      <div className=" card w-92  bg-base-100 shadow-xl dark:bg-slate-900 dark:text-white drak:border hover:scale-105 duration-200">
        <figure>
          <img src={item.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {item.name}
            <div className="badge badge-secondary">{item.category}</div>
          </h2>
          <p>{item.title}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">${item.price}</div>
            <div className="  cursor-pointer p-3 badge badge-outline hover:bg-pink-500 hover:text-white duration-200">
              <a
                href="../../../btech-oe-7-sem-machine-learning-koe073-2022.pdf"
                download=""
              >
                {" "}
                buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
