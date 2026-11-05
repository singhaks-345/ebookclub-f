import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
function Contects() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const ContectInfo = {
      fullname: data.name,
      email: data.email,
      message: data.message,
    };
    await axios
      .post("http://localhost:4000/contect/contect", ContectInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("Contect Details Send Successfully");
          document.getElementById("my_modal_3").close();
          setTimeout(() => {
            window.location.reload();
            localStorage.setItem("Contect", JSON.stringify(res.data.user));
          }, 3000);
        }
      })
      .catch((errors) => {
        console.log(errors);
        const msg = errors?.response?.data?.message || "Unknown server error";

        toast.error("Error:" + msg);
        setTimeout(() => {}, 3000);
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className=" mt-[100px] md:mt-[190px]  ml-[50px] md:ml-[600px] items-center justify-center">
          <h2 className="font-bold text-3xl">
            Contact <span className="text-yellow-300">Us !</span>
          </h2>
          <div className="mt-4 space-y-2">
            <span>Name</span>
            <br />
            <input
              type="text"
              placeholder="Enter your name"
              className=" w-60 md:w-96 py-1  px-3 border outline-none hover:scale-105 rounded-md"
              {...register("name", { required: true })}
            />
          </div>
          <div className="mt-4 space-y-2 ">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Email address"
              className=" w-60 md:w-96 py-1  px-3 border outline-none hover:scale-105 rounded-md"
              {...register("email", { required: true })}
            />
          </div>
          <div className="mt-4 space-y-2">
            <span>Message</span>
            <br />
            <textarea
              name="Message"
              form="usrform"
              placeholder="Type your message..."
              className=" w-60 md:w-96 h-40 py-1  px-3 border hover:scale-105 outline-none rounded-md"
              {...register("message", { required: true })}
            ></textarea>
          </div>
          <div className="justify-around mt-8">
            <button
              type="submit"
              onSubmit={handleSubmit(onSubmit)}
              className="bg-orange-500 px-3 py-1 text-white hover:bg-orange-700 hover:scale-105 rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Contects;
