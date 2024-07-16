import "./users.css";

function Users(props) {
  const { data } = props;

  return (
    <div className="card">
      <img src={data.image} width={380} height={200} alt="" />
      <h1 className="name">
        {data.firstName} {data.lastName}
      </h1>
      <h3 className="phone">Telefon: {data.phone}</h3>
      <h3 className="email">{data.email}</h3>
      <h3 className="address">{data.addres}</h3>
      <h3 className="cars">{data.cars}</h3>
    </div>
  );
}

export default Users;
