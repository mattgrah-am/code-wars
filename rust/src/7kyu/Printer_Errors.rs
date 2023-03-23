fn printer_error(s: &str) -> String {
    format!("{}/{}", s.chars().filter(err_char).count(), s.len())
}

fn err_char(c: &char) -> bool {
    match c {
        'a'..='m' => false,
        _ => true,
    }
}