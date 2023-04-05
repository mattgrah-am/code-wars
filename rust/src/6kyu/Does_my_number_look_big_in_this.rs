fn narcissistic(num: u64) -> bool {
    num == (num
        .to_string()
        .chars()
        .map(|x| x.to_digit(10).unwrap() as u64)
        .map(|x| x.pow((num.to_string().len()) as u32)))
    .sum::<u64>()
}
