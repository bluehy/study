import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const x = useParams();
  console.log(x);

  return (
    <div>
      <Link to="/">Home</Link>
      <h1>Detail</h1>
    </div>
  );
};

export default Detail;
