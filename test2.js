//🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘ŞƏRTLƏR VƏ QAYDALAR🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘🆘 */
// !HECKES BIRBIRINDEN TASKIN KONKRET HELLINI SORUSHMUR VE KOPYALAMIR
// !ANLAMADIGINIZI BIRBASHA MENDEN SORUSHMURSUZ WHATSAPP QRUPUNDA MUZAKIRE EDIRSIZ TASKLAR BAREDE HECKESIN MESAJINI SHEXSIDE CAVABLAMAYACAM :D
// !BUTUN NETICELER console.log() VASITESIYLE GOSTERILMELIDIR
// !DERSDE KECMEDIYIMIZ MOVZULARA AID KODLARDAN MAXIMUM UZAG DURMAGA CALISHIN
// !BUTUN TASKLARI 1 1 OXUYUN HAMSINA EYNI VAXTDA BAXMAYIN
// !HER BIR TASKIN HELLI TASKIN OZUNUN ALTINDA YAZILMALI NOVBETI TASKA KECENDE BITIRILEN TASK COMMENTE ALINMALIDIR.
// !DEADLINE 1 HEFTEDIR
// !MUREKKEB OLDUGUNU DUSHUNDUYUNUZ TASKLAR AYRI FAYLDA YAZILMALIDIR. (FAYL ADI TASKA UYGUN QOYULMALIDIR)
// !SONDA BUTUN KODLAR GITHUBA YUKLENILMELIDIR

// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////// SWITCH CASE ///////////////
// BU BASHLIQ ALTINDAKI HELLER YALNIZ SWITCH CASE ILE QEBUL EDILECEKDIR.

// 1)  SWITCH CASE ILE ASHAGIDAKI TELEBLERI ODEYEN FUNCTION YAZIN

let SET = "SET_DATA";
let GET = "GET_DATA";
let DELETE = "DELETE_DATA";

// let arr = [];

// function handleAction(action, data) {
//   // Use switch to compare the action with different cases
//   switch (action) {
//     // If action is SET, do something with data
//     case SET:
//       var randomNum = Math.floor(Math.random() * 10);
//       arr.push(randomNum);
//       console.log(arr);
//       break; // Break out of the switch statement
//     // If action is GET, return some data
//     case GET:
//       console.log(arr);
//       break; // Break out of the switch statement
//     // If action is DELETE, delete some data
//     case DELETE:
//       arr = null;
//       console.log(arr);
//       break; // Break out of the switch statement
//     // If action is none of the above, do something else
//     default:
//       console.log("Unknown action");
//   }
// }

// // Call the function with different actions and data
// handleAction(SET, "Hello"); // Setting data to Hello
// handleAction(GET); // Getting data Hello
// handleAction(DELETE); // Deleting data
// handleAction("OTHER"); // Unknown action

// 1.1 Yuxarida gosterilmish type lara uygun case ler yazin
//     ve yazdgniz functionda parametr olaraq type gonderin ve birinci merhelede sadece 'case' in adini consola verin

// 1.2  2ci merhelede functiondan kenarda array yaradin ve
//         Case 'SET' oldugu halda arraya 1-10 arasi bir reqem elave edin

// 1.3 Case -  'DELETE'  olarsa arraydan 1 item silin
//     ARRAY BOW OLDUGU HALDA ERROR CIXMALIDIR - 'SILINECEK DATA TAPILMADI'
//     ve sonda arrayi consola cixardin.

// 1.4 Case - 'GET' oldugu halda ise sadece array consolda gorunsun

///////////////////////////////////////////////////////////////////////////////////////////

// let mL = [
//   "January",
//   "February",
//   "March",
//   "April",
//   "May",
//   "June",
//   "July",
//   "August",
//   "September",
//   "October",
//   "November",
//   "December",
// ];

// 2) AY-lar dan ibaret arrayi loopa salin ve her ayda nece gun oldugunu switch case ile Ayin adi + gun sayi  ni consola verin
// Example  'December - 31 days'
// QEYD - FEVRAL OLANDA 28-29 gorunmelidir. mL arrayindan istifade edilmelidir.
// for (let i = 0; i < mL.length; i++) {
//   let month = mL[i];
//   let days = 0;

