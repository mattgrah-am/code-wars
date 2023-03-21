fn find_even_index(arr: &[i32]) -> Option<usize> {
    let (mut r, mut l) = (arr.iter().sum::<i32>(), 0);
    for (i, n) in arr.iter().enumerate() {
        r -= n;
        if r == l { return Some(i) }
        l += n;
    }
    None
}