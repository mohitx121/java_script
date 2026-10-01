let employees=[
    {
        name: "Rahul",
        age: 24,
        department: "Engineering",
        salary: 45000,
        tasksCompleted: 18,
        attendance: 92,
        isPermanent: true
    },
    {
        name:"mohit",
        age:22,
        department:"HR",
        salary:48000,
        tasksCompleted:16,
        attendance:90,
        isPermanent:true
    },

    {
        name:"Rohan",
        age:25,
        department:"Engineering",
        salary:46000,
        tasksCompleted:14,
        attendance:85,
        isPermanent:false
    },

    {
        name:"Himanshu",
        age:26,
        department:"Developer",
        salary:52000,
        tasksCompleted:19,
        attendance:79,
        isPermanent:false
    },

    {
        name:"Lalit",
        age:21,
        department:"Developer",
        salary:51000,
        tasksCompleted:22,
        attendance:93,
        isPermanent:true
    }
];

//employee performance  (task 1)

    function getPerformance(employee){
        if(employee.tasksCompleted>=20 && employee.attendance>=90){
            return "Excellent";
        }
        else if(employee.tasksCompleted>=15 && employee.attendance>=80){
            return "Good";
        }
        else if(employee.tasksCompleted>=10 && employee.attendance>=70){
            return "Average";
        }
        else{
            return "needs improvement";
        }
    }

console.log(getPerformance(employees[0]));
console.log(getPerformance(employees[1]));
console.log(getPerformance(employees[2]));
console.log(getPerformance(employees[3]));
console.log(getPerformance(employees[4]));

    // calculate bonus acc to performance (task 2)
    function calculateBonus(employee){
   
    let performance=getPerformance(employee);
    let bonus=0;

    if(performance==="Excellent"){
        bonus=employee.salary*20/100;
    }

    else if(performance==="Good"){
        bonus=employee.salary*10/100;
    }
    
    else if(performance==="Average"){
        bonus=employee.salary*5/100;
    }

    else{
         bonus=0;
    }

    if(employee.isPermanent===true){
        bonus=bonus+(employee.salary*5/100)
    }

    return bonus;
    }

console.log(calculateBonus(employees[0]));
console.log(calculateBonus(employees[1]));
console.log(calculateBonus(employees[2]));
console.log(calculateBonus(employees[3]));
console.log(calculateBonus(employees[4]));

//Update employee objects (task 3)

for (let employee of employees){
    employee.performance=getPerformance(employee);
    employee.bonus=calculateBonus(employee);
    employee.finalSalary=employee.salary+employee.bonus;
    delete employee.age;
}
console.log(employees);


//Search employees task 5

function getEmployeesByDepartment(department){
    for(let i=0;i<employees.length;i++){
        if(employees[i].department===department){
            console.log(employees[i]);
        }
    }
}
getEmployeesByDepartment("Engineering");

function getEmployeesWithSalaryAbove(salary){
    for(let i=0;i<employees.length;i++){
        if(employees[i].salary>salary ){
            console.log(employees[i]);
        }
    }
}
getEmployeesWithSalaryAbove(4000);

function getTopPerformer() {
    let topEmployee=employees[0];
    for (let i=1;i<employees.length;i++){
        if(employees[i].performance>topEmployee.performance){
            topEmployee=employees[i];
        }
    }
            console.log(topEmployee);
        
}
getTopPerformer();


// task 6 

let employe=
    {
        name: "Rahul",
        age: 24,
        department: "Engineering",
        salary: 45000,
        tasksCompleted: 18,
        attendance: 92,
        isPermanent: true
    };
    console.log(Object.keys(employe)); 

    console.log(Object.values(employe));

    console.log(Object.entries(employe));


    for(let[key,value]of Object.entries(employe)){
        console.log(key,":",value);
    }


//task 4 

    let report={
        totalEmployees: 0,
        permanentEmployees: 0,
        excellentEmployees: 0,
        totalSalary: 0,
        totalBonus: 0,
        totalAttendance: 0
    };
    for (let employee of employees){
        report.totalEmployees++;

        if(employee.isPermanent=true){
            report.permanentEmployees++;       
        }
        if(employee.performance==="Excellent"){
            report.excellentEmployees++;
        }
        report.totalSalary+=employee.salary;
        report.totalBonus+=employee.bonus;
    
    }
    console.log("TotalEmployees",report.totalEmployees);
    console.log("permanentEmployees",report.permanentEmployees);
    console.log("excellentEmployees",report.excellentEmployees);
    console.log("TotalSalary",report.totalSalary);
    console.log("totalBonus",report.totalBonus);
