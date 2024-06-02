const person = {
  // string
  name: 'John',
  // object
  address: {
    city: 'London',
    country: 'UK',
  },
  // array
  numbers: [1, 2, 3],
  // function
  printNumbers: () => {
    person.numbers.map(
      (number) => {
        console.log(number)
      }
    )
  }
}

export default function LearnComponent (){
  return (
    <>
      <div>{person.name}</div>
      <div>{person.address.city}</div>
      <div>{person.printNumbers()}</div>
    </>
  )
}