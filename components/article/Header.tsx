interface Props {
  title: string;
  date: string;
  readingTime: string;
}

const Header = ({ title, date, readingTime }: Props) => {
  return (
    <div>
      <h1 className="mb-0">{title}</h1>
      <p className="my-0">
        작성일: {date} <span>({readingTime})</span>
      </p>
      <hr className="my-4" />
    </div>
  );
};

export default Header;
