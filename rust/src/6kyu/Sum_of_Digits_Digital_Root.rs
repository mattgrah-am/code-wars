fn digital_root(n: i64) -> i64 {
    if n < 10 {
        n //Base step
    } else {
        digital_root(sum_digits(n))
    }
}

fn sum_digits(n: i64) -> i64 {
    let mut sum = 0;
    let mut n = n;
    while n != 0 {
        sum += n % 10;
        n = n / 10;
    }
    sum
}
