fn positive_sum(slice: &[i32]) -> i32 {
    return slice.iter().filter(|x| x.is_positive()).sum();
}
