fn trim(phrase: &str, length: usize) -> String {
    let mut res = phrase.to_string();
    if res.len() <= length {
        return res;
    } else if res.len() > length && length <= 3 {
        res.truncate(length);
        res.push_str("...");
    } else {
        res.truncate(length - 3);
        res.push_str("...");
    }
    res
}
