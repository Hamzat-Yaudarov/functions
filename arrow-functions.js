//1
const number = (a) => {
    if(a % 2 === 0) {
        return 'чётное'
    }
    else {
        return 'нечётное'
    }
}
console.log(number(2));

//2
const number2 = (и) => {
    if (a < 0) {
        return 'отрицательное'
    }
    else {
        return 'положительное'
    }
}
console.log(number(-1));

//3
const number3 = (c) => {
    if(c >= 0){
       return c
    }
   else {
       return c * 1
    }
 }
 console.log(qqq(4, 8));

 //4
 const text = (i, j) => {
    if (i > j){
      return (i)
    }
     else{
      return(j)
    }
    
   }
   console.log(text(8, 10));

//5
const text1 = (e) => {
    return (e.length)
  }
  console.log(text('12345'));


//6
const text2 = (g, h) => {
    return g.length > h.length  ? g : h
}
  console.log(text('ee', 'rrr'));
    
//7
 

   const text3 = (a, b) => {
    return a.slice(0, b)
  }
  console.log(text3('abcdifg', 4));

//8
const text4 = (a, b) => {
    if (a.length < b)
    return ('текст слишком короткий')

 return a.slice(0, b)
}

console.log(text3('abcdifg', 4));
