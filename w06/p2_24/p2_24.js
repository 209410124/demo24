import {students,sdata} from'./data_24.js';


console.log('sdata original',sdata);

sdata.sort(function(a,b){return b-a});
console.log('sdata sorted',sdata);
console.log(`The hightest score:${sdata[0]}`);
console.log(`The lowest score:${sdata[sdata.length-1]}`);


//==============================================================

console.log('students',students);
const students2 =students.map((student)=>{
    //student.role ='student';
    return {...student, role:'student'};
});

console.log('students2 original',students2);

students2.sort(function(a,b){return a.score-b.score});
console.log(`students2 sorted`,students2);

console.log(`The lowest score:${students2[0].score}`);
console.log(`The hightest score:${students[students2.length-1].score+30}`);

console.log('students',students);
const averageStudents = students.reduce( (total,student,index)=>{
    console.log('index total',index,total);
    return total + student.score;
},0)/students.length;
console.log('Students average',averageStudents);



//sdata
console.log('sdata ',sdata);
const averageSdata= sdata.reduce( (total , sdata , index)=>{
    console.log('index total',index,total);
    return total + sdata;
},0)/sdata.length;
console.log('Sdata average',averageSdata);

