interface Props {
  title: string;
  date: string;
  readingTime: string;
  description: string;
}

const Header = ({ title, date, readingTime, description }: Props) => {
  return (
    <div>
      <h1 className="mb-0">{title}</h1>
      <p>{description}</p>
      <p className="my-0">
        작성일: {date} <span>({readingTime})</span>
      </p>
      <hr className="my-4" />
    </div>
  );
};

export default Header;
