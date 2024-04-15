var students = [
    {name: "João", age: 18, skills: ["JavaScript", "HTML", "CSS"]},

    {name: "Roberto", age: 19, skills: ["Java", "PHP", "SQL"]},

    {name: "Julia", age: 12, skills: ["Python", "Machine Learning", "SQL"]},

    {name: "Larissa", age: 17, skills: ["Java", "C++", "Data Structures"]},

    {name: "Sávio", age: 89, skills: ["Ruby", "Rails", "RSpec"]}
    
];

function Cávia(students,skill){
    //cria um filtro nos alunos e o filtro ativa uma função.
    return students.filter(function(students) {
        return students.skills.includes(skill); /*a função pega todos as skills e inclue ela dentro de skill
                                                da função Cáviar */
    });
}

// Definindo qual Skill queremos e atribuindo ela a uma outra var

var skillGet = "Java";
var StudentsWJava = Cávia(students,skillGet);

console.log("Todos os alunos com a Skill " + skillGet);
StudentsWJava.forEach(function(student) {
    console.log(student.name + ", " + student.age + ", [" + student.skills.join(", ") + "]");
});