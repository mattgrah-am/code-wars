fn lovefunc(flower1: u16, flower2: u16) -> bool {
    fn flowerCheck(flower: u16) -> &'static str {
        if flower % 2 == 0 {
            return "even";
        }
        else {
            return "odd"; 
        }  
   }
   return flowerCheck(flower1) != flowerCheck(flower2);
}