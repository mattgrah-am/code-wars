fn find_short(s: &str) -> u32 {
    s.split_whitespace()
        .map(|word| word.len())
        .min()
        .unwrap_or(0) as u32
}
