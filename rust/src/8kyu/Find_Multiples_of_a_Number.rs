fn find_multiples(n: u32, limit: u32) -> Vec<u32> {
    
    let mut v = Vec::new();
    let mut counter = 1;
    
    while counter*n <= limit{
        v.push(counter*n);
        counter+=1;
    } 
    return v;
}