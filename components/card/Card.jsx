import { HiDotsVertical } from "react-icons/hi";
import { FcLink, FcVoicePresentation, FcLike, FcLeave } from "react-icons/fc";

import Image from "next/image";
function Card({ feed }) {
  return (
    <div className="grid md:grid-cols-3">
      {feed.map((item) => (
        <div key={feed.id} className="py-2 mx-2">
          <div className="">
            <div className="flex flex-col md:flex  rounded-xl p-2 md:p-0  h-auto w-auto bg-gray-900 border-2 border-solid hover:border-green-300 text-white">
              <div className=" m-2 rounded-xl">
                <div className="flex flex-row justify-between px-4 py-2 items-center">
                  <div className="relative">
                    <Image
                      src="/resources/imgs/user.jpg"
                      height={60}
                      width={60}
                      className="rounded-full"
                      priority
                    />
                  </div>
                  <div>
                    <HiDotsVertical />
                  </div>
                </div>
                <div className="pb-2">
                  <h1 className="font-extralight">{item.title}</h1>
                </div>
                <div className="flex-1 relative">
                  <Image
                    src="/resources/imgs/code.jpg"
                    height={400}
                    width={800}
                    priority
                    className="rounded-lg items-center"
                  />
                </div>
                <div className="grid grid-cols-3">
                  <div className="flex flex-row  pr-1 items-center">
                    <FcVoicePresentation className="text-4xl" />
                    {item.answers} Answers
                  </div>
                  <div className="flex flex-row  pr-1  items-center">
                    <FcLink className="text-4xl" />
                    {item.views} Views
                  </div>
                  <div className="flex flex-row  pr-1  items-center">
                    <FcLike className="text-4xl" />
                    {item.likes} Likes
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
