const Home = (prop) => {
  console.log(prop.prop);

  return (
    <>
      <h1>Home</h1>
      {prop.prop &&
        prop.prop.map((item) => (
          <div className="item-container">
            Id:{item.id} <div className="title">Title:{item.title}</div>
          </div>
        ))}
    </>
  );
};

export default Home;
