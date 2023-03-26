fn longest_repetition(s: &str) -> Option<(char, usize)> {
    if s.len() == 0 {
        return None;
    }

    let len = s.len();
    let mut count = 0;
    let mut curr_count = 1;
    let mut res: u8 = 0;

    s.chars().enumerate().for_each(|(i, c)| {
        if i < len - 1 && c == s.chars().nth(i + 1).unwrap() {
            curr_count += 1;
        } else {
            if curr_count > count {
                count = curr_count;
                res = c as u8;
            }
            curr_count = 1;
        }
    });

    Some((res as char, count))
}
