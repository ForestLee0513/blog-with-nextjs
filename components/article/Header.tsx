interface Props {
  title: string;
  date: string;
  readingTime: string;
  description: string;
}

const Header = ({ title, date, readingTime, description }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>
        작성일: {date} <span>({readingTime})</span>
      </p>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default Header;
