fn count_duplicates(text: &str) -> u32 {
    if text.len() < 1 {
        return 0;
    }
    let mut dupes = 0;
    let mut text = text.to_lowercase();
    let i = text.remove(0);
    if text.contains(i) {
        dupes += 1;
    }
    text = text.split(i).collect::<Vec<&str>>().join("");
    dupes += count_duplicates(&*text);
    dupes
}