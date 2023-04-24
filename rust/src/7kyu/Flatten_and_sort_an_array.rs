fn flatten_and_sort(arr: &[Vec<i32>]) -> Vec<i32> {
    let mut result: Vec<i32> = vec![];
    for i in 0..arr.len() {
        for j in 0..arr[i].len() {
            result.push(arr[i][j]);
        }
    }
    result.sort();
    return result;
}