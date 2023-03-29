fn make_readable(s: u32) -> String {
    let (m, s) = (s / 60, s % 60);
    let (h, m) = (m / 60, m % 60);
    format!("{:02}:{:02}:{:02}", h, m, s)
}