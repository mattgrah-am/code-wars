fn quarter_of(month: u8) -> u8 {
    if month <= 3 {
        return 1;
    } else if month <= 6 {
        return 2
    } else if month <= 9 {
        return 3
    } else {
        return 4
    }
}