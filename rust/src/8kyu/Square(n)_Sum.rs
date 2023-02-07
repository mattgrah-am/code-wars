fn square_sum(vec: Vec<i32>) -> i32 {
    return vec.iter().fold(0, |acc, x| acc + x * x);
}