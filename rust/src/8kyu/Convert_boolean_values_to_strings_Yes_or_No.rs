fn bool_to_word(value: bool) -> &'static str {
    if value {
        return "Yes".to_string();
    } else {
        return "No".to_string();
    }
}
