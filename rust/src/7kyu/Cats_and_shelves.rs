pub fn cats_and_shelves(start: u8, finish: u8) -> u8 {
    (finish - start) % 3 + (finish - start) / 3
}

