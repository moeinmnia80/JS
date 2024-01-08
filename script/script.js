// console.log("moein"); // در قسمت اینسپکت المنت (بخش کنسول) پرینت رو نشون میده
// میشه باهاش نتیجه کارهامون رو باهاش ببینیم

// البته کامنت گذاری رو هم یادگرفتیم که با استفاده از نماد روبه رو میشه کامنت گذاشت

// bug
// برنامه اجرا میشه اما نتیجه موردنظر مارو نمیده

// error
// برنامه اصلا اجرا نمیشه
//-------------------------------------------------------------------------------------------------------
// var age = 22; // ES5

// به جای استفاده از ور از این دو متغیر زیر استفاده میکنیم
// let name = 'moein' // ES6 در اینجا میتونیم مقدار متغیر رو بعدا تغییر بدیم
// console.log(name)
//let age = 22;

// name = 'mohammad moein'
// console.log(name)

// constant variable
// const lastName = 'mohammadnia' // ES6 در این قسمت مقدار غیرقابل تغییر میشود بخاطر استفاده از این نوع متغیر
// console.log(lastName)

//-------------------------------------------------------------------------------------------------------

// از var هرگز استفاده نکنید
// در استفاده از let و const باید پیش فرض ما const باشد

// const مقداری ثابت است

//-------------------------------------------------------------------------------------------------------

// naming variable
//camel case
// let lastName;
//snake case
// let last_name;
//kebab case
// let last-name; we can't use this in script
//pascal case
// let LastName;
// let $name; میتونیم استفاده کنیم ازش
// باید از اسامی مشخص استفاده کنیم معنادار
// اسم متفبر ها باید با حرف شروع بشه

//-------------------------------------------------------------------------------------------------------

//data types

// number -> const age = 25 and const average = 19.15
// string -> const name = 'moein'
// boolean -> const isDone = true and const areGone = false

// بهتره قبل از اسامی متغیر های بولینمون کلمات is , are رو بیاریم قرارداد بین برنامه نویسان
// array -> const courses = ["JavaScript courses",  32, true and another type of values]
// object -> const jsCourse = {fullName: "JavaScript", hours: 25, etc}
// null -> const data = null; مقدار دارد و مفدار آن برابر پوچ است

// undefined -> let data = undefined; or let data; هیچ مقداری ندارد و تعریف نشده است

//--------------------------------------------------------------------------------------------------------

// مشخص کردن نوع داده با دستور typeof

// console.log(typeof data)

//--------------------------------------------------------------------------------------------------------
// Arithmetic operator
// const x = 5;
// const y = 3;
// const result = x+y;
// const result = x-y;
// const result = x*y;
// const result = x**y;
// const result = x/y;
// const result = x%y;
// console.log(result)

//but

// let z = 5 // instead of x
//
// z = z+1; // update z
// console.log(z) // or console.log(z++)

//--------------------------------------------------------------------------------------------------------
// assignment operators
// z = 5;
// z += 5;
// z -= 5;
// console.log(z)
// z /= 2;
// z *= 2;
// z **= 2;
// z %= 2;
// console.log(z)

//--------------------------------------------------------------------------------------------------------

// comparison operator

// const x = 5;
// const y = 3;
// const z = 5;
// const f = '5'
// console.log(x == y)
// console.log(x == z)
// console.log(x == f) // چرا برابر شد چون مقادیر هردو یکسان بود و عملگر نیومد که نوع متفبر رو بررسی کنه
// console.log(x === f) // برای اینکه بیاد و نوع متغیر هم بررسی کنه از سه تا مساوی استفاده میکنیم
// console.log(x != y) // عملگر نابرابری
// console.log(x !== y) // برای اینکه بیاد و نوع متغیر هم بررسی کنه از سه تا مساوی استفاده میکنیم
// console.log(x > y)
// console.log(x >= z)
// console.log(x < y)
// console.log(x <= y)

//--------------------------------------------------------------------------------------------------------

// logical operators

// console.log(x > y  && x == z)
// console.log(x > y  && x === z)
// console.log(x > y  || x == z)
// console.log(!x > y)

//--------------------------------------------------------------------------------------------------------

// string operator
// let firstName = "moein "
// const lastName = "mohammadnia"

// console.log(firstName += lastName)
// console.log(firstName + lastName)

//--------------------------------------------------------------------------------------------------------

// unary operators
// const value = "5";
//
// console.log(+value) // unary plus
// const val = 4;
//
// console.log(-val) // unary negation

//--------------------------------------------------------------------------------------------------------

// nullish coalescing operator
// const name = "moein";
// const lastName = null;
// let age;
//
// console.log(lastName ?? name)
// بررسی میکنه و اون متغیری که مقدارش نال یا تعریف نشده نیست رو چاپ میکنه و اگر هردو نال یا تعریف نشده باشند که نوع مقدار اخری رو چاپ میکنه و اگرم هردو مقدار داشته باشه اولی رو چاپ میکنه
//--------------------------------------------------------------------------------------------------------

// truthy and falsy values
// Falsy
//0 - "" - null - undefined - false
// Truthy
// در بقیه موارد همه درست هستند
// console.log("" ? "truthy" : "falsy");

//--------------------------------------------------------------------------------------------------------

// training this session

// const price1 = 10;
// const price2 = 23;
// const price3 = 5;
// const balance = 60;
//
// const totalPrice = price1 + price2 + price3 * 2;
// console.log("Total Price: ",totalPrice)
//
// const averagePrice = totalPrice / 4;
// console.log("Average Price: ",averagePrice)
//
// const finalPrice = totalPrice * 0.95;
// console.log("Finally Price: ",finalPrice)
//
// console.log("Checking balance: ", balance >= finalPrice ? "you can but" : "your balance is not enough")

//--------------------------------------------------------------------------------------------------------

// number method
// برای تبدیل کردن اعداد به رشته از دستور toString استفاده میکنیم
// const number = 5;
// console.log(number.toString());
// برای تنظیم تعداد رقم دالخواه اعشار از دستور زیر استفاده میکنیم
// const floatNumber = 3.1213141516;
// console.log(floatNumber.toFixed(2));

//--------------------------------------------------------------------------------------------------------

