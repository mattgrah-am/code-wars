fn rgb(r: i32, g: i32, b: i32) -> String { // Not really idiomatic, would receive u8 ideally
    format!("{:02X}{:02X}{:02X}", fix_byte(r), fix_byte(g), fix_byte(b))
  }
  
  fn fix_byte(x: i32) -> u8 {
      if x > 255 { 255 } else if x < 0 { 0 } else { x as u8 }
  }