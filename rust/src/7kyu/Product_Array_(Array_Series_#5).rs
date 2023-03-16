fn product_array(nums: &[u64]) -> Vec<u64> {
    let prod = nums.iter().product::<u64>();
    nums.iter().map(|num| prod / num).collect()
}
