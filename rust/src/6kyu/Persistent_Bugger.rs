fn persistence(num: u64) -> u64 {
    let mut i = 0;
    let mut num = num;
    while num >= 10 {
        i+=1;
        num = num.to_string().chars().map(|x| x as u64 - 48).product::<u64>();
        }
    i
}