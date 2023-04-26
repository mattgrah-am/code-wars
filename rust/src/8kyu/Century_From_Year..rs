fn century(year: u32) -> u32 {
    if year % 100 == 0 {
        year / 100
    } else {
        year / 100 + 1
    }
  }