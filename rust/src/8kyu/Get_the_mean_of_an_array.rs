fn get_average(marks: &[i32]) -> i32 {
    marks.iter().sum::<i32>().div_euclid(marks.len() as i32)
}