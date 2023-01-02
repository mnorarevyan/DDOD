// USER INFO:
// The numbers in Date(2022, 11, 12) represent Date(year, month, day)
// In JavaScript, months start at 0, not at 1. For example, January is 0, Decemeber is 11
// If there are two events on the same day:
// Put the one that starts first before the one that starts later
// Other than that, the order in which you input events doesn't really matter

const calendarEvents = [
    {
        class: "dropdown-1-3",
        date: new Date(2023, 0, 7),
        timeShort: "7pm",
        timeFull: "7:00pm - 9:00pm",
        imageSource: "https://live.staticflickr.com/65535/51937983883_36674629a7_k.jpg",
        name: "How to Use your Telescope",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/81472?onlineSiteId=0&from_original_cui=true",
        desc: "Do you have a telescope at home and are in need of some guidance on how to use it? Bring your telescope to this workshop to have it assessed and to receive one on one instruction on its use outdoors as weather permits (indoors otherwise). Maximum two people and one telescope per registration. Participants under the age of 16 must be accompanied by a registered adult."
    },
    {
        class: "dropdown-1-1",
        date: new Date(2023, 0, 14),
        timeShort: "7pm",
        timeFull: "7:00pm - 8:30pm",
        imageSource: "https://live.staticflickr.com/65535/52138379526_908b06b4cd_c.jpg",
        name: "Virtual Astronomy Speaker Night",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/81492?onlineSiteId=0&from_original_cui=true",
        desc: "Join us, from the comfort of your home! This program will feature live-stream views from the DDO's 74-Inch telescope (Weather permitting). Explore breaking news from space and current research into what lies beyond our home planet! Each night, we’ll take a virtual tour of the DDO, hear from our speakers about their own amazing space research, and ask them all our questions about what they know and what they’re discovering. Only one registration per household is required. Deadline to register for this program is Wednesday January 11, 2023 at 4pm. Prior to the start of the program you will be emailed information on the virtual program links and any specific information relating to your program."
    },
    {
        class: "dropdown-1-4",
        date: new Date(2023, 0, 18),
        timeShort: "7pm",
        timeFull: "7:00pm - 9:00pm",
        imageSource: "https://live.staticflickr.com/65535/51720605450_afac8c79e9_k.jpg",
        name: "Intro to Astronomy",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/81499?onlineSiteId=0&from_original_cui=true",
        desc: 'Explore the wonders and mysteries of the nighttime sky. What is the Milky Way? What are stars made of? How did the Earth and Moon form? Why do we believe the Universe began in a "Big Bang"? We will discuss these and other topics, as well as the underlying laws of nature and the tools we use to explore the universe. Join us on this four-week journey of cosmic discovery, every Wednesday from Jan 18 to Feb 8! No prior knowledge of Astronomy is required. All concepts and theories will be explained and your questions answered in simple language by our professional astronomers. A registered adult must accompany all registered participants under the age of 16.'
    },
    {
        class: "dropdown-1-3",
        date: new Date(2023, 1, 3),
        timeShort: "7pm",
        timeFull: "7:00pm - 9:00pm",
        imageSource: "https://live.staticflickr.com/65535/51937983883_36674629a7_k.jpg",
        name: "How to Use your Telescope",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/81950?onlineSiteId=0&from_original_cui=true",
        desc: "Do you have a telescope at home and are in need of some guidance on how to use it? Bring your telescope to this workshop to have it assessed and to receive one on one instruction on its use outdoors as weather permits (indoors otherwise). Maximum two people and one telescope per registration. Participants under the age of 16 must be accompanied by a registered adult."
    },
    {
        class: "dropdown-1-1",
        date: new Date(2023, 1, 18),
        timeShort: "7pm",
        timeFull: "7:00pm - 8:30pm",
        imageSource: "https://live.staticflickr.com/65535/52138379526_908b06b4cd_c.jpg",
        name: "Virtual Astronomy Speaker Night",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/81507?onlineSiteId=0&from_original_cui=true",
        desc: "Join us, from the comfort of your home! This program will feature live-stream views from the DDO's 74-Inch telescope (Weather permitting). Explore breaking news from space and current research into what lies beyond our home planet! Each night, we’ll take a virtual tour of the DDO, hear from our speakers about their own amazing space research, and ask them all our questions about what they know and what they’re discovering. Only one registration per household is required. Deadline to register for this program is Wednesday February 15, 2023 at 4pm. Prior to the start of the program you will be emailed information on the virtual program links and any specific information relating to your program."
    },
    {
        class: "dropdown-1-3",
        date: new Date(2023, 2, 4),
        timeShort: "7pm",
        timeFull: "7:00pm - 9:00pm",
        imageSource: "https://live.staticflickr.com/65535/51937983883_36674629a7_k.jpg",
        name: "How to Use your Telescope",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/81497?onlineSiteId=0&from_original_cui=true",
        desc: "Do you have a telescope at home and are in need of some guidance on how to use it? Bring your telescope to this workshop to have it assessed and to receive one on one instruction on its use outdoors as weather permits (indoors otherwise). Maximum two people and one telescope per registration. Participants under the age of 16 must be accompanied by a registered adult."
    }
];