// string method
// const string = "5";
// const floatString = "23.2313124"
// console.log(Number(string));
// or we can  use of console.log(+string)  unary operator (unary plus)
// but if string = "svd" for console.log(Number(string)) => NaN
// but if string = "" for console.log(Number(string)) => 0
// but if string = "22 33" for console.log(Number(string)) => NaN
// we can use parseInt or parseFloat instead of Number
// console.log(parseInt(string));
// for parseInt if string "22 33" => 22 اگر فاصله وچود داشته باشه در این دستور بعد از فاصله رو لحاظ نمیکنه
// console.log(parseFloat(floatString));

//--------------------------------------------------------------------------------------------------------

// const string = "Hi, I'm moein"
// console.log(string)
// but we can't use 'Hi, I'm moein' this is incorrect
// اما یک راهی هست که میشه بین کوتیشن یک تک موتیشن دیگه هم استفاده کرد
// const stringUpdate = 'Hi, I\'m moein'
// console.log(stringUpdate)
// اگر بخوایم رشته طولانی رو در چند خط فقط در بخش کدها در چند خط بنویسیم از دستور زیر استفاده میکنیم
// const longString = "Hi, i'm moein \
// and 22 years old"
// console.log(longString)
// اگر بخواین تو بخش کنسول هم بره خط بعد از n\ استفاده میکنیم
// \n = line break
// const text = "moein mohammadnia";
// console.log(text.length)
// این دستور از یک مینویسه درحالی که جاوا  اسکریپت زیرو بیس هستش یعنی هر عددی داد منهای یک میشه طول اصلی یک اندیس های اصلی حروف

//--------------------------------------------------------------------------------------------------------

// const text = "moein"
// console.log(text[3]) // مقدار اندیس آی ام رو بر میگردونه
// console.log(text.indexOf("i")) // میگرده ببینه همچین مقداری وجود داره یا نه اگر بود اندیسشو بر میگردونه در غیر انیصورت منفی یک بر میگردونه
// console.log(text.charAt(2)) // we can use cahAt instead of name[i]

//--------------------------------------------------------------------------------------------------------

//includes => boolean
// console.log(text.includes("moein")) // بررسی میکنه ببینه رشته مورد نظر داخل متغیر مورد نظر وجود داره یا نه
// console.log(text.toLowerCase())
// console.log(text.toUpperCase())

//--------------------------------------------------------------------------------------------------------

// split
// const string = "moein mohammadnia is developer"
// console.log(string.split(" ")) // در این دستور میگیم بر چه اساسی باید از هم جدا بشن
// // در دستور زیر میخوام یک کلمه رو با کلمه دیگر جایگزین کنیم
// console.log(string.replace("moein","mohammad moein"))
// // با دستور پایین دو الی ... رشته رو به هم متصل میکنیم
// const newText = " and designer"
// console.log(string.concat(newText))
// const trimString = "        my name is moein          "
// console.log(trimString)
// // در این دستور فضای های خالی ابتدا و انتها ازبین میروند
// console.log(trimString.trim())

//--------------------------------------------------------------------------------------------------------

// const text = "moein mohammadnia is a front-end developer"
// console.log(text.slice(23, 32))
// // باید توجه داشته باشیم که بازه ان به‌صورت (32, 23] هستش
// // اگر عدد منفی بدیم از آخر شروع میکنه
// // we can use supstirng instead of slice
// console.log(text.substring(23, 32))
// // همون کاره اسلایس رو میکنه با این تفاوت که منفی نمیگیره
// // دستور بعدی قدیمی است وفقط در جهت یادگیری می باشد
// console.log(text.substr(23,9))

//--------------------------------------------------------------------------------------------------------
// challenge: Capitalize the first letter of text

// let text = "moein";
// text = text.slice(0,1).toUpperCase() + text.slice(1);
// console.log(text)
// second way
// const text = "moein"
// const firstLetter = text.charAt(0).toUpperCase()
// const continueText = text.slice(1)
// console.log(firstLetter.concat(continueText))
// third way
// const text = "moein"
// const firstLetter = text.charAt(0)
// const upperCaseFirstLetter = firstLetter.toUpperCase()
// const finallyText = text.replace(firstLetter,upperCaseFirstLetter)
// console.log(finallyText)

//--------------------------------------------------------------------------------------------------------

//Challenge: Replace a part of phone number
// const phoneNumber = "09337758902";
// const hiddenNumber = "****"
// const hideNumber = phoneNumber.replace(phoneNumber.slice(3,7), hiddenNumber)
// console.log(hideNumber)
//

//--------------------------------------------------------------------------------------------------------
// Template literals
// const name = "moein"
// const age = 22
//
// const text = `Hi, my name is ${name} and I'm ${age} years old`
// console.log(text)

//--------------------------------------------------------------------------------------------------------
// Challenge: Extract name and last name

// const text = "moein mohammadnia"
// const arrayText  = text.split(" ")
// const name = arrayText[0]
// const lastName = arrayText[1]
// const finallyText = `My name is ${name} and last name is ${lastName}`
// console.log(finallyText)

// second way

// const fullName = "moein mohammadnia"
// const spaceIndex = fullName.indexOf(" ")
// const name = fullName.slice(0, spaceIndex)
// const lastName = fullName.slice(spaceIndex + 1)
// const text = `Your name is ${name} and your last name is ${lastName}`
//
// console.log(spaceIndex)
// console.log(name)
// console.log(lastName)
// console.log(text)

//--------------------------------------------------------------------------------------------------------

// session 5 Array
// const firstArray = [1,2,3]
// console.log(firstArray)
//
//
// const secondArray = Array(4, 5, 6)
// console.log(secondArray)
//

//--------------------------------------------------------------------------------------------------------

// const myArray = [] // ورودی های ارایه از هرجنسی میتونه باشه عدد ، رشته ، آریه ، آبجکت و ...
// ex const myArray = [12, "moein", [1, 2], {age: 22}]
// هر خانه دارای یک اندیس است که به ما دسترسی به هر مقدار موجود در آرایه را میدهد
// nameArray[i] از صفر شروع می شود

//--------------------------------------------------------------------------------------------------------

// const myArray = ["moein", 22]
// myArray.push(1) // به انتهای ارایه عدد یک رو اضافه کرد
// myArray.unshift(2) // به ابتدا ارایه عدد 2 رو اضافه کرد
// myArray.pop() // ازاخر ارایه شروع به پاک کردن میده
// myArray.shift() // از ابتدا ارایه شروع به پاک کردن میکنه
// console.log(myArray)

