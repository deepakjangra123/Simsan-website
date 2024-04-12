
function MyComponent({name,age} ) {
  return (
    <div>
      <h1>Object Properties:</h1>
      <p>{name}</p>
      <p>{age}</p>
    </div>
  );
};

// Parent component where you pass the object as a prop to MyComponent
function Home(){
  const data = 
    { name: 'Deepak', age: 22 }
  return <MyComponent myObject={data} />;
};

export default Home;
