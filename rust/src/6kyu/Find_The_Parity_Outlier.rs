fn find_outlier(s: &[i32]) -> i32 {
    let is_even = |x: &&_| *x % 2 == 0;
    let is_odd = |x: &&_| *x % 2 != 0;
    *s.iter()
        .find(if s.iter().take(3).filter(is_even).count() > 1 {
            is_odd
        } else {
            is_even
        })
        .unwrap()
}