//--------------------------------------------------------------------------------------------------------

// تبدیل ارایه به رشته
// const newArray = myArray.toString();
// console.log(newArray);
// delete myArray[0];
// // console.log(myArray)
// myArray[0] = "moein";
// console.log(myArray);

//--------------------------------------------------------------------------------------------------------

// Join
// const myArray = ["moein", 22];
// const string = myArray.join(); // شبیه دستور  toString()
// const string = myArray.join(" "); // خودمون مشخص میکنیم بینش چی بزاره
// const array2 = [1,2,3,4]
// const newArray = myArray.concat(array2)
// console.log(string)
// console.log(newArray)
// Nested Array
// const newArray = [[1,2],[3,4,5]];
// به این ارایه های تودرتو یا چند بعدی میگن
// const finallyArray = newArray.flat()
// console.log(finallyArray)

//--------------------------------------------------------------------------------------------------------

// const array = [[1,2], [3,4,5]]; // multidimensional چندبعدی
// const flatArray = array.flat();
// console.log(flatArray)

//--------------------------------------------------------------------------------------------------------

// const array = [1,2,3, [4,5,6]];
// console.log(array.indexOf(3)); // بررسی میکنه ببینه مقدار مورد نظر وجود دارد یا نه اگر داشت اندیس خونه اشو بر میگردونه
// console.log(array.includes(1))

//--------------------------------------------------------------------------------------------------------

// slice(start point, end point) => [s, e)
// const array = [1,2,3,4,5];
// const newArray =  array.slice(0,3);
// console.log(newArray);
// قسمتی از ارایه رو میتونه حذف کنه و همین طور برای کپی گرفتن از ارایه نیز ازش استفاده میشه
// const newArray2 = array.splice(0,2);
// console.log(newArray2)
// console.log(array)
// توجه کنیم که عدد منفی نیز میگیرد
// array.splice(5,0,6,7,8); // اضافه کردن مقادیر 6، 7 و 8 با دستور مورد نظر به آرایه اصلی
// console.log(array)

//--------------------------------------------------------------------------------------------------------

// const array = [1,2,3, "moein","ali"];
// console.log(array.sort());
// const array = [1,2,3,4,5,11,12,13,21,22];
// console.log(array.sort()); // براساس رقم اول میاد اول مرتب میکنه بخاطر همین خروجی اشتباه است
// console.log(array.reverse());

//--------------------------------------------------------------------------------------------------------

//مفاهیم جاوا اسکریپت
// memory
// 1.Stack memory => سرعت بالا - حافظه کم - منظم
// 2.Heap memory => سرعت کم - حافظه بالا - ترتیب وجود ندارد

// let x = 10;
// const y = x;
// x = 5;
// console.log(x)
// console.log(y) // چون مقدار ایکس یکبار فراخوانی و به وای داده شده است بنابراین با تغییر ایکس وای دیگر تغییر نمیکنده
//به عبارت دیگر دو قسمت مجزا در حفظه اتک می باشند
// البته این اتفاق برای primitive type ها فقط اتفاق می افتد چراکه آنها در حافظه استک ذخیره میشوند
// const z = [1,2,3];
// const g = z;
// z.push(4)
// console.log(z)
// console.log(g)
// در اینجا هردو تغییر میکنند چون از جنس reference type

//--------------------------------------------------------------------------------------------------------

// reference type and primitive type.
// primitive type => Number, string, null, undefined, boolean
// reference type => array, object

// پریمیتیو تایپ ها در حافظه استک ذخیره می شوند و رفرنس تایپ ها در حافظه هیپ ذخیره میشوند

//                       |          |
//                       |          |
//                       | |   P  | |
//                       ------------
//                       stack memory
// حافظه استک به گونه ای است که متغیر در ان تعریف شده و مقدارش ذخیره میشود اما در رفرنس به گونه ای دیگر است به‌طوری که هم حافظه استک حضور دارد هم هیپ
// متغیر در استک تعریف شده و مقدارش به علاوه یک آدرس (که به آن رفرنس میگیم) در حافظه هیپ ذخیره میشود و آی دی یا مقدار رفرنس در متغیر آن و در حافظه استک ذخیره میشود
// همین امر سبب میشود وقتی که متغیری از جنس فرنس داشته باشیم با تغییر یکی دیگری هم تغییر کند چرا که ادرس های هر دو یکی است و ما داریم مقدار یک ادرس رو تغییر میدیم

//--------------------------------------------------------------------------------------------------------

// Garbage Collector
// زمانی که متغیر ما دیگر رفرنسی نداشته باشد این مکانیزم فعال میشود تا فضای حافظه رو خالی کند
// مخصوص حافظه هیپ : هر چقدر هم حافظه هیپ فضا داشته باشد بالاخره پر میشود
// برای اینکه یک متغیر دیگر رفرنسی نداشته باشد یا باید انرا پاک کنیم یا مقدارش را ریست کنیم
//  برای اینکار از دستور null استفاده میکنیم چون پرفورمنس بالاتر و حافظه کمتری نسبت به undefined مصرف میکند

//--------------------------------------------------------------------------------------------------------

// const x = [1,2,3];
// const y= [1,2,3];
// console.log(x===y); // answer is = false why? چونکه رفرنس های هردو یکی نیست و باهم متفاوت هستند
// اما اگر
// const z = x;
// console.log(x===z); // در اینجا چون مقدار ایکس رو ریختیم داخل زد (درواقع رفرنس اون رو به زد هم دادیم) بخاطر همین جواب true هستش

// const name = "moein";
// name = "mohammad"; // have error
//but
// const array = [1,2,3,4];
// array.push(5);
// console.log(array)
// and
// array = [1,2,3,4,5,6]; // have error

//--------------------------------------------------------------------------------------------------------

// mutation: به عمل تغییر ویژگی های یک مقدار می گویند
// mutable: یک مقدار زمانی بهش میگن میتیبل که قابل تغییر و جهش باشد
// All primitive value in Js is immutable
// const x = "moein"
// x = "mohammad" // error
// or
// let y = "moein"
// y[0] = "S"
// console.log(y) // میبینیم که تغییری رخ نمیده
// Array and object are mutable
// const data = [1, 2, 3]
// data[0] = 5;
// console.log(data)