//   switch (month) {
//     case "January":
//     case "March":
//     case "May":
//     case "July":
//     case "August":
//     case "October":
//     case "December":
//       days = 31;
//       break;
//     case "April":
//     case "June":
//     case "September":
//     case "November":
//       days = 30;
//       break;
//     case "February":
//       days = "28-29";
//       break;
//   }

//   console.log(`${month} - ${days} days`);
// }

// 3) Task 2 - deki mentiqi Date() objecti uzerinde ishledin. Hazirda oldugumuz ayi tapin ve gunlerinin sayini gosterin

// let currentDate = new Date();
// let currentMonth = currentDate.getMonth(); // Bu, mevcut ayın indeksini döndürecek (0-11)
// let currentYear = currentDate.getFullYear();
// let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

// console.log(`İçində olduğumuz ay: ${mL[currentMonth]}`);
// console.log(`Günləri: ${daysInMonth}`);

// 4) Codu-yazdiginiz tarixi date ile tapin ve hazirki ayin ilin 1 ci yarisina yoxsa 2 ci yarisina aid olub olmamasini switch case ile tapin
// QEYD case - ayin ozu olmalidir.
// let currentDate = new Date();
// let currentMonth = currentDate.getMonth();
// let currentDay = currentDate.getDate();

// let halfOfYear = "";

// switch (mL[currentMonth]) {
//   case "January":
//   case "February":
//   case "March":
//   case "April":
//   case "May":
//   case "June":
//     halfOfYear = "ilk yarısı";
//     break;
//   case "July":
//   case "August":
//   case "September":
//   case "October":
//   case "November":
//   case "December":
//     halfOfYear = "ikinci yarısı";
//     break;
// }

// console.log(`Mevcut ay (${mL[currentMonth]}), yılın ${halfOfYear}na aittir.`);

// 5) 4 cu taski heftenin gunleri ile yoxlayin

// const today = new Date();
// const dayOfWeek = today.getDay();

// let halfofweek;

// switch (dayOfWeek) {
//   case 0:
//   case 6:
//     halfofweek = "Həftəsonu";
//     break;
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     halfofweek = "Həftəiçi";
//     break;
//   default:
//     break;
// }

// console.log(`${dayOfWeek}. ${halfofweek}.`);
// 6) hazirki tarixi taparaq ayin necenci heftesinde ola bileceymizi tapin
// QEYD cixan netice realliga uygun olmaya biler bu problem deyil
// her 7 gunu 1 hefte kimi goturun ve ayin 1 nin heftenin 1 ci gununden oldugunu dushunun
// function monthWeekFind() {
//   let date = new Date();
//   let nowMonth = date.getMonth();
//   let nowDate = date.getDate();
//   let firstDayOfMonth = new Date(date.getFullYear(), nowMonth, 1).getDate();
//   let weekOfMonth = Math.ceil((nowDate - firstDayOfMonth + 1) / 7);
//   console.log(weekOfMonth);
// }
// monthWeekFind();

///////////////////////////////////////////////////////////////////////////////////////////

// LOOPS //////  LOOPS ////// LOOPS /////////// LOOPS ////////// LOOPS //////////////////////////////////////////////////////////
// Bu hisseye aid olan tapshiriqlar while for for In for Of istifade edilmekle hell edilmelidir.

// 1 Looplar-dan istifade ederek 'Verilen array' - dan 'Almali oldugunuz' arrayi alin
// Aid olan tasklar 1.1, 1.2, 1.3, 1.4, 1.5

// 1.1 // Verilen array
let mL = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

//  Almali oldugunuz
// let mL = [
//     ['January'],
//     ['February'],
//     ['March'],
//     ['April'],
//     ['May'],
//     ['June'],
//     ['July'],
//     ['August'],
//     ['September'],
//     ['October'],
//     ['November'],
//     ['December']
// ];
// let monthML = [];
// for (let i = 0; i < mL.length; i++) {
//   monthML.push([mL[i]]);
// }
// console.log(monthML)

///////////////////////////////////////////////////////////////////////////////////////////

// 1.2 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February','March','April'],
//     ['May','June','July','August'],
//     ['September' , 'October', 'November', 'December']
// ];

// let newMonthML = [[], [], []];
// for (let i = 0; i < mL.length; i++) {
//   let innerArrayIndex = Math.floor(i / 4);
//   newMonthML[innerArrayIndex].push(mL[i]);
// }
// console.log(newMonthML);

