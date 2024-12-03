interface Student {
  name: string;
  grade: number;
}

function printStudentInfo({ name, grade }: Student) {
  console.log(`Student: ${name}, Grade: ${grade}`);
}

printStudentInfo({ name: "Alice", grade: 1 });
