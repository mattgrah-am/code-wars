fn disemvowel(s: &str) -> String {
    s.chars()
        .filter(|&c| !"aeiou".contains(c.to_ascii_lowercase()))
        .collect()
}
