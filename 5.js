function printStudentInfo(_a) {
    var name = _a.name, grade = _a.grade;
    console.log("Student: ".concat(name, ", Grade: ").concat(grade));
}
printStudentInfo({ name: "Alice", grade: 1 });
