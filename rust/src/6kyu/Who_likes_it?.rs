fn likes(names: &[&str]) -> String {
    if names.len() == 1 {
        return format!("{} likes this", names[0]);
    }
    else if names.len() == 2 {
        return format!("{} and {} like this", names[0], names[1]);
    }
    else if names.len() == 3 {
        return format!("{}, {} and {} like this", names[0], names[1], names[2]);
    }
    else if names.len() > 3 {
        return format!("{}, {} and {} others like this", names[0], names[1], names.len() - 2);
    }
    else {
        return "no one likes this".to_string();
    }
}