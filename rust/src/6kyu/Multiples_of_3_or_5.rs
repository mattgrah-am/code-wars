fn solution(num: i32) -> i32 {
    let mut sum = 0;

    for count in 1..num {
        if count % 3 == 0 || count % 5 == 0 {
            sum = sum + count;
        }
    }

    sum
}
