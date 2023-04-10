fn power_of_two(x: u64) -> bool {
    if x == 1 {
        true
    } else if x == 0 || x % 2 != 0 {
        false
    } else {
        power_of_two(x / 2)
    }
}