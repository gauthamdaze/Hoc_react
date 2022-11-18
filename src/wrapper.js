const wrapper = (Component, text) => (...props) => {
  return (
    <>
      <h1> add some value {text}</h1>
      <Component {...props} />
    </>
  );
};

export default wrapper;
