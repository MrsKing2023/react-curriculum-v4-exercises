//Lesson-01 Introduction to React
//Exercise: Build an "About Me" Component in this file

export default function StudentWork() {
  const name = 'Suburwa King';
  const age = 42;
  const hobbies = ['coding', 'reading', 'learning'];

  return (
    <div>
      <h1>About Me</h1>
      <p>
        Hi, I am {name}! I am {age} years old and currently learning React as
        part of my journey into full-stack development.
      </p>
      <h2>My Hobbies</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
