
console.log("#1");

let sum=[0];
for (let i=4; i<100; i++) {
     sum[i]=i+1;
     console.log(sum[i]);
 }


 console.log("#2");


let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for(i=0; i<array1.length; i++ ){
    if(array1[i]>0){
        if(array1[i]<10){
            console.log(array1[i]);
        }
    }
  
}


console.log("#3");


let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for( i=0; i<array2.length; i++){
   switch(array2[i]){
    case 5:
    console.log("არის");
    break;
   }
   }


 console.log("#4");
 

let array3= [1, 2, 3, 4, 5];
let result=0;
for(i=0 ; i<array3.length; i++){
     result=result+ array3[i];
}
console.log(result);


console.log("#5");



let array4 = [1, 2, 3, 7, 6, 9];
let answer= 0;
for( i=0; i<array4.length; i++){
    answer=answer + array4[i];

}
 console.log(answer/ array4.length);


 console.log("#6"); 
 
 
 let array5 = [1, 2, 3, 7, 6, 9] 
 for( i=0; i<array5.length; i++){
    if (array5[i]<7 ) 
    {    console.log(array5[i]);}
    if( array5[i]>7){
        console.log(array5[i]);
    }

  }



console.log("#7"); 


let student = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };
    console.log(student.studentstatus);  



    console.log("#8");
    
   
    let user = {
        name: 'giorgi',
        age:  20,
        studentstatus: 'active'
    }
       switch (user) {
        case 1:
            if(user.age<18 ){
                if (user.studentstatus= 'active') {
                    console.log("Hello");
                    
                }
            }
            
            break;
            case 2: 
            if(user.name='levani'){
                console.log("Hello Levani");
            }
            break;
            case 3: 
            if(user.studentstatus ='active'){
                console.log("Hello");
                if(user.age < 25){
                    console.log("Hello World");
                }
            } 
            break;
       
        default:
            console.log("Error");
            break;
       }