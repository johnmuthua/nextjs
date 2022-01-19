import { FiSave } from "react-icons/fi";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { AiOutlineAlignLeft } from "react-icons/ai";
const Editor = () => {
  return (
    <section className="m-0 p-0">
      <div className="bg-black">
        <form className="bg-white rounded-lg m-2 p-2">
          <div className="flex flex-row justify-between m-2 p-2">
            <div></div>
            <div>
              <button className="px-4 py-2 bg-green-500 text-sm text-white  rounded-md flex justify-center items-center hover:bg-transparent hover:text-green-500">
                <AiOutlineAlignLeft className="mr-1" /> Publish
              </button>
            </div>
          </div>
          <div className="p-2 rounded-lg m-1">
            <h1 className="text-xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla
              eos excepturi minus.
            </h1>
            <p className="text-lg font-thin">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
              voluptatem, perferendis error deleniti ut vero molestias
              distinctio iure hic modi ullam commodi itaque officiis non aliquam
              ipsam odio labore quia!
            </p>
            <div className="flex justify-between">
              <div></div>
              <div className="flex ">
                <button className="px-4 py-2 mr-2 bg-blue-500 text-sm text-white rounded-md flex justify-center items-center hover:bg-transparent hover:text-green-500">
                  <FiSave className="mr-1" /> Save
                </button>
                <button className="px-4 py-2 bg-red-500 text-sm text-white  rounded-md flex justify-center items-center hover:bg-transparent hover:text-green-500">
                  <RiDeleteBin2Fill className="mr-1" /> Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Editor;
