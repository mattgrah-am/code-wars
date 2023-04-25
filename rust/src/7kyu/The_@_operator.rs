fn evaluate(equation: String) -> Option<i64> {
    let mut arr = equation.split('@').map(|x| i64::from_str_radix(&x.replace(' ',""),10).unwrap()).rev().collect::<Vec<i64>>();
    let mut rs = arr.pop().unwrap();    
    while arr.len() != 0 {        
        let b = arr.pop().unwrap();
        if b == 0 {
            return None;
        }
        rs = 2 * rs + (rs * b)+ ( rs / b);       
    }
    Some(rs)
}