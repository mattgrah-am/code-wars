fn nb_year(p0: i32, percent: f64, aug: i32, p: i32)-> i32 {
    let mut pop = p0;
    let multiplier : f64 = 1 as f64 + percent/100.0;
    let mut counter = 0;
    while pop < p {
        pop = (pop as f64 * multiplier).floor() as i32 + aug;
        counter += 1;
    }
    
    counter
}