//--------------------------------------------------------------------------------------------------------

// shallow copy and deep copy
// const data = [1, 2, 3];
// const copyData = data.slice();
// data.push(4) // مشاهده میشود که دیتا تغییر میکند اما کپی آن نه
// console.log("data: ", data)
// console.log("Copy data: ",copyData)
// شلو کپی زمانی اتفاق می افتد که آرایه ما فلت باشد مثل مثال بالا
// اما دیپ کپی
// const data2 = {name: "moein", lastName: "mohammadnia", array: [1,2,3]}
// const copyData2 = JSON.parse(JSON.stringify(data2)); // expensive
// این روش منابع سیستم مارو خیلی مصرف میکنه از حافظه گرفته تا سی پیو
// console.log("data2: ", data2)
// console.log("Copy Data2: ",copyData2)

//--------------------------------------------------------------------------------------------------------

// spread copy | ES6
// const data = [1, 2, 3];
// const copyData = [...data];
// data.push(4)
// console.log(data)
// console.log(copyData)
// const arrayData = ["moein", "mohammadnia"];
// const combinedData = [...data, ...arrayData];
// console.log(combinedData)
// حتی میشه اول آخر یا وسط ارایه هم ایتم های دیگری رو اضافه کرد

//--------------------------------------------------------------------------------------------------------

// Array Destructuring
// const data = ["moein", "mohammadnia", 23];
// const [name, lastName, age] = data; // در اینجا ترتیب مهمه نه اسم ما هر اسمی برای اون میتونیم بزاریم اما ترتیب دقت شود
// پس ترتیب براساس مقادیر می باشد
// const string = `my name is ${name} ${lastName} and i'm ${age} years old`
// console.log(string)
// data.push("ali","ahmadi", 32)
// console.log(data)
// const [name, lastName, age, ...others] = data;
// console.log(others) // ارایه ای از بقیه ایتم های باقی مانده

//--------------------------------------------------------------------------------------------------------

// Challenge :
// 1. create an array
// 2. add your favorite sport
// 3. use this list in the text
// 4. remove the last item from the list
// 5. creat a new array for the first two sport item then replace in main array
// const sports = [];
// sports.push('football');
// sports.push('basketball');
// sports.push('ping pong');
// sports.push('video game');
// const sportText = sports.join(", ");
// const text = `my favorite sport are ${sportText} and etc.`;
// sports.splice(-1);
// const firstTwoSports = sports.slice(0,2);
// sports.splice(0,2,firstTwoSports)
// console.log(text);
// console.log(sports);

//--------------------------------------------------------------------------------------------------------
// Challenge: Array session
// const fullStack = [
//     ["Html", "Css", "Js", "React"],
//     ["Node", "Express", "MongoDB"]
// ];
// const [frontEnd, backEnd] = fullStack;
// const [html, css, script, react] = frontEnd;
// const [node, express, mongoDB] = backEnd;
// console.log("front-end: ", frontEnd)
// console.log("front-end: ", backEnd)

//--------------------------------------------------------------------------------------------------------

// Object
// ترتیب مهم نیست و اینکه به صورت ارایه ها و رشته فراخوانی نمیشه
// const data = {key: "value"}; //ex
// const key = "sport"
// const data2 = {
//     name: "moein",
//     lastName: "mohammadnia",
//     age: 22,
//     address: {
//         country: "Iran",
//         province: {
//             name: "khorasan-razavi",
//             city: "mashhad"
//         },
//     },
//     [key]: "my favorite sport is football" // بهش فهموندم که متغیری به اسم کی وجود دارد و باید مقدارش رو در انجا قرار بدی
// };

// تغییر مقدار متغیر های ابجکت
// data2.name = "mohammad moein";
// data2["lastName"] = "mohammadnia";
// delete data2["sport"]
// or reset
// data2[key] = null;
//
// console.log(data2)
// console.log(data2.name); // نحوه فراخوانی ایتم های مورد نظر
// console.log(data2["lastName"]);

//--------------------------------------------------------------------------------------------------------

// chaining operators and optional chaining operators
// data.name => . is chaining operators
// const act = data2.address.province.city; // the ?. is optional chaining operator
// console.log(act)

// اگر در آدرس دهی مشکلی وجود داشته باشد گاهی اوقات ارور میدهد در این صورت از علامت سوال و نقطه استفاده میکنیم که باعث میشه بجای ارور تعریف نشده رو برگردونه
// console.log("name" in data2) // برای بررسی اینکه مقدار مورد نظر در متغیر مورد نظر وجود دارد

//--------------------------------------------------------------------------------------------------------

// const keys = Object.keys(data2);
// console.log(keys);

// const values = Object.values(data2)
// console.log(values)

//--------------------------------------------------------------------------------------------------------

// const newData2 = {...data2}
// // حالا اگر ارایه اصلی را تغییر دهیم دومی تغییری نخواهد کرد

//--------------------------------------------------------------------------------------------------------

// Object destructing
// const object = {name: "moein", lastName: "mohammadnia", age: 22}
// const {name, lastName} = object;
// در ابجکت نام گذاری باید دقیقا براساس کی های متغیر اصلی مون باشه
// اگر دوتا متغیر هم نام داشته باشیم در حین ئیاستراکت کرئن به روش زیر عمل میکنیم
// const age = 22;
// const {age: age2} = object;
// میگه مقدار کی سن رو بگیر بریز تو متغیر age2

//--------------------------------------------------------------------------------------------------------

// Challenge: Object session

// const data = [
//     {
//         identity: {
//             name: "moein",
//             lastName: "mohammadnia",
//             city: "mashhad",
//             age: 22
//         },
//     },
//     {
//         skills: ["Html", "Css", "Js", "React"]
//     }
// ]
//
// const [identity, skills] = data;
// const {identity: {name, lastName, city, age}} = identity;
// const {skills: [html, css, script, react]} = skills;
// console.log(name, lastName, city, age);
// console.log(skills);
// console.log(html, css, script, react);

//--------------------------------------------------------------------------------------------------------

// Conditional Statement => جملات شرطی
// if ( condition = true/false ) { کاری که باید انجام بده رو اینجا مینویسیم }
// const number = 0;
// if (number > 0){
//     console.log("this number is positive")
// } else {
//     console.log("this number is negative")
// }

