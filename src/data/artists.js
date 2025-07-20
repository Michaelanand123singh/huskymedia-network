export const artists = [
  {
    id: 1,
    name: "Ajay Devgan",
    image: "/images/artists/ajay-devgan.jpg",
    genre: ["Action", "Drama"],
    status: "Featured",
    stats: {
      followers: "2.5M",
      streams: "45M",
      growth: "+25%"
    },
    description: "Versatile actor and filmmaker known for intense performances and blockbuster hits.",
    joinedDate: "2020",
    achievements: ["National Film Award", "Padma Shri", "Multiple Filmfare Awards"]
  },
  {
    id: 2,
    name: "Akshay Kumar",
    image: "/images/artists/akshay-kumar.jpg",
    genre: ["Action", "Comedy", "Drama"],
    status: "Rising",
    stats: {
      followers: "3.2M",
      streams: "62M",
      growth: "+35%"
    },
    description: "Prolific actor known for diverse roles and dedication to fitness and social causes.",
    joinedDate: "2019",
    achievements: ["Padma Shri", "National Film Award", "Box Office King"]
  },
  {
    id: 3,
    name: "Deepika Padukone",
    image: "/images/artists/deepika-padukone.jpg",
    genre: ["Romance", "Drama", "Action"],
    status: "Established",
    stats: {
      followers: "4.1M",
      streams: "78M",
      growth: "+20%"
    },
    description: "International star and mental health advocate with critically acclaimed performances.",
    joinedDate: "2018",
    achievements: ["Time 100 Most Influential", "Padma Shri", "International Recognition"]
  },
  {
    id: 4,
    name: "Ranveer Singh",
    image: "/images/artists/ranveer-singh.jpg",
    genre: ["Drama", "Romance", "Historical"],
    status: "Featured",
    stats: {
      followers: "3.8M",
      streams: "72M",
      growth: "+30%"
    },
    description: "Dynamic performer known for transformative roles and charismatic screen presence.",
    joinedDate: "2021",
    achievements: ["Filmfare Awards", "Critics Choice", "Commercial Success"]
  },
  {
    id: 5,
    name: "Shahid Kapoor",
    image: "/images/artists/shahid-kapoor.jpg",
    genre: ["Romance", "Drama", "Thriller"],
    status: "Established",
    stats: {
      followers: "2.9M",
      streams: "58M",
      growth: "+18%"
    },
    description: "Versatile actor with a strong dance background and critically acclaimed performances.",
    joinedDate: "2020",
    achievements: ["Filmfare Awards", "Screen Awards", "Dance Excellence"]
  },
  {
    id: 6,
    name: "John Abraham",
    image: "/images/artists/john-abraham.jpg",
    genre: ["Action", "Thriller", "Drama"],
    status: "Rising",
    stats: {
      followers: "2.1M",
      streams: "41M",
      growth: "+22%"
    },
    description: "Action star and producer known for high-octane films and fitness inspiration.",
    joinedDate: "2022",
    achievements: ["Producer Success", "Action Star", "Fitness Icon"]
  }
];

export const featuredArtists = artists.filter(artist => artist.status === "Featured");
export const risingArtists = artists.filter(artist => artist.status === "Rising");
export const establishedArtists = artists.filter(artist => artist.status === "Established");