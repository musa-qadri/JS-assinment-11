// Question no 1;
// var name = prompt('Enter your name').toUpperCase()
// var nameLast = prompt('Enter your last name').toUpperCase() ;
// var fullName ="Assalam o Alikum " +  name + nameLast 

// document.write('<h1>'+fullName+'</h1>')



// Question no 2;

// var user = prompt( 'Enter your favourite Mobile phone Name');

// var userLength = user.length


// document.write('<h1>'+'My favourite phone is : '+user+'<h1/>')
// document.write('<h1>'+'Your word length is : '+userLength+'<h1/>')



// Question no 3;

// var country = 'pakistani';
  
// var find = country.indexOf('n');

// document.write('<h1>','string : ',country,'<h1/>')
// document.write('<h1>'," Index of 'n' : ",  find ,'<h1/>')


// Question no 4;

// var country = 'Hellow World';
  
// var find = country.lastIndexOf('l');

// document.write('<h1>','string : ',country,'<h1/>')
// document.write('<h1>'," lastIndex of 'l' : ",  find ,'<h1/>')


// Question no 5;

// var country = 'pakistani';
  
// var find = country[3];

// document.write('<h1>','string : ',country,'<h1/>')
// document.write('<h1>',"Character at Index '3' : ",  find ,'<h1/>') 

// Question no 6;

// var city = 'Hyderabad';
// var cityNew = city.replace(city,'Islamabad')

// document.write('<h1>','City : ',city,'<h1/>','<br>')
// document.write('After replacement : ',cityNew)


// Question no 7;


// var message = "Ali and Sami are best friends.They play circket and football together"
// var newMessage = message.replaceAll('and','&')

// document.write('<h1>',message,'</h1>')
// document.write('<h1>',newMessage,'</h1>')


// Question no 8;

// var num = 472;
// var numNew = num.toString()


// document.write('<h1>','Value : ',numNew,'<h1/>')
// document.write('Type string');
// document.write('<h1>','Value : ',num,'<h1/>')
// document.write('Type Number')


// Question no 8;

// var input = 'peanuts';
// var inputUpper = input.toUpperCase()


// document.write('<h1>','Use input : ',input,'<h1/>')
// document.write('<h1>','Use Upper Case : ',inputUpper,'<h1/>')

// Question no 9;
  
// var input = 'javacsript';
 
// var update = input[0].toUpperCase()+input.slice(1)

// document.write('<h1>','User Input : ',input,'<h1/>')
// document.write('<h1>','Title Case : ',update,'<h1/>')

// Question no 10;


// var num = 35.36;
// var numNew = num.toString();
// var numNews = numNew.replace('.','')


// document.write('<h1>','Number : ',num,'<h1/>')

// document.write('<h1>','Result : ',numNews,'<h1/>')


// chapter No 26 to 30
// Question no 1


// var num1 = 3.45214;
// var round = Math.round(num1) 
// var round2 = Math.floor(num1) 
// var round3 = Math.ceil(num1) 

// document.write('<h1>',"Number : ",num1,'<h1/>')
// document.write('<h1>',"Round of value : ",round,'<h1/>')
// document.write('<h1>',"Floor value: ",round2,'<h1/>')
// document.write('<h1>',"Ceil value : ",round3,'<h1/>')


// Question No 2;


// var num1 = +prompt('Enter a Negative integer number',-2.673);
// var round = Math.round(num1) 
// var round2 = Math.floor(num1) 
// var round3 = Math.ceil(num1) 

// document.write('<h1>',"Number : ",num1,'<h1/>')
// document.write('<h1>',"Round of value : ",round,'<h1/>')
// document.write('<h1>',"Floor value: ",round2,'<h1/>')
// document.write('<h1>',"Ceil value : ",round3,'<h1/>')


// Question no 3;


// var value = 4;
// var absolute = -4;

// document.write('<h1>','The absolute value of  ',  absolute,' is ',value ,'</h1>')


// Question no 4;

// var ranNum = Math.round(Math.random()*6)

// document.write('<h1>','Random dice value : ',ranNum,'</h1>')



// Question no 5;

// var ranNum = Math.round(Math.random()*1)

// if(ranNum == 1){
// document.write('<h1>',ranNum,'</h1>')
// document.write('<h1>','Random coin value : Tail','</h1>')
// }else{
// document.write('<h1>',ranNum,'</h1>')
// document.write('<h1>','Random coin value : Head','</h1>')

// }



// Question no 6;


// var ranNum = Math.round(Math.random()*100)
// document.write('<h1>','Random No Between 1 to 100 : ',ranNum,'</h1>')



// Question no 7;

// var weight = +prompt('Enter a weight in Kilograms')


// document.write('<h1>','The Weight of User is : ', weight , ' Kilogram','<h1/>')

// Question no 8;

// var ranNum = Math.round(Math.random()*10)
// var user = +prompt('Enter number between 1 to 10')

// if(ranNum == user){
//     document.write('<h1>','you win','<h1/>')
//     document.write('<h1>',ranNum,'<h1/>')
// }else{
//     document.write('<h1>','try again','<h1/>')
//     document.write('<h1>',ranNum,'<h1/>')
// }


// Question no 9;

// var para = 'this is test product';

// var word = "test"
// var chang = 'best'

// for (i=0; i<para.length; i++){
//     if(para.slice(i, i + word.length) === word){
//         var para = (para.slice(0,i)+chang+para.slice(i+chang.length))
//     }
// }

// document.write(para)


// var num1 = [(1,2,3),(4,5,6),(7,8,9)]
  
//    var num1 =['apple','banna','pinaple','stowbery','mango']

// for( i=0; i<num1.length; i++){
//         document.write(num1,'<br>')
    
// } 



// var arra = ['karachi','peshawer','lahore','islamabad','multan']

// flage = 'no'

// for (i=0; i < arra.length; i++){
//     if ( arra[i] == 'haydrabad'){
//          var flage = 'yes'
//         console.log('print ho gia');
//         break;
//     }
   
// }
// if(flage ==='no'){
//     console.log('nahi hua print')
// }


