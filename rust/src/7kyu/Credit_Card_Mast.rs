fn maskify(cc: &str) -> String {
    if cc.len() > 4{
        "#".repeat(cc.len()-4) + &cc[cc.len() - 4..]
    } else {
        cc.to_string()
    }
}