// وقتی هم به چندتا شرط نیاز دازیم از else if استفاده میکنیم

// if (number > 0){
//     console.log("this number is positive")
// } else if (number < 0){
//     console.log("this number is negative")
// } else {
//     console.log("number is zero")
// }

//--------------------------------------------------------------------------------------------------------

// Challenge 1: condition statement
// const side1 = 5;
// const side2 = 2;
// const side3 = 3;
//
// if (side1 === side2 && side2 === side3){
//     console.log("متساوی الاضلاع");
// }else if(side1 === side2 || side1 === side3 || side2 === side3){
//     console.log("متساوی الساقین");
// }else{
//     console.log("هیچی")
// }

//--------------------------------------------------------------------------------------------------------

// conditional-statement
// const name = "moein";
// if (name === "moein"){
//     console.log("you are moein")
// } else if (name === "ali"){
//     console.log("you are ali")
// } else {
//     console.log("i don't you know")
// }
// // rebuild with switch-case
// switch ("hasan"){
//     case "moein":
//         console.log("you are moein");
//         break
//     case "milad":
//         console.log("you are milad")
//         break
//     default:
//         console.log("I don't you know")
//         break
//
// }

//--------------------------------------------------------------------------------------------------------

// // For:
// const array = [2, 4, 6 ,8];
// // const index = array.length - 1;
// // for (let i = 0; i <= index; i++){
// for (let i = 0; i < array.length; i++){
//     array[i] = array[i] * 2;
//     console.log(`${i}: `,array[i])
// }

//--------------------------------------------------------------------------------------------------------

// // For-of: specially for array
// const array = [2, 4, 6, 8]
// for (let i of array){
//     console.log(i *= 2)
// }

//--------------------------------------------------------------------------------------------------------

// For-in: specially for Object
// const object = {name: "moein", lastName: "mohammadnia", age: 22}
//
// for (let i in object){
//     console.log(i)
//     console.log(object[i])
// }

//--------------------------------------------------------------------------------------------------------

// Challenge course:
// const object = {name: "moein", lastName: "mohammadnia", age: 22};
// const key = Object.keys(object);
//
// for (let i = 0; i < key.length; i++){
//     console.log(key[i])
//     console.log(object[key[i]])
// }

//--------------------------------------------------------------------------------------------------------

// for (let i = 0; i < 10; i++){
//     console.log(i)
// }

// with will
// the second way
// let j = 1;
// while (j < 10){
//     console.log(`J${j}: `,j);
//     j++
// }
// the third way
// let i = 1;
// let status = true;
// while (status){
//     console.log(i);
//     i++;
//     if (i === 10){
//         status = false;
//         break
//     }
// }

//--------------------------------------------------------------------------------------------------------

// Do-While
// let i = 1;
// do {
//     console.log(i);
//     i++
// }while (i < 10)

//--------------------------------------------------------------------------------------------------------

// continue and Break
// let status = true;
// let i = 1;
// while (status) {
//   console.log(i);
//   i++;
//   if (i === 10) {
//     status = false;
//     break;
//   }
// }
// گاهی اوقات اتفاقی می افتد که ما میخواهیم حلقه متوقف شد برای همین از دستور بریک استفاده مکنیم

//--------------------------------------------------------------------------------------------------------

// const array = [1, 2, "s", 4, 5];
// for (let i of array) {
//   if (typeof i !== "number") {
//     break;
//   }
//   console.log("break: ", i);
// }
// //but
// for (let j of array) {
//   if (typeof j !== "number") {
//     continue;
//   }
//   console.log("continue: ", j);
// }
// در کانتینیو میاد ایتمی که با شرط مخالفه رو در نظر نمیگیره و بقیه رو پرینت میکنه در واقع کل حلقه رو متوقف نمکینه

//--------------------------------------------------------------------------------------------------------

// Challenge: Write a JS code to print Even number to given array

// const numbers = [13, 23, 12, 45, 22, 48, 66, 100];
// const evenNumbers = [];
// for (let i of numbers){
//     if ( i % 2 === 0){
//         evenNumbers.push(i);
//     }
// }
// console.log("Even Numbers: ",evenNumbers)
//
// for (let j = 0 ; j < numbers.length ; j++){
//     for (let i of numbers){
//         if (i % 2 !== 0){
//             numbers.splice(j,1)
//         }
//     }
// }
// console.log("Numbers: ",numbers)

//--------------------------------------------------------------------------------------------------------
// Challenge: Write a JS code to print below pattern
// 1
// 1 2
// 1 2 3
// ...
// const array = []
// for (let i = 1 ; i <= 10; i++){
//     // for (let j = 1; j <= i; j++){
//     //     array.push(j)
//     // }
//     array.push(i)
//     console.log(array)
// }

// second way
// for (let i = 1; i <= 10; i++){
//     let string = ""
//     for (let j = 1; j <= i; j++){
//         string += j + " "
//     }
//     console.log(string)
// }

//--------------------------------------------------------------------------------------------------------

// Challenge: Write a Js code to remove duplicate values in a given array

// const array = [4, 2, 34, 4, 1, 12, 1, 4];
// const newArray = [];
// const duplicatedItem = []
//
// for (let i = 0; i < array.length; i++){
//     if (newArray.indexOf(array[i]) === -1){
//         newArray.push(array[i])
//     }
// }
//
// console.log("new array: ", newArray)

// question: Write a Js code for duplicated array
// for (let i = 0; i < array.length; i++){
//     for (let j = i + 1; j < array.length; j++){
//         if (duplicatedItem.indexOf(array[i]) === -1){
//             if (array[i] === array[j]){
//                 duplicatedItem.push(array[i])
//             }
//         }
//     }
// }
// console.log(duplicatedItem)

//--------------------------------------------------------------------------------------------------------

// Function: is a block of code
// به جای اینکه یک تیکه کد را چندین بار بنویسیم یکبار مینویسیم و چند جا فراخوانی میکنیم
// reusability
// function name(پارامتر) {
// کاری که باید انجام داده بشه رو اینجا تعریف میکنیم
// }
// General structure of function

// name(); // for call name function

//--------------------------------------------------------------------------------------------------------

// به مقدار ورودی که به تابع می دهیم پاراکتر میگویند
// به مقدار ورودی که موقع فراخواندن تابع از آن استفاده میکنیم آرگومان می گویند

