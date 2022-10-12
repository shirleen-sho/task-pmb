import './App.css';

function App() {
  // DATA
  const cars = ["Saab", "Volvo", "BMW"];
  const type = [
      {
          type : "Saab",
          mode : "X",
          year : 2000,
          color : "red",
      },
      {
          type : "Saab",
          mode : "Y",
          year : 2022,
          color : "red",
      },
      {
          type : "Volvo",
          mode : "Z",
          year : 2001,
          color : "red",
      },
      {
          type : "BMW",
          mode : "D",
          year : 2002,
          color : "red",
      },
  ];

  // FUNCTION
  const carsDataCombine = cars.map(c => {
      const carsType = type.filter(t => { return t.type === c })
      return { name: c, type: carsType }
  })
  const result = { cars: carsDataCombine }
  console.log(result)
  console.log(JSON.stringify(result, null, "\t"))

  return (
    <div className='flex flex-col gap-10 p-20'>
      <div className='flex flex-row gap-20'>
        <span className='font-bold'>Data</span>
        <div className='flex flex-col'>
          <span>cars = { JSON.stringify(cars, null, "\t") }</span>
          <span>type = { JSON.stringify(type, null, "\t") }</span>
        </div>
      </div>
      <div className='flex flex-row gap-20'>
        <span className='font-bold'>Result</span>
        { JSON.stringify(result, null, "\t") }
      </div>
    </div>
  );
}

export default App;
