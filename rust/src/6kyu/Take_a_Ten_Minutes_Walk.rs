fn is_valid_walk(walk: &[char]) -> bool {
    let mut n = 0;
    let mut w = 0;
    for s in walk {
        match s {
            'n' => n += 1,
            's' => n -= 1,
            'w' => w += 1,
            'e' => w -= 1,
            _ => {}
        }
    }
    n == 0 && w == 0 && walk.len() == 10
}