// num1 and num2 are parameter
// function sum(num1, num2) {
//   const result = num1 + num2;
// برگرداندن مقدار ریزالت
//   return result;
// }

// نحوه اجرای تابع
// 2, 5 are argoman
// console.log(sum(2, 5));
// or
// const conclusion = sum(10, 15);
// console.log(conclusion);

// بعد از ریترن هرچی بنویسیم دیگه اجرا نمیشه چون زمانی ریترن میکنیم که نتیجه نهایی رو بخوایم

//--------------------------------------------------------------------------------------------------------

// Scope: محدوده - محدوده دسترسی هر متغیر
// 1.Global Scope: بیرونی ترین محدوده ما در بالاترین سطحوالد قرار دارد
// const name = "moein"; // is a global scope that we use of them in function
// function surname(sname) {
//   console.log(sname);
//   const age = 22;
// }
// surname(name);
// console.log(age); // به ما ارور میده میگه نمیشناسه چون متغیر تو محدوده محلی است و فقط داخل همون محدوده دسترسی دارد نه لایه بالاتر خودش
// 2.Local Scope: بهش محدوده تابع هم میگن که داخل تابع تعریف میشود
// 3.Block Scope: به هر محدوده بین اکولاد بسته گفته میشود
// {...}

//--------------------------------------------------------------------------------------------------------

// Const vs. Let vs. Var
// let name = "moein";
// let name = "ali";
// ارور میده میگه نمیتونی یک متغیر رو که قبلا تعریف شده رو دوباره تعریف کنی
// but
// var lastName = "mohammadnia";
// var lastName = "mohammadi";
// console.log(lastName);
// دیده میشه که اروری نمیده و آخرین مقدار تعریف شده در کتغیر چاپ میشود
// در تابع اگر متغیری تعریف کنیم بیرون از تابع به ان دسترسی نداریم
// ولی
// if (true) {
// Block Scope => ES6 and Var => ES5
// پس باهم همخونی ندارن
//   const age = 22;
//   var age2 = 22;
// }
// مشکل اینجاست چون ور بلاک اسکوپ رو نمیشناسه حتی اگر داخلش تعریف بشه بازم میشه خارج از ان بهش دسترسی داشت
// console.log(age2);

//--------------------------------------------------------------------------------------------------------
// Hoisting: بالاآوردن - بالا آمدن
// جاوااسکریپت قبل از اجراشدن میره کدهای مارو به اول حوضه خودش میاره یعنی چی:
// saySomeThing(); // میبینیم زمانی که قبل تعریف کردن تابع فراخوانیش میکنیم بازم به درستی کار میکنه
// function saySomeThing() {
//   console.log("Thing");
// }

// saySomeThing();
// console.log(name);

// var name = "moein"; // اجرامیشه و عمل بالاامدن انجام میشه
// let name = "moein" // اجرا نمیشه ولی عمل بالا امدن اجرا نمیشه و اینکه مقدار دهی نمیشه
// const name = "moein" // مثل لت

//--------------------------------------------------------------------------------------------------------

// Strict mode // بغضی اوقات ممکنه مشکل و باگی در کد وجود داشته باشد که جاوا اسکریپت ازآن چشم پوشی میکند
// با فعال کردن این حالت جاوااسکریپت کدهارو با حساسیت بالاتری بررسی میکنه
// "use strict"; // shortcut is us
// number = 5;
// console.log(number);

// undefined = 6;
// console.log(undefined);

// NaN = 8;
// console.log(NaN);

//--------------------------------------------------------------------------------------------------------

// راه های دیگر تعریف تابع
// به روش قبلی Function Declaration
// Function Expression
// const/let Fun-Name = function () {...}
// Anonymous Function
// function (){...} // هیچ اسمی براش نمیزاریم
// نوع دیگه
// IIFE => immediately invoked function expression
// تابع هایی که در لحظه اجرا میشن
// (function (پارامتر) {
//   console.log("I'm IIFE");
// })();
// حتی اگر براش اسم بزاریم نمیتئنیم صداش بزنیم

//--------------------------------------------------------------------------------------------------------

// Arrow Function
// باید ابتدا انرا درون یک متغیر قراردهیم

// مثال
// const sum = function (num1, num2) {
//   return num1 + num2;
// };
// console.log(sum(1, 2));

// const Sum = (num1, num2) => {
//   return num1 + num2;
// };
// اگر کاری که مامیخوایم انجام دهیم یک خط کد ساده بود به صورت دیگه ای هم میشه نوشت
// const Sum = (num1, num2) => num1 + num2;
// نتیجه رو بصورت خودکار بر میگردونه
// اگر هم فقط یک پارامتر داشته باشه میتوان پرانتزهارو نگذاشت

// const result = Sum(2, 2);
// console.log(result);

//--------------------------------------------------------------------------------------------------------

// بعضی اوقات میخوایم یکار ساده انجام بدم بهروش زیر عمل میکنیم
// const arrowFun = (num1, num2) => num1 + num2;
// console.log(arrowFun(2, 4));
// اگر یک پارامتر داشته باشیم هم لازم نیست پرانتز رو بزاریم

//--------------------------------------------------------------------------------------------------------

// CallBack Function: به یک تابع یک تابع دیگر را به عنوان ورودی  بدهیم
// const showMessage = (text) => {
//   console.log(`The result is ${text}`);
// };
// const sum = (num1, num2, callback) => {
//   if (typeof num1 === "number" && typeof num2 === "number") {
//     const summation = num1 + num2;
//     const result = summation ** 2;
//     callback(result);
//   }
// };
//
// sum(2, 3, showMessage);

//--------------------------------------------------------------------------------------------------------

// forEach: for loop on array just
// const numbers = [1, 2, 4, 6, 4, 3, 2];
// const newNumbers = [];
// numbers.forEach((numbers, index, array) => {
//   console.log(numbers ** 2);
//   console.log("numbers:", numbers);
//   console.log("index:", index);
//   console.log("array:", array);
//   newNumbers.push(numbers * 2);
// });

//--------------------------------------------------------------------------------------------------------

// Map: مثل فور ایچ عمل میکنه بااین تفاوت که خودش یک ارایه می سازه و به ما میده
// const newNumbers = numbers.map((numbers) => numbers * 2);
// console.log(numbers);
// console.log(newNumbers);

