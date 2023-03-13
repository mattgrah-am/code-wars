fn is_triangle(a: i64, b: i64, c: i64) -> bool {
    return a + b > c && b + c > a && c + a > b;
}
