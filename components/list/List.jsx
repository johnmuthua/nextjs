import { FcLink, FcVoicePresentation, FcLike, FcLeave } from "react-icons/fc";
import { Data } from "./ListData";

function List() {
  return (
    <div className="">
      {Data.map((item) => (
        <div className="mt-4 py-4 mx-2 rounded-xl p-2 h-auto w-auto bg-gray-900 border-2 border-solid hover:border-green-300 text-white ">
          <div key={item.id} className="flex flex-row justify-between">
            <div>User</div>
            <div>Beginner</div>
          </div>
          <div className="font-extrabold">{item.title}</div>
          <div className="font-thin">{item.content}</div>
          <div className="flex flex-row justify-between items-center">
            <div className="grid grid-cols-3">
              <div className="flex flex-row  pr-1 justify-between items-center">
                <FcVoicePresentation className="text-4xl" />
                {item.answers} Answers
              </div>
              <div className="flex flex-row  pr-1 justify-between items-center">
                <FcLink className="text-4xl" />
                {item.views} Views
              </div>
              <div className="flex flex-row  pr-1 justify-between items-center">
                <FcLike className="text-4xl" />
                {item.likes} Likes
              </div>
            </div>
            <div className="  py-1 justify-between items-center">
              <FcLeave className="text-4xl" />
              {item.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default List;