//--------------------------------------------------------------------------------------------------------

//Find: برای پیداکردن یک ایتم در آرایه از دستور زیر استفاده میکنیم
// const result = numbers.find((numbers) => {
//   const isEqual = numbers === 4;
//   console.log(isEqual);
//   return isEqual;
// });
// وقتی یکی رو پیدا میکنه کاری به بررسی بقیه ایتم ها نداره
// console.log(result);
// findIndex: برای پیدا کردن اندیس ایتم موردنظر
// const result = numbers.findIndex((numbers) => numbers === 4);
// console.log(result);

//--------------------------------------------------------------------------------------------------------

// filter: بر خلاف دستور فایند تا اخر حلقه یا ایتم هارو بررسی میکنه
// const result = numbers.filter((numbers) => numbers === 4);
// console.log(result);

//--------------------------------------------------------------------------------------------------------

// Challenge: Write a function to find the count of a letter in a string
// const string = "my name is moein and I'm 22 years old";
// let count = 0;
// const findLetter = (parameter) => {
//   for (let i = 0; i < parameter.length; i++) {
//     if (parameter[i] !== " ") {
//       count++;
//     }
//   }
//   console.log(count);
// };
// findLetter(string);
// یک تابع متفاوت تر بررسی میکنه ببینه کلمه مورد نظر چندبار تکرار شده
// let counter = 0;
// const countLetter = (p, l) => {
//   p = p.toLowerCase();
//   l = l.toLowerCase();
//   for (let j = 0; j < p.length; j++) {
//     if (p[j] === l) {
//       counter++;
//     }
//   }
//   console.log(counter);
// };
// countLetter(string, "I");
//--------------------------------------------------------------------------------------------------------

// reduce:
// const numbers = [2, 4, 5, 7, 3, 5];
// // صفر مقدار accumulator هستش درواقع
// const result = numbers.reduce((accumulator, currentValue, index, array) => {
//   return accumulator + currentValue;
// },0);
// console.log(result);
//
// const result2 = numbers.reduce(
//   (accumulator, currentValue) => (accumulator += currentValue),0
// );
// console.log(result2);

//--------------------------------------------------------------------------------------------------------

// Challenge 1. Find customers with age>60 and age<10
// Challenge 2. Build customer data with title and full name

// let customers = [
//   {
//     id: 1,
//     f_name: "Abby",
//     l_name: "Thomas",
//     gender: "M",
//     married: true,
//     age: 32,
//     expense: 500,
//     purchased: ["Shampoo", "Toys", "Book"],
//   },
//   {
//     id: 2,
//     f_name: "Jerry",
//     l_name: "Tom",
//     gender: "M",
//     married: true,
//     age: 64,
//     expense: 100,
//     purchased: ["Stick", "Blade"],
//   },
//   {
//     id: 3,
//     f_name: "Dianna",
//     l_name: "Cherry",
//     gender: "F",
//     married: true,
//     age: 22,
//     expense: 1500,
//     purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
//   },
//   {
//     id: 4,
//     f_name: "Dev",
//     l_name: "Currian",
//     gender: "M",
//     married: true,
//     age: 82,
//     expense: 90,
//     purchased: ["Book"],
//   },
//   {
//     id: 5,
//     f_name: "Maria",
//     l_name: "Gomes",
//     gender: "F",
//     married: false,
//     age: 7,
//     expense: 300,
//     purchased: ["Toys"],
//   },
// ];
//
// const over60 = customers.filter((customer) => customer.age >= 60);
// const under10 = customers.filter((customer) => customer.age <= 10);
// console.log("over60: ", over60);
// console.log("under10: ", under10);
// const newCustomers = customers.map((customer) => {
//   let title = "";
//   if (customer.gender === "M") {
//     title = "Mr.";
//   } else if (customer.gender === "F" && customer.married) {
//     title = "Mrs.";
//   } else {
//     title = "Miss";
//   }
//   customer.fullName = `${title} ${customer.f_name} ${customer.l_name}`;
//   return customer;
// });
// console.log(newCustomers);

//--------------------------------------------------------------------------------------------------------

// every and some
// const data = [1, 2, 3, 4, 5, 6, 7];
// const result = data.every((item) => typeof item === "number"); // در صورتی ترو میده که همه ترو باشند
// const resultSome = data.some((item) => typeof item === "number"); // اگه یکی هم ترو باشه ترو میده
// console.log(result);
// console.log(resultSome);

//--------------------------------------------------------------------------------------------------------

// This:
// کلمه در معنای لغوی به معنای این است اینکه این این چیه معلوم نیست و به خیلی چیزا بستگی دارد مثل اینکه در کجا فراخوانی میشود و...
// console.log(this);
// function showAge() {
//   console.log(this);
// }
// showAge(); // دوباره در فضای گلوبال اجرا شد و نتیجه قبل رو میده در واقع دیس میاد صاحب ابجکت خودش رو در نظر میگیره
// البته اگر تو این حالت تابع که هست از استریکت مود استفاده کنیم تعریف نشده رو بر میگردونه

// globalThis.name = "moein";
// or
// var lastName = "mohammadnia"; // چون گفتی از ور استفاده نکنیم پس از گزینه بالا استفاده مکنیم
// از لت و کانست نمیشه استفاده کرد
// یک محیطی که کدهای جاوااسکریپت ما درون آن اجرا میشود {...}window
// در آبجکت ها تابع نیز میتوان تعریف کرد
// const data = {
//   name: "hasan",
//   showAge2: function () {
//     console.log(this);
//   },
// };
// data.showAge2(); // output: data{...}
// const func = data.showAge2;
// func(); // output: window{...}
// تابع هایی که در آبجکت هستن متود نامیده میشن
//میبینیم تابع در محیط دیتا اجرا میشه بخاطر همین خروجی دیس ابجکت دیتااست
//second way for definitive show func ( better way )
// showAge2(){
//   console.log(this)
// }

//--------------------------------------------------------------------------------------------------------

// This in arrow function
// const data = {
//   name: "moein",
//   show() {
//     console.log(this);
//     console.log(this.name);
//   },
// };
// data.show();
// تو تابع های ارو فان ، دیس به صاحب اون ابجکتی که درونش قرار داره اشاره میکنه
// const data = {
//   name: "moein",
//   show: () => {
//     console.log(this);
//     console.log(this.name);
//   },
// };
// data.show();

