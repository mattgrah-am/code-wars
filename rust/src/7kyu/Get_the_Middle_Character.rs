fn get_middle(s:&str) -> &str {
    if s.len() % 2 == 0 {
        &s[(s.len() / 2 - 1)..(s.len() / 2 + 1)]
    } else {
        &s[(s.len() / 2)..(s.len() / 2 + 1)]
    }
}