///////////////////////////////////////////////////////////////////////////////////////////

// 1.3 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['May','June',['July','August']],
//     ['September' , ['October', 'November', 'December']]
// ];

// let newarraymL = [
//   [mL[0], mL[1], [mL[2],mL[3]]],
//   [mL[4], mL[5], [mL[6], mL[7]]],
//   [mL[8], [mL[9], mL[10], mL[11]]]
// ]
// console.log(newarraymL)

///////////////////////////////////////////////////////////////////////////////////////////

// 1.4 // Verilen array
// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March',['April']]],
//     ['May','June',['July',['August']]],
//     ['September' , ['October', 'November', ['December']]]
// ];

// let newarraymL = [
//   [mL[0], mL[1], [mL[2],[mL[3]]]],
//   [mL[4], mL[5], [mL[6],[mL[7]]]],
//   [mL[8], [mL[9], mL[10],[mL[11]]]]
//]


///////////////////////////////////////////////////////////////////////////////////////////

// 1.5 // Verilen array

// let mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//  Almali oldugunuz
// let mL = [
//     ['January','February',['March','April']],
//     ['September' , ['October', 'November', 'December']]
//     ['May','June',['July','August']],
// ];

// let newarraymL = [    [mL[0], mL[1], [mL[2], mL[3]]],
//     [mL[8], [mL[9], mL[10], mL[11]]],
//     [mL[4], mL[5], [mL[6], mL[7]]]
// ];
// console.log(newarraymL)

///////////////////////////////////////////////////////////////////////////////////////////

// 2) ad ve soyadinizi yazin ve onlari ashagidaki struktura getirin
// let fullName = 'Murad Nerimanli'

// let result = [
//     ['M' , 'N']
//     ['U' , 'E']
//     ['R' , 'R']
//     ['A' , 'I']
//     ['D' , 'M']
//     ['X' , 'A']
//     ['X' , 'N']
//     ['X' , 'L']
//     ['X' , 'I']
// ]

// Gorunduyu kimi ad ve soyadinizin eyni indexli herflerini bir arraya yigib (Meselen 0ci index-de M ve N var)
// sonra onlari umumi arraya elave etmelisiz

// let fullName = 'Fuad Aliyev';

// let splitFullName = fullName.split(' ');
// let firstName = splitFullName[0];
// let lastName = splitFullName[1];

// let fullnamearray = [];
// for (let i = 0; i < firstName.length || i < lastName.length; i++) {
//   fullnamearray.push([firstName[i] || 'X', lastName[i] || 'X']);
// }

// console.log(fullnamearray);

///////////////////////////////////////////////////////////////////////////////////////////

// 3) 'Ey babeK kebaB ye!' cumlesini loop istifade ederek nida boyuk ve kicik herfler de daxil olmaqla tersine cevirin
// gozlenilen netice  '!ey Babek Kebab yE' - olmalidir

// function myReverse() {
//   const sentence = "Ey babeK kebaB ye!";
//     let result = "";
//     for (let i = sentence.length - 1; i >= 0; i--) {
//       result += sentence[i];
//     }
//     console.log(result);

//    }
//    myReverse();

// let arr = [3,2,21,12,4,12,4,23,3,23,5,34,35,3,4,234,2,105,24,2,342,34,140,34,23,175,342312,1,2,1,70,21,24,23,24,23,24,2,24,34]

// 4) Looplardan istifade ederek yuxaridaki arrayda hem 5-e hem 7-e eyni zamanda bolunen reqemlerin cemini tapin
// let result = [];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 5 == 0 && arr[i] % 7 == 0) {
//     result.push(arr[i]);
//   }
// }
// console.log(result);

// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 5 == 0 && arr[i] % 7 == 0) {
//     sum += arr[i];
//   }
// }

// console.log(sum);

