import Image from "next/image";

import authorImage from "../../public/assets/author.png";

const Author = () => {
  return (
    <div className="bg-slate-50 p-4 rounded-md felx flex-col md:flex-row">
      <div className="square aspect-square w-32 relative rounded-full overflow-hidden">
        <Image src={authorImage} alt="author" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col pl-2 mt-2 md:mt-0">
        <h4 className="m-0 mb-1">
          Written by <span className="font-medium">@Username</span>
        </h4>
        <p className="m-0">this is description....</p>
      </div>
    </div>
  );
};

export default Author;
