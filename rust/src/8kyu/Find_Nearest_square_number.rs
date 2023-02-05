fn nearest_sq(n: u32) -> u32 {
    return (n as f32).sqrt().round().powi(2) as u32;
}
