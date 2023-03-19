let students = [
  {
    name: "Alexandre",
    testGradeFirst: 9.5,
    testGradeSecond: 5.4
  },
  {
    name: "Felipe",
    testGradeFirst: 2.0,
    testGradeSecond: 8.5
  },
  {
    name: "Mayk",
    testGradeFirst: 9.8,
    testGradeSecond: 8.5
  },
  {
    name: "Diego",
    testGradeFirst: 6.8,
    testGradeSecond: 4.5
  }
]


function calcAverage(testGradeFirst, testGradeSecond){
  let average = (testGradeFirst + testGradeSecond) / 2
  return average
}

for(let student of students){
  let average = calcAverage(student.testGradeFirst, student.testGradeSecond)

  if(average >= 7){
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Parabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}
    Não foi dessa vez, ${student.name}! Tente novamente!`)
  }
}