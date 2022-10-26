interface Props {
  title: string;
  date: string;
  readingTime: string;
  description: string;
}

const Header = ({ title, date, readingTime, description }: Props) => {
  const localedDate = new Date(date).toLocaleString("ko-KR", {
    timeZone: "UTC",
  });

  return (
    <div>
      <h1>{title}</h1>
      <p>
        작성일: {localedDate} <span>({readingTime})</span>
      </p>
      <p>{description}</p>
      <hr />
    </div>
  );
};

export default Header;
