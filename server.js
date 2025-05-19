const express = require('express');
const app = express();
const PORT = 4000;

const houses = [
  {
    "id": "0367baf3-1cb6-4baf-bede-48e17e1cd005",
    "name": "Gryffindor",
    "houseColours": "Scarlet and gold",
    "founder": "Godric Gryffindor",
    "animal": "Lion",
    "element": "Fire",
    "ghost": "Nearly-Headless Nick",
    "commonRoom": "Gryffindor Tower",
    "heads": [
      {
        "id": "530da97d-5a83-4ea6-bc15-790edf5b5efc",
        "firstName": "Minerva",
        "lastName": "McGonagall"
      },
      {
        "id": "9915c5f8-9177-4f63-bba8-d04387a404f9",
        "firstName": "Godric",
        "lastName": "Gryffindor"
      }
    ],
    "traits": [
      {
        "id": "1773bce8-7a22-4d57-b8e1-7e1cbe26fa2b",
        "name": "Courage"
      },
      {
        "id": "21f22e43-efd9-4a43-87f5-eab5fb1666ea",
        "name": "Chivalary"
      },
      {
        "id": "60d8f5d0-de4b-41f7-b152-40543555bf3a",
        "name": "Nerve"
      },
      {
        "id": "68f73efc-fae9-4a54-b3e2-04bbe72f5d63",
        "name": "Daring"
      },
      {
        "id": "7e6d321d-fe7d-4c05-8ad7-ddabda83d8cd",
        "name": "Determination"
      },
      {
        "id": "adf83e9f-859b-41c4-947d-b359a05f8f3c",
        "name": "Bravery"
      }
    ]
  },
  {
    "id": "805fd37a-65ae-4fe5-b336-d767b8b7c73a",
    "name": "Ravenclaw",
    "houseColours": "Blue and bronze",
    "founder": "Rowena Ravenclaw",
    "animal": "Eagle",
    "element": "Air",
    "ghost": "Grey Lady",
    "commonRoom": "Ravenclaw Tower",
    "heads": [
      {
        "id": "102ac5fc-db71-4055-8250-bc238cffb3d9",
        "firstName": "Filius",
        "lastName": "Flitwick"
      },
      {
        "id": "57c04cf4-f3dd-46d6-a78f-84c30fb42533",
        "firstName": "Rowena",
        "lastName": "Ravenclaw"
      }
    ],
    "traits": [
      {
        "id": "08a54d21-6137-4eda-9c32-004706650b44",
        "name": "Learning"
      },
      {
        "id": "5056effc-b92b-4f86-96fd-978b26a849da",
        "name": "Acceptance"
      },
      {
        "id": "78db6224-33d1-490d-a553-9bbbedb3282a",
        "name": "Inteligence"
      },
      {
        "id": "ab88a4fb-1c4d-4e14-88bf-7f55dfabb75a",
        "name": "Wisdom"
      },
      {
        "id": "e43d0b2f-dcfe-4a5f-b3ab-d39679bbfbe3",
        "name": "Wit"
      },
      {
        "id": "ffc55017-c03f-490a-9c48-2f38af6e2f0a",
        "name": "Creativity"
      }
    ]
  },
  {
    "id": "85af6295-fd01-4170-a10b-963dd51dce14",
    "name": "Hufflepuff",
    "houseColours": "Yellow and black",
    "founder": "Helga Hufflepuff",
    "animal": "Badger",
    "element": "Earth",
    "ghost": "Fat Friar",
    "commonRoom": "Hufflepuff Basement",
    "heads": [
      {
        "id": "a593e800-95dc-47ab-9243-6ac98d2f6ab4",
        "firstName": "Helga",
        "lastName": "Hufflepuff"
      },
      {
        "id": "fab07935-774e-4eb4-8ed5-621bfe416d85",
        "firstName": "Pomona",
        "lastName": "Sprout"
      }
    ],
    "traits": [
      {
        "id": "22d8bc5b-67ee-49fb-89ee-8811fc22062b",
        "name": "Hardworking"
      },
      {
        "id": "76973c67-0dd1-4aca-b0b7-b053d9eaf206",
        "name": "Patience"
      },
      {
        "id": "a8494f18-caff-491e-96e3-1ff73bd6f4ab",
        "name": "Loyalty"
      },
      {
        "id": "af80b93e-3c61-4586-824a-8f7e6ac4ae0a",
        "name": "Just"
      },
      {
        "id": "c080647f-5b31-434f-8327-376abbfb0989",
        "name": "Fairness"
      },
      {
        "id": "f62f4753-fdb5-473b-a8ac-07c1b5844eec",
        "name": "Modesty"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c1",
    "name": "Slytherin",
    "houseColours": "Green and silver",
    "founder": "Salazar Slytherin",
    "animal": "Serpent",
    "element": "Water",
    "ghost": "Bloody Baron",
    "commonRoom": "Slytherin Dungeon",
    "heads": [
      {
        "id": "36ba2ceb-6b6f-48a3-b512-9c1e66321eff",
        "firstName": "Horace",
        "lastName": "Slughorn"
      },
      {
        "id": "5cac8ad3-b5fc-4c48-a951-990cdd5671bc",
        "firstName": "Salazar",
        "lastName": "Slytherin"
      },
      {
        "id": "ef90f8c9-9f03-478e-baec-8a3c487e5271",
        "firstName": "Severus",
        "lastName": "Snape"
      }
    ],
    "traits": [
      {
        "id": "0992c505-80dd-4b49-ad0b-3b7383d6ec89",
        "name": "Resourcefulness"
      },
      {
        "id": "36dad9bf-010e-47ef-8908-ecb6d5acfac5",
        "name": "Selfpreservation"
      },
      {
        "id": "42b7c304-5e62-4fae-9e52-f8c6a106e406",
        "name": "Ambition"
      },
      {
        "id": "540aaafe-6185-4dc8-94ed-bd0236b433d3",
        "name": "Cunning"
      },
      {
        "id": "d7b7c1b7-3fce-4474-9fd1-9b731e0b2649",
        "name": "Pride"
      },
      {
        "id": "df43d46b-1ebf-409d-a63e-6c6bcb049aef",
        "name": "Determination"
      }
    ]
  },
  // generate 100 more houses test cases
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c2",
    "name": "House 1",
    "houseColours": "Red and white",
    "founder": "Founder 1",
    "animal": "Eagle",
    "element": "Fire",
    "ghost": "Ghost 1",
    "commonRoom": "Common Room 1",
    "heads": [
      {
        "id": "head1",
        "firstName": "Head 1 First Name",
        "lastName": "Head 1 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait1",
        "name": "Trait 1"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c3",
    "name": "House 2",
    "houseColours": "Blue and white",
    "founder": "Founder 2",
    "animal": "Lion",
    "element": "Earth",
    "ghost": "Ghost 2",
    "commonRoom": "Common Room 2",
    "heads": [
      {
        "id": "head2",
        "firstName": "Head 2 First Name",
        "lastName": "Head 2 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait2",
        "name": "Trait 2"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c4",
    "name": "House 3",
    "houseColours": "Green and white",
    "founder": "Founder 3",
    "animal": "Serpent",
    "element": "Water",
    "ghost": "Ghost 3",
    "commonRoom": "Common Room 3",
    "heads": [
      {
        "id": "head3",
        "firstName": "Head 3 First Name",
        "lastName": "Head 3 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait3",
        "name": "Trait 3"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c5",
    "name": "House 4",
    "houseColours": "Yellow and white",
    "founder": "Founder 4",
    "animal": "Badger",
    "element": "Air",
    "ghost": "Ghost 4",
    "commonRoom": "Common Room 4",
    "heads": [
      {
        "id": "head4",
        "firstName": "Head 4 First Name",
        "lastName": "Head 4 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait4",
        "name": "Trait 4"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c6",
    "name": "House 5",
    "houseColours": "Black and white",
    "founder": "Founder 5",
    "animal": "Wolf",
    "element": "Earth",
    "ghost": "Ghost 5",
    "commonRoom": "Common Room 5",
    "heads": [
      {
        "id": "head5",
        "firstName": "Head 5 First Name",
        "lastName": "Head 5 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait5",
        "name": "Trait 5"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c7",
    "name": "House 6",
    "houseColours": "Purple and white",
    "founder": "Founder 6",
    "animal": "Tiger",
    "element": "Fire",
    "ghost": "Ghost 6",
    "commonRoom": "Common Room 6",
    "heads": [
      {
        "id": "head6",
        "firstName": "Head 6 First Name",
        "lastName": "Head 6 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait6",
        "name": "Trait 6"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c8",
    "name": "House 7",
    "houseColours": "Orange and white",
    "founder": "Founder 7",
    "animal": "Bear",
    "element": "Air",
    "ghost": "Ghost 7",
    "commonRoom": "Common Room 7",
    "heads": [
      {
        "id": "head7",
        "firstName": "Head 7 First Name",
        "lastName": "Head 7 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait7",
        "name": "Trait 7"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9c9",
    "name": "House 8",
    "houseColours": "Pink and white",
    "founder": "Founder 8",
    "animal": "Elephant",
    "element": "Earth",
    "ghost": "Ghost 8",
    "commonRoom": "Common Room 8",
    "heads": [
      {
        "id": "head8",
        "firstName": "Head 8 First Name",
        "lastName": "Head 8 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait8",
        "name": "Trait 8"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9ca",
    "name": "House 9",
    "houseColours": "Brown and white",
    "founder": "Founder 9",
    "animal": "Fox",
    "element": "Fire",
    "ghost": "Ghost 9",
    "commonRoom": "Common Room 9",
    "heads": [
      {
        "id": "head9",
        "firstName": "Head 9 First Name",
        "lastName": "Head 9 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait9",
        "name": "Trait 9"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9cb",
    "name": "House 10",
    "houseColours": "Grey and white",
    "founder": "Founder 10",
    "animal": "Deer",
    "element": "Water",
    "ghost": "Ghost 10",
    "commonRoom": "Common Room 10",
    "heads": [
      {
        "id": "head10",
        "firstName": "Head 10 First Name",
        "lastName": "Head 10 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait10",
        "name": "Trait 10"
      }
    ]
  },
  // Add more houses as needed
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9cc",
    "name": "House 11",
    "houseColours": "Cyan and white",
    "founder": "Founder 11",
    "animal": "Penguin",
    "element": "Earth",
    "ghost": "Ghost 11",
    "commonRoom": "Common Room 11",
    "heads": [
      {
        "id": "head11",
        "firstName": "Head 11 First Name",
        "lastName": "Head 11 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait11",
        "name": "Trait 11"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9cd",
    "name": "House 12",
    "houseColours": "Magenta and white",
    "founder": "Founder 12",
    "animal": "Giraffe",
    "element": "Fire",
    "ghost": "Ghost 12",
    "commonRoom": "Common Room 12",
    "heads": [
      {
        "id": "head12",
        "firstName": "Head 12 First Name",
        "lastName": "Head 12 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait12",
        "name": "Trait 12"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9ce",
    "name": "House 13",
    "houseColours": "Lime and white",
    "founder": "Founder 13",
    "animal": "Koala",
    "element": "Air",
    "ghost": "Ghost 13",
    "commonRoom": "Common Room 13",
    "heads": [
      {
        "id": "head13",
        "firstName": "Head 13 First Name",
        "lastName": "Head 13 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait13",
        "name": "Trait 13"
      }
    ]
  },
  {
    "id": "a9704c47-f92e-40a4-8771-ed1899c9b9cf",
    "name": "House 14",
    "houseColours": "Olive and white",
    "founder": "Founder 14",
    "animal": "Zebra",
    "element": "Water",
    "ghost": "Ghost 14",
    "commonRoom": "Common Room 14",
    "heads": [
      {
        "id": "head14",
        "firstName": "Head 14 First Name",
        "lastName": "Head 14 Last Name"
      }
    ],
    "traits": [
      {
        "id": "trait14",
        "name": "Trait 14"
      }
    ]
  }
]

app.get('/houses', (req, res) => {
  const name = req.query.name || '';
  const offset = parseInt(req.query.offset) || 0;
  const limit = parseInt(req.query.limit) || houses.length;

  let filteredHouses = houses;

  if (name) {
    filteredHouses = filteredHouses.filter(house =>
      house.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  if (filteredHouses.length === 0) {
    return res.json([]);
  }

  if (offset < 0 || limit <= 0 || offset >= filteredHouses.length) {
    return res.status(400).json({ message: 'Invalid offset or limit' });
  }

  const paginatedHouses = filteredHouses.slice(offset, offset + limit);

  res.json(paginatedHouses);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});