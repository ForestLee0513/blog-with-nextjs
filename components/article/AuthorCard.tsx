import Image from "next/image";

import bio from "~/bio";
import authorImage from "~/public/assets/images/author.png";

const AuthorCard = () => {
  return (
    <div className="bg-neutral-100 dark:bg-slate-800 p-4 rounded-md flex flex-col md:flex-row md:items-center">
      <div className="square aspect-square w-32 relative rounded-full overflow-hidden">
        <Image src={authorImage} alt="author" layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-col pl-2 mt-2 md:mt-0">
        <h4 className="m-0 mb-1">
          Written by <span className="font-medium">@{bio.username}</span>
        </h4>
        <p className="m-0">{bio.description}</p>
      </div>
    </div>
  );
};

export default AuthorCard;
