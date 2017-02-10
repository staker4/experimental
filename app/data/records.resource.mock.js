angular
    .module("app.mocks")
    .run(appRun);

function appRun($http, $httpBackend) {

    var records = getRecordsData();

    var url = "/api/records";
    var editRegex = new RegExp(url + "/[0-9][0-9]*", "");

    $httpBackend.whenGET(url).respond(records);
    $httpBackend.whenGET(editRegex).respond(getResponse);
    $httpBackend.whenPOST(url).respond(postResponse);
    $httpBackend.whenGET(/^(?!api)/).passThrough();

    function getRecords() {
        return $http.get('records.json')
            .then(getDataComplete)
            .catch(function (message) {
                return [];
            });

        function getDataComplete(data, status, headers, config) {
            return data.data;
        }
    }

    function getResponse(method, url, data) {

        var record = {
            "id": 0
        };

        var parameters = url.split("/");
        var length = parameters.length;
        var id = parameters[length - 1];

        if (id > 0) {
            for (var i = 0; i < records.length; i++) {
                if (records[i].id == id) {
                    record = records[i];
                    break;
                }
            };
        }

        return [200, record, {}];
    }

    function postResponse(method, url, data) {

        var record = angular.fromJson(data);

        if (!record.id) {
            // Create record
            record.id = records[records.length - 1].id + 1;
            records.push(record);
        } else {
            // Update record
            for (var i = 0; i < records.length; i++) {
                if (records[i].id == record.id) {
                    records[i] = record;
                    break;
                }
            };
        }
        return [200, record, {}];
    }

    function getRecordsData() {

        var records = [{
                "id": 0,
                "owner": "Nguyen Hancock",
                "status": "done",
                "subrecords": []
            },
            {
                "id": 1,
                "owner": "Tyson Watts",
                "status": "in progress",
                "subrecords": [{
                        "id": 0,
                        "owner": "Juliet Medina",
                        "status": "todo"
                    },
                    {
                        "id": 1,
                        "owner": "Levy Hughes",
                        "status": "done"
                    },
                    {
                        "id": 2,
                        "owner": "Saunders Goodwin",
                        "status": "in progress"
                    },
                    {
                        "id": 3,
                        "owner": "Allyson Knight",
                        "status": "done"
                    },
                    {
                        "id": 4,
                        "owner": "Sharon Carrillo",
                        "status": "todo"
                    },
                    {
                        "id": 5,
                        "owner": "Avila Nunez",
                        "status": "in progress"
                    },
                    {
                        "id": 6,
                        "owner": "Elisa Sellers",
                        "status": "done"
                    },
                    {
                        "id": 7,
                        "owner": "Hickman Hampton",
                        "status": "todo"
                    },
                    {
                        "id": 8,
                        "owner": "Byers Snider",
                        "status": "todo"
                    }
                ]
            },
            {
                "id": 2,
                "owner": "Lupe Jenkins",
                "status": "in progress",
                "subrecords": [{
                        "id": 0,
                        "owner": "Blair Mcfarland",
                        "status": "todo"
                    },
                    {
                        "id": 1,
                        "owner": "Nixon Mclaughlin",
                        "status": "todo"
                    },
                    {
                        "id": 2,
                        "owner": "Gilmore Short",
                        "status": "todo"
                    },
                    {
                        "id": 3,
                        "owner": "Maria Garner",
                        "status": "todo"
                    }
                ]
            },
            {
                "id": 3,
                "owner": "Cecelia Rosales",
                "status": "todo",
                "subrecords": [{
                        "id": 0,
                        "owner": "Fuentes Oliver",
                        "status": "in progress"
                    },
                    {
                        "id": 1,
                        "owner": "Bean Klein",
                        "status": "done"
                    },
                    {
                        "id": 2,
                        "owner": "Leticia Mathis",
                        "status": "todo"
                    },
                    {
                        "id": 3,
                        "owner": "Tracy Kirkland",
                        "status": "todo"
                    },
                    {
                        "id": 4,
                        "owner": "Yvonne Blanchard",
                        "status": "done"
                    }
                ]
            },
            {
                "id": 4,
                "owner": "Chrystal Savage",
                "status": "in progress",
                "subrecords": [{
                        "id": 0,
                        "owner": "Mcfadden Bright",
                        "status": "in progress"
                    },
                    {
                        "id": 1,
                        "owner": "Watkins Hood",
                        "status": "in progress"
                    },
                    {
                        "id": 2,
                        "owner": "Cruz Ayers",
                        "status": "done"
                    },
                    {
                        "id": 3,
                        "owner": "Rosa Fisher",
                        "status": "done"
                    },
                    {
                        "id": 4,
                        "owner": "Oliver Booth",
                        "status": "todo"
                    }
                ]
            },
            {
                "id": 5,
                "owner": "Faulkner Reed",
                "status": "in progress",
                "subrecords": [{
                    "id": 0,
                    "owner": "Lesley Ruiz",
                    "status": "done"
                }]
            },
            {
                "id": 6,
                "owner": "Chase Gallagher",
                "status": "in progress",
                "subrecords": [{
                        "id": 0,
                        "owner": "Zelma Lindsey",
                        "status": "todo"
                    },
                    {
                        "id": 1,
                        "owner": "Casey Payne",
                        "status": "in progress"
                    },
                    {
                        "id": 2,
                        "owner": "Estelle Blackburn",
                        "status": "todo"
                    }
                ]
            },
            {
                "id": 7,
                "owner": "Watts Sanchez",
                "status": "todo",
                "subrecords": []
            },
            {
                "id": 8,
                "owner": "Kennedy Key",
                "status": "done",
                "subrecords": [{
                        "id": 0,
                        "owner": "Alice Alford",
                        "status": "in progress"
                    },
                    {
                        "id": 1,
                        "owner": "Hester Stanley",
                        "status": "done"
                    },
                    {
                        "id": 2,
                        "owner": "Kirby May",
                        "status": "in progress"
                    },
                    {
                        "id": 3,
                        "owner": "Richardson Hunt",
                        "status": "done"
                    },
                    {
                        "id": 4,
                        "owner": "Bridget Hayden",
                        "status": "done"
                    },
                    {
                        "id": 5,
                        "owner": "Atkins Rios",
                        "status": "in progress"
                    },
                    {
                        "id": 6,
                        "owner": "Conley Brown",
                        "status": "in progress"
                    }
                ]
            },
            {
                "id": 9,
                "owner": "Kathrine Rodgers",
                "status": "in progress",
                "subrecords": [{
                        "id": 0,
                        "owner": "Hinton Solomon",
                        "status": "in progress"
                    },
                    {
                        "id": 1,
                        "owner": "Victoria Sutton",
                        "status": "in progress"
                    },
                    {
                        "id": 2,
                        "owner": "Tasha Allison",
                        "status": "in progress"
                    },
                    {
                        "id": 3,
                        "owner": "Bowers Velasquez",
                        "status": "in progress"
                    }
                ]
            },
            {
                "id": 10,
                "owner": "Tucker Michael",
                "status": "in progress",
                "subrecords": [{
                        "id": 0,
                        "owner": "Beach Delaney",
                        "status": "todo"
                    },
                    {
                        "id": 1,
                        "owner": "Lillian Cherry",
                        "status": "done"
                    },
                    {
                        "id": 2,
                        "owner": "Leola Burnett",
                        "status": "done"
                    },
                    {
                        "id": 3,
                        "owner": "Moran Mercer",
                        "status": "done"
                    },
                    {
                        "id": 4,
                        "owner": "Robles Rush",
                        "status": "todo"
                    },
                    {
                        "id": 5,
                        "owner": "Hayden Woodard",
                        "status": "todo"
                    },
                    {
                        "id": 6,
                        "owner": "Linda Oneal",
                        "status": "done"
                    }
                ]
            },
            {
                "id": 11,
                "owner": "Cohen Warren",
                "status": "in progress",
                "subrecords": [{
                        "id": 0,
                        "owner": "Wanda Morgan",
                        "status": "todo"
                    },
                    {
                        "id": 1,
                        "owner": "Clarke Strong",
                        "status": "todo"
                    },
                    {
                        "id": 2,
                        "owner": "Bass Sherman",
                        "status": "todo"
                    },
                    {
                        "id": 3,
                        "owner": "Nash Harrison",
                        "status": "todo"
                    },
                    {
                        "id": 4,
                        "owner": "Karen Bird",
                        "status": "done"
                    },
                    {
                        "id": 5,
                        "owner": "Mack Case",
                        "status": "in progress"
                    },
                    {
                        "id": 6,
                        "owner": "Tyler Beck",
                        "status": "in progress"
                    },
                    {
                        "id": 7,
                        "owner": "Sellers Nolan",
                        "status": "todo"
                    },
                    {
                        "id": 8,
                        "owner": "Polly Garza",
                        "status": "done"
                    },
                    {
                        "id": 9,
                        "owner": "Cameron Snow",
                        "status": "todo"
                    }
                ]
            },
            {
                "id": 12,
                "owner": "Cooke Hyde",
                "status": "done",
                "subrecords": [{
                        "id": 0,
                        "owner": "Rodriguez Boone",
                        "status": "in progress"
                    },
                    {
                        "id": 1,
                        "owner": "Coffey Dominguez",
                        "status": "done"
                    },
                    {
                        "id": 2,
                        "owner": "Freda Rowland",
                        "status": "todo"
                    }
                ]
            },
            {
                "id": 13,
                "owner": "Stafford Reyes",
                "status": "in progress",
                "subrecords": [{
                        "id": 0,
                        "owner": "Traci Whitehead",
                        "status": "in progress"
                    },
                    {
                        "id": 1,
                        "owner": "Sandra Ashley",
                        "status": "todo"
                    },
                    {
                        "id": 2,
                        "owner": "Ella Buckner",
                        "status": "todo"
                    },
                    {
                        "id": 3,
                        "owner": "Bertie Marks",
                        "status": "done"
                    }
                ]
            },
            {
                "id": 14,
                "owner": "Billie Hickman",
                "status": "done",
                "subrecords": [{
                        "id": 0,
                        "owner": "Bates Marsh",
                        "status": "done"
                    },
                    {
                        "id": 1,
                        "owner": "Jeanie Barrera",
                        "status": "todo"
                    },
                    {
                        "id": 2,
                        "owner": "Randall King",
                        "status": "in progress"
                    },
                    {
                        "id": 3,
                        "owner": "Glover Stafford",
                        "status": "todo"
                    },
                    {
                        "id": 4,
                        "owner": "Morris Flowers",
                        "status": "done"
                    }
                ]
            },
            {
                "id": 15,
                "owner": "Trina Arnold",
                "status": "todo",
                "subrecords": [{
                        "id": 0,
                        "owner": "Vasquez Pate",
                        "status": "in progress"
                    },
                    {
                        "id": 1,
                        "owner": "Genevieve Farley",
                        "status": "todo"
                    },
                    {
                        "id": 2,
                        "owner": "Leonard Sheppard",
                        "status": "todo"
                    },
                    {
                        "id": 3,
                        "owner": "Mari Fitzpatrick",
                        "status": "in progress"
                    },
                    {
                        "id": 4,
                        "owner": "Santiago Logan",
                        "status": "in progress"
                    },
                    {
                        "id": 5,
                        "owner": "Tonia Burt",
                        "status": "todo"
                    },
                    {
                        "id": 6,
                        "owner": "Odonnell Ortiz",
                        "status": "todo"
                    },
                    {
                        "id": 7,
                        "owner": "Alexandria Joyner",
                        "status": "done"
                    }
                ]
            },
            {
                "id": 16,
                "owner": "Phelps Vincent",
                "status": "done",
                "subrecords": [{
                        "id": 0,
                        "owner": "Leach Navarro",
                        "status": "done"
                    },
                    {
                        "id": 1,
                        "owner": "Tammi Gonzalez",
                        "status": "in progress"
                    },
                    {
                        "id": 2,
                        "owner": "Kris Carney",
                        "status": "in progress"
                    },
                    {
                        "id": 3,
                        "owner": "Sofia Tyler",
                        "status": "todo"
                    },
                    {
                        "id": 4,
                        "owner": "Morton Ramirez",
                        "status": "todo"
                    },
                    {
                        "id": 5,
                        "owner": "Navarro Parks",
                        "status": "in progress"
                    },
                    {
                        "id": 6,
                        "owner": "Robyn Chavez",
                        "status": "in progress"
                    }
                ]
            },
            {
                "id": 17,
                "owner": "Gladys Franklin",
                "status": "todo",
                "subrecords": [{
                        "id": 0,
                        "owner": "Brandy Wise",
                        "status": "todo"
                    },
                    {
                        "id": 1,
                        "owner": "Alvarez Buchanan",
                        "status": "in progress"
                    },
                    {
                        "id": 2,
                        "owner": "Anthony Perry",
                        "status": "todo"
                    },
                    {
                        "id": 3,
                        "owner": "Conner Guy",
                        "status": "done"
                    },
                    {
                        "id": 4,
                        "owner": "Newton Swanson",
                        "status": "todo"
                    },
                    {
                        "id": 5,
                        "owner": "Lane Alston",
                        "status": "in progress"
                    },
                    {
                        "id": 6,
                        "owner": "Hatfield Gaines",
                        "status": "todo"
                    },
                    {
                        "id": 7,
                        "owner": "Rivera Lamb",
                        "status": "done"
                    }
                ]
            },
            {
                "id": 18,
                "owner": "Ellen Giles",
                "status": "todo",
                "subrecords": [{
                    "id": 0,
                    "owner": "Logan Paul",
                    "status": "done"
                }]
            },
            {
                "id": 19,
                "owner": "Noelle Bray",
                "status": "in progress",
                "subrecords": [{
                        "id": 0,
                        "owner": "Lillie Vance",
                        "status": "in progress"
                    },
                    {
                        "id": 1,
                        "owner": "Hensley Guerrero",
                        "status": "done"
                    },
                    {
                        "id": 2,
                        "owner": "Lula Daugherty",
                        "status": "in progress"
                    },
                    {
                        "id": 3,
                        "owner": "Lawson Hartman",
                        "status": "todo"
                    },
                    {
                        "id": 4,
                        "owner": "Ilene Stokes",
                        "status": "in progress"
                    },
                    {
                        "id": 5,
                        "owner": "Gail Nash",
                        "status": "todo"
                    },
                    {
                        "id": 6,
                        "owner": "Avery Terry",
                        "status": "todo"
                    },
                    {
                        "id": 7,
                        "owner": "Deborah Tran",
                        "status": "done"
                    }
                ]
            }
        ];

        return records;
    }
}