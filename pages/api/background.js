const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'The Hong Kong University of Science and Technology',
                degree: 'Computer Engineering and Economics',
                detail: "Bachelor's Degree in Program Development",
                year: '2013-2017'
            },
            // {
            //     id: 1,
            //     title: 'Peshawar Model Degree College',
            //     degree: 'HSSC, Pre Engineering',
            //     detail: "Completed FSC part 1 and part 2 in Pre-Engineering from Peshawar Model Degree College.",
            //     year: '2015-2017'
            // },
            {
                id: 2,
                title: "St. Joseph's College",
                degree: 'SSC, Science Subjects',
                detail: "Completed SSC part 1 and part 2 in Science subjects from St. Joseph's College Seni Gumbat Kohat",
                year: '2010-2013'
            },
        ]
    },
    {
        expCards: [
            {
                id: 1,
                title: 'JMM Technologies',
                role: 'Frontend Developer',
                url: 'https://jmm.ltd/',
                desc: 'As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.',
                year: '10/2023 - 03/2024',
                location: 'Kowloon, Hong Kong'
            },
            {
                id: 2,
                title: 'HauzaTech',
                role: 'Internee',
                url: 'no website',
                desc: 'As an Internee, I learned how to use React & JavaScript to build interactive websites.',
                year: '02/2020 - 03/20221',
                location: 'Kowloon, Hong Kong'
            },
            {
                id: 3,
                title: 'Encoder Bytes',
                role: 'PHP Developer',
                url: 'https://www.encoderbytes.com/',
                desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
                year: '09/2018 - 02/2019',
                location: 'Kowloon, Hong Kong'
            },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
