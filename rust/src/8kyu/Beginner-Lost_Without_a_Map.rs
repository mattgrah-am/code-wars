fn maps(values: &Vec<i32>) -> Vec<i32> {
    return values.iter().map(|n| n * 2).collect()
}