//--------------------------------------------------------------------------------------------------------

// bind:
// globalThis.name = "ALI";
// function sayMyName() {
//   console.log(`your name is ${this.name}`);
// }
// sayMyName();
// const data = { name: "MOEIN" };
// sayMyName = sayMyName.bind(data);
// sayMyName(); // مقدار دهی به دیس با روش بایند که ریکت بسیار پرکاربرد است

//--------------------------------------------------------------------------------------------------------

// globalThis.name = "ALI";
// function sayMyName(age) {
//   // parameter: age
//   console.log("age: ", age);
//   console.log(`your name is ${this.name}`);
// }
// sayMyName(26);
// const data = { name: "MOEIN" };
// sayMyName = sayMyName.bind(data, 27); // دادن آرگومان در روش بایند
// sayMyName();

//--------------------------------------------------------------------------------------------------------

// Call and apply
// globalThis.name = "ALI";
// function sayMyName(age) {
//   // parameter: age
//   console.log("age: ", age);
//   console.log(`your name is ${this.name}`);
// }
// sayMyName(26);
// const data = { name: "MOEIN" };
// sayMyName.call(data, 22); // تفاوت کالو اپلای با بایند در نحوه اجراست ، این دو در لحظه اجرا میشوند
// sayMyName.apply(data, [30]); // تفاوت اپلای با کال در نحوه ورود ، ورودیها یا به اصطلاح ارگومان و پارامتر هاست

//--------------------------------------------------------------------------------------------------------

// setter and getter
// const data = {
//   name: "moein",
//   lastName: "mohammadnia",
//   get fullName() {
//     return `${data.name} ${data.lastName}`;
//   },
//   set fullName(string) {
//     [this.name, this.lastName] = string.split(" ");
//   },
// };

// console.log(data.fullName); // چون سینتکس گت و ست برای تغییر و ... باهم فرق میکند اسم هر دو تابع در ابجکت یکی هم باشد اشکال ندارد
// data.fullName = "amin ahmadi";
// console.log(data.fullName);

//--------------------------------------------------------------------------------------------------------

// Challenge: Generate a random integer
// const randomInteger = (min, max) => {
//   if (min === undefined && max === undefined) {
//     return 0;
//   }
//   if (!max) {
//     if (min < 0) {
//       max = -min;
//     } else {
//       min = -min;
//       max = min;
//     }
//   }
//   return Math.round(Math.random() * (max - min) + min);
// };
// چون مقادیر مین و ماکس تعریف نشده است و تعریف نشده ها فالسی هستند بنابراین از
// if ( !min && !max ) هم میشه استفاده کرد
// console.log(randomInteger(-3, 5));
// console.log(randomInteger());
// console.log(randomInteger(-5));

//--------------------------------------------------------------------------------------------------------

// Date object
// const date = new Date();
// console.log(date);

//--------------------------------------------------------------------------------------------------------

// Challenge: Determine age based on Date

// const determine = (birthDate) => {
//   const birthDateMS = new Date(birthDate).getTime();
//   const now = new Date().getTime();
//   const ageMS = now - birthDateMS;
//   const oneDay = 24 * 60 * 60 * 1000;
//   const age = Math.round(ageMS / oneDay);
//   return age;
// };
// console.log(determine("8/9/2001"));

//--------------------------------------------------------------------------------------------------------

// const arr = [1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 8, 8, 9];
// const newSet = new Set(arr);
// const newArr = [...newSet];
// خلاصه دو خط کد بالا
// const newArr = [...new Set(arr)];
// console.log(newArr);

//--------------------------------------------------------------------------------------------------------
// const element = document.querySelector(".container");
// setInterval(() => {
//   element.classList.add("text2");
//   setTimeout(() => {
//     element.classList.remove("text2");
//   }, 1000);
// }, 2000);
// console.dir(element);
// const element2 = document.createElement("span");
// element2.innerText = "moein";
// element2.className = "text2";
// // element.appendChild(element2);
// element.prepend(element2);

//--------------------------------------------------------------------------------------------------------
// const showHandler = () => {
//   console.log("Hi");
// };
//
// const input = document.querySelector("input");
// input.addEventListener("change", showHandler);
// input.addEventListener("focus", showHandler);
// input.addEventListener("blur", showHandler);

//--------------------------------------------------------------------------------------------------------

// const showHandler = (event) => {
//   event.preventDefault();
//   console.log(event);
// };
// const form = document.querySelector("form");
// form.addEventListener("submit", showHandler);

//--------------------------------------------------------------------------------------------------------

// stopPropagation()
// const div = document.querySelector("div.container");
// const button = document.querySelector("div button");
//
// const buttonShowHandler = (event) => {
//   event.stopPropagation();
//   console.log("button");
// };
// const divShowHandler = (event) => {
//   console.log("div");
//   button.removeEventListener("click", buttonShowHandler);
// };
//
// button.addEventListener("click", buttonShowHandler);
// div.addEventListener("click", divShowHandler);

//--------------------------------------------------------------------------------------------------------

// حذف ایونت لیسنری که به ابجکتی اشاره میکنه
// در مثال بالا

//--------------------------------------------------------------------------------------------------------

// Dataset
// const h1 = document.querySelector("h1");
// // console.dir(h1);
// h1.dataset.lastName = "mohammadnia";
// console.log(h1.dataset);

//--------------------------------------------------------------------------------------------------------

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const randomNumber = Math.random();
//     if (randomNumber < 0.5) {
//       console.log("success: ", randomNumber);
//       resolve();
//     } else {
//       console.log("rejected: ", randomNumber);
//       reject();
//     }
//   }, 2000);
// });
//
// promise.then(() => {
//   console.log("success end");
// });
// promise.catch(() => {
//   console.log("rejected end");
// });

//--------------------------------------------------------------------------------------------------------

// XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();

//--------------------------------------------------------------------------------------------------------
// professional coding in script
const foo = { name: "Suibin", age: 30, coder: true };
const bar = { name: "Borja", age: 40, coder: true };
const baz = { name: "Paul", age: 50, coder: false };
console.log("%cStyled log", "color: orange; font-weight: bold;");
console.table([foo, bar, baz]);
// start advance subjects
// پایان
