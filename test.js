
//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR

// full name numunesi
// let fullName = 'Murad Nərimanlı Tərlan'

//1) AD soyad ata adinizi butov sheklde goturun ve array sheklinde herflerine ayirin
  let fullName = 'Fuad Aliyev Aliaga';
  let nameArray = fullName.split('');
  // console.log(nameArray);

//2) Herflere ayrilmish arrayda soyadinizi adinizin onune keciren alqoritm yazin

let [sliceDad,sliceSurname,sliceName] = [nameArray.slice(12),nameArray.slice(5,12),nameArray.slice(0,5)];
let concatFullName = sliceSurname.concat(sliceName,sliceDad)
// console.log(concatFullName)
//3) Alinan yeni arrayi stringe cevirin ama ilk array deyishmesin
let strings = concatFullName.join('')
// console.log(strings)
let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7]

// QEYD - Bu tasklarda "arr" arrayindan istifade edilecekdir.....
//4) Yuxaridaki arrayda 5 reqeminin nece defe tekrarlandigini tapin
let countFive = arr.filter((num) => num === 5).length;
// console.log(countFive);

//5) Yuxaridaki arraydaki butun reqemlerin cemini tapin
let sumAllNumbers = arr.reduce((acc, num) => acc + num, 0);
// console.log(sumAllNumbers);

//6) arrayda tekrar olunan reqemleri artan sira ile duzun
let uniqueSortedArr = arr.filter((num, index, self) => self.indexOf(num) === index).sort((a, b) => a - b);
// console.log(uniqueSortedArr);

//7) arraydaki en boyuk reqemi tapin ve nece defe tekrarlandigini gosterin
let maxNumber = Math.max(...arr);
let countMaxNumber = arr.filter((num) => num === maxNumber).length;
// console.log('Max Number:', maxNumber, 'Count:', countMaxNumber);

//8) Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin
let randomNumber = Math.floor(Math.random() * 10) + 1;
let isInArray = arr.includes(randomNumber);
// console.log('Random Number:', randomNumber, 'Is in array:', isInArray);

//9) Adinizdaki herflerin sayini tapin ve hemin sayin arrayda olub olmamasini yoxlayin Meselen Murad adinda 5 herf var ve 5 arrayda var
let myName = 'Fuad'
let nameLength = myName.length;
let isNameLengthInArray = arr.includes(nameLength);
  // console.log('Name Length:', nameLength, 'Is in array:', isNameLengthInArray);

//10) arraydaki ilk 3 e bolunende qaliqda 2 alinan reqemi ve hemin reqemin arraydaki indexini tapin
let remainderTwoIndex = arr.findIndex((num) => num % 3 === 2);
  // console.log('Index of remainder 2:', remainderTwoIndex);

//11) arraydaki en boyuk reqemin ilk indexini tapin
let maxNumberIndex = arr.indexOf(Math.max(...arr));
  // console.log('Index of Max Number:', maxNumberIndex);

//12) 4 reqeminin arrayin hansi indexlerinde oldugunu gosterin
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 4) {
    // console.log(i)
  }
}
//13) 5 reqeminin arraydaki en boyuk ve en kicik indexlerini tapin
var fiveArr=[];
for (let index = 0; index < arr.length; index++) {
   if(arr[index]==4){
    fiveArr.push(index)
   }
  
}
var enboyuk=0;
for(var i=0; i<fiveArr.length;i++){
   if(fiveArr[i]>enboyuk){
    enboyuk=fiveArr[i]
   }
}
// console.log(enboyuk)
//14) "arr" - arrayindan reqemleri 2 den boyuk olan yeni array yaradin ve alinmish arrayla "arr" arrayinin uzunluqlari ferqini hesablayin
let numbersGreaterThanTwo = arr.filter((num) => num > 2);
let lengthDifference = numbersGreaterThanTwo.length - arr.length;
// console.log('Numbers greater than 2:', numbersGreaterThanTwo, 'Length difference:', lengthDifference);


//15) 7 reqeminin indexleri cemini tapin.
let sumOfSevenIndexes = arr.reduce((sum, num, index) => {
  if (num === 7) sum += index;
  return sum;
}, 0);
// console.log('Sum of 7 indexes:', sumOfSevenIndexes);


