fn count_bits(n: i64) -> u32 {
    format!("{:b}", n).matches('1').count() as u32
}