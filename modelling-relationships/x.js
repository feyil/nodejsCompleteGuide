// Trade off between query performance vs consistency

// Using References (Normalization) -> CONSISTENCY

let author = {
    name: "Mosh"
}

let course = {
    author: "id",
    authors: [
        "id1",
        "id2"
    ]
}

// Using embedded documents (Denormalization) -> PERFORMANCE

let course = {
    author: {
        name: "Mosh"
    }
}


// Hybrid
let author = {
    name:"Mosh"
    // 50 other properties
}

let course = {
    author: {
        id: "ref",
        name: "Mosh"
    }
}