/////////////////////////////////////////////////////
let arr2 = [
  {
    name:'test',
    key:1
  },
  {
    name:'task',
    key:2
  },
  {
    name:'tanqo',
    key:3
  },
  {
    name:'like',
    key:4
  },
  {
    name:'task',
    key:5
  },
  {
    name:'trust',
    key:6
  },
  {
    name:'test',
    key:7
  },
  {
    name:'last',
    key:8
  },
  {
    name:'tanqo',
    key:9
  },
  {
    name:'elephant',
    key:10
  },
  {
    name:'love',
    key:11
  },
  {
    name:'small',
    key:12
  },
  {
    name:'little',
    key:13
  },
]


//QEYD Bu tasklarda arr2 istifade edilecekdir
// 16 arr2 de "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin
let namesStartingWithT = arr2.filter((obj) => obj.name.startsWith('t'));
// console.log('Names starting with "t":', namesStartingWithT);

// 17 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin
let countTStartingAndEnding = arr2.filter((obj) => obj.name.startsWith('t') && obj.name.endsWith('t')).length;
// console.log('Count of names starting and ending with "t":', countTStartingAndEnding);

// 18 arr2 de "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
let sumKeysTStartingAndEnding = arr2.reduce((sum, obj) => {
  if (obj.name.startsWith('t') && obj.name.endsWith('t')) sum += obj.key;
  return sum;
}, 0);
// console.log('Sum of keys of names starting and ending with "t":', sumKeysTStartingAndEnding);

// 19 arr2 de "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.
arr2.forEach((obj) => {
  if (obj.name.endsWith('e')) obj.name = 'SuperDev';
});
// console.log('arr2 after replacing "e" ending names:', arr2);

// 20 arr2 de "name"-i en uzun olan obyektin key-i ni tapin
let longestNameLength = Math.max(...arr2.map((obj) => obj.name.length));
let keyOfLongestName = arr2.find((obj) => obj.name.length === longestNameLength).key;
// console.log('Key of the longest name:', keyOfLongestName);

// 21 arr2 de "name"-i en uzun olan obyektin indexin kvadratini hesablayin
let indexOfLongestName = arr2.findIndex((obj) => obj.name.length === longestNameLength);
let squareIndexOfLongestName = indexOfLongestName ** 2;
// console.log('Square of index of the longest name:', squareIndexOfLongestName);

// 22 arr2 de "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin.
let namesWithLengthFour = arr2.filter((obj) => obj.name.length === 4);
// console.log('Names with length 4:', namesWithLengthFour);

// 23 arr2 de en boyuk "key" - i olan obyektin "name"-i ni tapin
let maxKey = Math.max(...arr2.map((obj) => obj.key));
let nameOfMaxKey = arr2.find((obj) => obj.key === maxKey).name;
// console.log('Name of the max key:', nameOfMaxKey);

// 24 arr2 de terkibinde 2 'L' herfi olan obyekt(ler)in index(ler)ini tapin.
let doubleLIndexes = arr2.reduce((indexes, obj, index) => {
  if (obj.name.includes('ll')) indexes.push(index);
  return indexes;
}, []);
// console.log('Indexes of objects with "ll" in their names:', doubleLIndexes);

// 25 arr2 de terkibinde 2 't' herfi olan obyekt(ler)in key(ler)ini tapin.
let doubleTKeys = arr2.reduce((keys, obj) => {
  if (obj.name.split('t').length - 1 === 2) keys.push(obj.key);
  return keys;
}, []);
// console.log('Keys of objects with exactly 2 "t" letters in their names:', doubleTKeys);

// 26 Bura da ozunuz arr2 ile ede bileceyiniz en maragli yeni funksionalligi yazin.
// For example, let's find all unique keys in arr2 and display them in ascending order:
let uniqueKeys = arr2.reduce((keys, obj) => {
  if (!keys.includes(obj.key)) keys.push(obj.key);
  return keys;
}, []).sort((a, b) => a - b);
// console.log('Unique keys in ascending order:', uniqueKeys);


// 27 Xaliqenin taski :D
////////////////////////////////
// Dersde edilen switch case taskina esasen artiq girish qiymetleri
// tekce pointden ibaret deil
// exampoint - imtahan bali
// startPoint - imtahana girish bali
// olaraq yerleshdireceksiz
// onceki shertler yerinde qalir sadece eger girish bali 17 den ashagi olarsa
// kesilmek case -ine daxil olsun

