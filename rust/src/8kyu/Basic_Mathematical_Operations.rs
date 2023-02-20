fn basic_op(operator: char, value1: i32, value2: i32) -> i32 {
    if operator == '+' {
        value1 + value2
    } else if operator == '-' {
        value1 - value2
    } else if operator == '*' {
        value1 * value2
    } else if operator == '/' {
        value1 / value2
    } else {
        0
    }
}
