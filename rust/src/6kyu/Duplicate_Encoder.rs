fn duplicate_encode(word: &str) -> String {
    let s = String::from(word).to_lowercase();
    s.chars()
        .map(|c| if s.find(c) == s.rfind(c) { '(' } else { ')' })
        .collect()
}