// 5) Looplardan istifade ederek yuxaridaki arrayda en boyuk 3 reqemli cut ededi tapin (biraz cetindir tapmasaniz biryerde baxarg)
// let enboyuk= 0;

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > enboyuk && arr[i] >= 100 && arr[i] < 1000) {
//     enboyuk = arr[i];
//   }
// }

// console.log(enboyuk);

// 6) Looplardan istifade ederek yuxaridaki arrayda ozunden bashqa (3 ozu olmasin yenii) 3 e bolune bilen en kicik reqemi tapin

// let minumumdeyer = Infinity;

// for (let item of arr) {
//     if (item % 3 === 0 && item !== 3) {
//         if (item < minumumdeyer) {
//           minumumdeyer = item;
//         }
//     }
// }

// if (minumumdeyer === Infinity) {
//     console.log("Array'də 3-ə bölünən rəqəm yoxdur");
// } else {
//     console.log("Ən kiçik rəqəm: " + minumumdeyer);
// }

// 7 verilmish obyektde keylerin son reqemi ile value-leri eyni olan valueleri tapin

// let obj = {
//     key1: 0,
//     key2: 3,
//     key3:2,
//     key4:4,
//     key5:53,
//     key7:7,
//     key8:8,
//     key9:91,
// }

// function findsamevalue(obj) {
//   let result = {};
//   for (let key in obj) {
//     if (obj.hasOwnProperty(key) && key[key.length - 1] == obj[key]) {
//       result[key] = obj[key];
//     }
//   }
//   return result;
// }

// console.log(findsamevalue(obj));
////////////////////////////////////////////////////////////////////////////////////////////////

// WINDOW & DOCUMENT//////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////// WINDOW & DOCUMENT //////

// BURADA SIZDEN YARATMAGINIZ ISTENILEN DIV-LER HER BIRI AYRI OLUB TASK HELL EDILDIKDEN SONRA KOMMENTE ATILMALI
// VE HANSI DIVIN HANSI TAKSA AID OLDUGU KOMMENT SHEKLINDE QEYD EDILMELIDIR!
// VE YA HER BIRINI AYRI FAYLLARDA EDE BILERSINIZ.

// 1) Bir div yaradin pencerenin solunda normal yerinde dayansin. 2 saniyeden bir 20px sola hereket etsin ve 20 saniyeden sonra dayansin.

// 2) Bir div yaradin olcusu 100-100px kvadrat olsun 1 saniyeden bir 10px ashagi 10px saga transitionla hereket etsin.

// 3) Bir div yaradin onu sehifede centerleyin. Olculeri 200-200px
//  kvadrat olsun 1 saniyeden bir boyuyerek 400px-400px sonra yeniden oz olculerine qayitsin
// Transitonla etmeyiniz gozlenilendir.

// 4) Bir div (200px x 200px olcude kvadrat)  ve iki button (Start ve stop) yaradin onlari alt alta centerleyin
// Start buttona basandan 1 saniye sonra ve her 2 saniyeden bir div 90 derece firlansin
// Stop buttona basanda 'Stop' sozunun yaninda 3 2 1 saysin ve firlanma dayansin.

// 5) Bir div yaradin pencerenin sol yuxari kuncunde dayansin. Ustune clickledikde Ilk olaraq en sag kunce
// 2ci defe clickledikde ashagi kunce 3 cu de  sol ashagi kunce ve sonda ilk bashldigi yere qayitsin

// 6) 5 ci task hell edildiyi teqdirde eyni fayllar uzerinden davam edin ve klaviaturada kursor ashagi yuxari sag sol duymelerine basdiqda div-i hereket etdirmeye calishin.
// Hem 5 ci tapshiriqdaki hem de bu tapshiriq ishlek veziyyetde olmalidir.

// 7) 5 ve 6 ci tasklar ugurla hell edilerse budefe hemin box-un yerini yadda saxlayin.
// Sehifeni yenilesem bele axirinci hansi veziyyetde qalmishdisa o veziyyetde gorunsun
// Ipucu localstorage ve ya session storage istifade edin.

// 8) Chrome dinozavr oyununu gormush olarsiz Space basdiqca Dinozavr tullanib dushur.
// oradaki kimi oyun yazmaginizi yox sadece istediyiniz bir heyvanin png sheklini ekranda cixarib 'Space' duymesini basdiqda 200px tullanib sora yerine qayitmagini yazin. :D Maragli olacaq

// 9) Random reng generate eden functionu internetden tapib ekrana her clickde body-e yeni generate edilmish ve yeni reng-le renglenmish 100px - kvadrat box elave edin.

// 10) Input (Type number) ve box (div 10px kvadrat) elave edin. Inputun icerisine reqem yazdiginiz qeder olculer boyusun ve ya kicilsin.
// Meselen 10px dir inputa 100yazdim olcusu 110px kvadrat olsun
