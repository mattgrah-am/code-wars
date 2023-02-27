fn dna_strand(dna: &str) -> String {
    dna.chars().map(|c|
        match c {
            'A' => 'T',
            'T' => 'A',
            'C' => 'G',
            'G' => 'C',
            s => s
        }
    ).collect::<String>()
  }