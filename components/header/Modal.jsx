import { FaTimes } from "react-icons/fa";

function Modal() {
  return (
    <section>
      <div className="bg-black bg-opacity-50 absolute inset-0 flex justify-center items-center">
        <form className="bg-white rounded-lg m-2">
          <div className="flex flex-row justify-between m-2">
            <div>
              <button className="px-4 py-2 bg-green-500 text-lg text-white  rounded-md">
                Publish
              </button>
            </div>
            <div>
              <button className="p-2 rounded-full text-red-700 top-4 left-12 transition hover:text-white hover:bg-red-800">
                <FaTimes />
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
              <div>
                <button className="px-4 py-2 bg-blue-500 text-lg text-white mr-2 rounded-md">
                  Save
                </button>
                <button className="px-4 py-2 bg-red-500 text-lg text-white  rounded-md">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Modal;
