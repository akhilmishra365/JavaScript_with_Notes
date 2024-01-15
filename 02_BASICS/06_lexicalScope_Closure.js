// function init() {
//     var name = "Mozilla"; // name is a local variable created by init
//     function displayName() {
//       // displayName() is the inner function, that forms the closure
//       console.log(name); // use variable declared in the parent function
//     }
//     displayName();
//   }
//   init()




//    basically ye ki bahr wala andr wale function se access ho skta hia but andr wala bahr se ni hoga access;

//______________________CLOSURE_____________________


function makeFunc() {
    const name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
    //DEKHO PICHLIBAAR HM PURE FUNCTION KO  RETURN KR RE THE displayName() BUT IS BAAR HM RETURN KR RE HAI FUNCTION KA REFRENCE HI PASS KR RE HAI AS A RETURN 
  }
  
  const myFunc = makeFunc();
  myFunc();

//   CLOSURE YHI KEH RA KI JB HM KOI FUNCTION RETURN KRTE HAI TOH NA SIRF FUNCTION RETURN HO RA BLKI USKA PURA KA PURA Lexical SCOPE RETURN HO RA HAI 

  //BHAI CLOSURER YEGHI KEH RA KI JB HM DISPLAY NAME RETURN KR RE TOH HM SIRF INNER FUNCTIOMN KO NI RETURN KR RE BUT US INNER FUNCTION KE SAATH JO OUTER FUNCTION HAI NA USK A
  //BHI PURA LEXICAL SCOPE RETURN HOGA I.E INNER OUTER FUNCTION MEMORY SHARE KRTE HAI NA KI SIRF EXECUTIONAL CONTEXT 





