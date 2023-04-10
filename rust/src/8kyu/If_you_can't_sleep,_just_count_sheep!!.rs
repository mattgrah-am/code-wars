fn count_sheep(n: u32) -> String {
    let mut s = String::new();
    for i in 0..n {
        s.push_str(&format!("{} sheep...", 1 + i));
    }
    s
}