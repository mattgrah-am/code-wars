fn get_sum(a: i64, b: i64) -> i64 {
    if a < b {
        (a..=b).sum::<i64>()
      }else{
        (b..=a).sum::<i64>()
      }
}