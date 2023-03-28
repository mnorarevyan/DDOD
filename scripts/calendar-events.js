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
        desc: "Explore the wonders and mysteries of the nighttime sky. What is the Milky Way? What are stars made of? How did the Earth and Moon form? Why do we believe the Universe began in a Big Bang? We will discuss these and other topics, as well as the underlying laws of nature and the tools we use to explore the universe. Join us on this four-week journey of cosmic discovery, every Wednesday from Jan 18 to Feb 8! No prior knowledge of Astronomy is required. All concepts and theories will be explained and your questions answered in simple language by our professional astronomers. A registered adult must accompany all registered participants under the age of 16."
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
        name: "Astronomy Family Night",
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
      },
      {
        class: "dropdown-1-1",
        date: new Date(2023, 2, 12),
        timeShort: "2pm",
        timeFull: "2:00pm - 3:00pm",
        imageSource: "https://live.staticflickr.com/65535/52138379526_908b06b4cd_c.jpg",
        name: "Space Fun!",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/82245?onlineSiteId=0&from_original_cui=true",
        desc: "Come out and use your imagination to experience space and all the wonders it has to offer. Through crafts, games, stories and songs about the seasons and nighttime sky, your child's creativity will run wild. All activities will be held in the Administration Building. Adult participation is required. One adult guardian and one child per registration."
      },
      {
        class: "dropdown-1-1",
        date: new Date(2023, 2, 14),
        timeShort: "1pm",
        timeFull: "1:00pm - 3:00pm",
        imageSource: "https://live.staticflickr.com/65535/52138379526_908b06b4cd_c.jpg",
        name: "Astro Crafts",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/81620?onlineSiteId=0&from_original_cui=true",
        desc: "Learn stories about several easy to recognize constellations and how to find these in the real nighttime sky. We'll then guide you step-by-step to make your own working planetarium that will project constellations onto your walls and ceiling at night. The planetarium kit is included in the price of the program. Adult participation is required. One adult guardian and one child per registration."
      },
      {
        class: "dropdown-1-1",
        date: new Date(2023, 2, 15),
        timeShort: "2pm",
        timeFull: "2:00pm - 4:00pm",
        imageSource: "https://live.staticflickr.com/65535/52138379526_908b06b4cd_c.jpg",
        name: "Cosmic Detectives",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/81624?onlineSiteId=0&from_original_cui=true",
        desc: "Learn how to navigate the nighttime sky to discover its hidden treasures. This program teaches participants to recognize the major constellations in the nighttime sky and know the locations and stories behind some of the universe’s most dreamlike objects, such as black holes, nebulae, galaxies and globular star clusters. We will show the nighttime sky using a powerful simulation program and participants will be encouraged to find the stars and galaxies."
      },
     {
        class: "dropdown-1-8",
        date: new Date(2023, 2, 18),
        timeShort: "7pm",
        timeFull: "7:00pm - 8:30pm",
        imageSource: "https://live.staticflickr.com/65535/51937983883_36674629a7_k.jpg",
        name: "Up In The Sky",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/81488?onlineSiteId=0&from_original_cui=true",
        desc: "This program provides an illustrated one-hour presentation and discussion about what exciting celestial events to look for each season. The events and phenomena will be explained using simple language, with recommendations about how best to observe and photograph them. A registered adult must accompany all registered participants under the age of 16."
      },
      {
        class: "dropdown-1-1",
        date: new Date(2023, 3, 1),
        timeShort: "8pm",
        timeFull: "8:00pm - 10:00pm",
        imageSource: "https://live.staticflickr.com/65535/52138379526_908b06b4cd_c.jpg",
        name: "Astronmy Family Night",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/85269?onlineSiteId=0&from_original_cui=true",
        desc: "Families will be introduced to the wonders of astronomy through a presentation on a variety of exciting astronomy topics, followed by an age-appropriate celestial activities and a demonstration of the 74” telescope. If the sky is clear the dome will be opened and the telescope pointed to an interesting celestial object for the visitors to view. All participating family members must be registered and a registered adult must accompany any registered participants under the age of 16. Please wear / bring appropriate supplies for being outdoors and arrive 15 minutes prior to the program start time in order to be signed in. This program runs rain or shine."
      },
      {
        class: "dropdown-1-1",
        date: new Date(2023, 3, 16),
        timeShort: "2pm",
        timeFull: "2:00pm - 3:00pm",
        imageSource: "https://live.staticflickr.com/65535/52138379526_908b06b4cd_c.jpg",
        name: "Space Fun!",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/85222?onlineSiteId=0&from_original_cui=true",
        desc: "Come out and use your imagination to experience space and all the wonders it has to offer. Through crafts, games, stories and songs about the seasons and nighttime sky, your child's creativity will run wild. All activities will be held in the Administration Building. Adult participation is required. One adult guardian and one child per registration."
      },
      {
        class: "dropdown-1-1",
        date: new Date(2023, 3, 22),
        timeShort: "8:30pm",
        timeFull: "8:30pm - 10:30pm",
        imageSource: "https://live.staticflickr.com/65535/51720605450_afac8c79e9_k.jpg",
        name: "Astronomy Speaker Night - Earth Day",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/85289?onlineSiteId=0&from_original_cui=true",
        desc: "Visit a unique historical site in Richmond Hill and experience an engaging presentation led by experts and researchers in astronomy, covering a variety of exciting astronomy topics. After the presentation, participants will tour the observatory and see a demonstration of the 74” telescope pointed to an interesting celestial object for the visitors to view (Weather Dependent). Please wear / bring appropriate supplies for being outside. A registered adult must accompany all registered participants under the age of 16. Please arrive 15 minutes prior to the program start time in order to be signed in. This program runs rain or shine."
      },
      {
        class: "dropdown-1-1",
        date: new Date(2023, 3, 28),
        timeShort: "8pm",
        timeFull: "8:00pm - 10:00pm",
        imageSource: "https://live.staticflickr.com/65535/51937983883_36674629a7_k.jpg",
        name: "How to Use your Telescope",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/85221?onlineSiteId=0&from_original_cui=true",
        desc: "Do you have a telescope at home and are in need of some guidance on how to use it? Bring your telescope to this workshop to have it assessed and to receive one on one instruction on its use outdoors as weather permits (indoors otherwise). Maximum two people and one telescope per registration. Participants under the age of 16 must be accompanied by a registered adult."
      },
      {
        class: "dropdown-1-1",
        date: new Date(2023, 4, 12),
        timeShort: "8:30pm",
        timeFull: "8:30pm - 10:30pm",
        imageSource: "https://live.staticflickr.com/65535/51720605450_afac8c79e9_k.jpg",
        name: "Astonomy Speaker Night",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/85231?onlineSiteId=0&from_original_cui=true",
        desc: "Visit a unique historical site in Richmond Hill and experience an engaging presentation led by experts and researchers in astronomy, covering a variety of exciting astronomy topics. After the presentation, participants will tour the observatory and see a demonstration of the 74” telescope pointed to an interesting celestial object for the visitors to view (Weather Dependent). Please wear / bring appropriate supplies for being outside. A registered adult must accompany all registered participants under the age of 16. Please arrive 15 minutes prior to the program start time in order to be signed in. This program runs rain or shine."
      },
      {
        class: "dropdown-1-1",
        date: new Date(2023, 4, 26),
        timeShort: "8:30pm",
        timeFull: "8:30pm - 10:30pm",
        imageSource: "https://live.staticflickr.com/65535/52138379526_908b06b4cd_c.jpg",
        name: "Astonomy Family Night",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/85227?onlineSiteId=0&from_original_cui=true",
        desc: "Families will be introduced to the wonders of astronomy through a presentation on a variety of exciting astronomy topics, followed by an age-appropriate celestial activities and a demonstration of the 74” telescope. If the sky is clear the dome will be opened and the telescope pointed to an interesting celestial object for the visitors to view. All participating family members must be registered and a registered adult must accompany any registered participants under the age of 16. Please wear / bring appropriate supplies for being outdoors and arrive 15 minutes prior to the program start time in order to be signed in. This program runs rain or shine."
      },
      {
        class: "dropdown-1-10",
        date: new Date(2023, 5, 10),
        timeShort: "8:30pm",
        timeFull: "8:30pm - 10:30pm",
        imageSource: "https://live.staticflickr.com/65535/51720605450_afac8c79e9_k.jpg",
        name: "Astonomy Speaker Night",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/85233?onlineSiteId=0&from_original_cui=true",
        desc: "Visit a unique historical site in Richmond Hill and experience an engaging presentation led by experts and researchers in astronomy, covering a variety of exciting astronomy topics. After the presentation, participants will tour the observatory and see a demonstration of the 74” telescope pointed to an interesting celestial object for the visitors to view (Weather Dependent). Please wear / bring appropriate supplies for being outside. A registered adult must accompany all registered participants under the age of 16. Please arrive 15 minutes prior to the program start time in order to be signed in. This program runs rain or shine."
      },
      {
        class: "dropdown-1-8",
        date: new Date(2023, 5, 16),
        timeShort: "9pm",
        timeFull: "9:00pm - 10:30pm",
        imageSource: "https://live.staticflickr.com/65535/51937983883_36674629a7_k.jpg",
        name: "Up In The Sky",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/85220?onlineSiteId=0&from_original_cui=true",
        desc: "This program provides an illustrated one-hour presentation and discussion about what exciting celestial events to look for each season. The events and phenomena will be explained using simple language, with recommendations about how best to observe and photograph them. A registered adult must accompany all registered participants under the age of 16."
      },
      {
        class: "dropdown-1-9",
        date: new Date(2023, 5, 23),
        timeShort: "8:30pm",
        timeFull: "8:30pm - 10:30pm",
        imageSource: "https://live.staticflickr.com/65535/52138379526_908b06b4cd_c.jpg",
        name: "Astronomy Family Night",
        regLink: "https://anc.ca.apm.activecommunities.com/richmondhill/activity/search/detail/85230?onlineSiteId=0&from_original_cui=true",
        desc: "Families will be introduced to the wonders of astronomy through a presentation on a variety of exciting astronomy topics, followed by an age-appropriate celestial activities and a demonstration of the 74” telescope. If the sky is clear the dome will be opened and the telescope pointed to an interesting celestial object for the visitors to view. All participating family members must be registered and a registered adult must accompany any registered participants under the age of 16. Please wear / bring appropriate supplies for being outdoors and arrive 15 minutes prior to the program start time in order to be signed in. This program runs rain or shine."
      }
];
