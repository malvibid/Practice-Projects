//CODEDAMN Exercise (FreeCodeCamp) - TELEPHONE NUMBER VALIDATOR
//Find all test cases tested here: regexr.com/6ghk4

function telephoneCheck(str) {
  let regex =
    /^(1)?[ -]?(\d{3})[ -]?(\d{3})[ -]?(\d{4})$|^(1)?[ -]?\((\d{3})\)[ -]?(\d{3})[ -]?(\d{4})$/g;

  if (regex.test(str)) return true;
  else return false;
}

telephoneCheck("555-555-5555");
telephoneCheck("555-555-5555");
telephoneCheck("1 555-555-5555");
telephoneCheck("1 (555) 555-5555");
telephoneCheck("5555555555");
telephoneCheck("555-555-5555");
telephoneCheck("(555)555-5555");
telephoneCheck("1(555)555-5555");
telephoneCheck("555-5555");
telephoneCheck("5555555");
telephoneCheck("1 555)555-5555");
telephoneCheck("1 555 555 5555");
telephoneCheck("1 456 789 4444");
telephoneCheck("123**&!!asdf#");
telephoneCheck("55555555");
telephoneCheck("(6054756961)");
telephoneCheck("2 (757) 622-7382");
telephoneCheck("0 (757) 622-7382");
telephoneCheck("-1 (757) 622-7382");
telephoneCheck("2 757 622-7382");
telephoneCheck("10 (757) 622-7382");
telephoneCheck("27576227382");
telephoneCheck("(275)76227382");
telephoneCheck("2(757)6227382");
telephoneCheck("2(757)622-7382");
telephoneCheck("555)-555-5555");
telephoneCheck("(555-555-5555");
telephoneCheck("(555)5(55?)-5555");
