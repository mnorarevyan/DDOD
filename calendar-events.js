// USER INFO:
// The numbers in Date(2022, 11, 12) represent Date(year, month, day)
// In JavaScript, months start at 0, not at 1. For example, January is 0, Decemeber is 11
// If there are two events on the same day:
// Put the one that starts first before the one that starts later
// Other than that, the order in which you input events doesn't really matter

const calendarEvents = [
    {
        date: new Date(2022, 11, 12),
        timeShort: "7pm",
        timeFull: "7:00pm - 8:00pm",
        imageSource: "https://live.staticflickr.com/65535/52432066912_3e29de2d43_k.jpg",
        name: "A guided tour of the DDO",
        regLink: "https://ca.apm.activecommunities.com/richmondhill/Activity_Search/frosty-camp-junior-winter-break/79420",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi atque quidem quod. Facere repellendus dignissimos assumenda officia esse labore nesciunt, obcaecati consequatur voluptas aut minima magnam pariatur. Voluptatem, dolorem?"
    },
    {
        date: new Date(2022, 11, 12),
        timeShort: "8pm",
        timeFull: "8:00pm - 9:00pm",
        imageSource: "images/Orionid_by-Anne-Danielsen_.png",
        name: "A guided tour of the DDO",
        regLink: "https://ca.apm.activecommunities.com/richmondhill/Activity_Search/frosty-camp-junior-winter-break/79420",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi atque quidem quod. Facere repellendus dignissimos assumenda officia esse labore nesciunt, obcaecati consequatur voluptas aut minima magnam pariatur. Voluptatem, dolorem?"

    },
    {
        date: new Date(2023, 0, 18),
        timeShort: "7pm",
        timeFull: "7:00pm - 8:00pm",
        imageSource: "images/Orionid_by-Anne-Danielsen_.png",
        name: "A guided tour of the DDO",
        regLink: "https://ca.apm.activecommunities.com/richmondhill/Activity_Search/frosty-camp-junior-winter-break/79420",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi atque quidem quod. Facere repellendus dignissimos assumenda officia esse labore nesciunt, obcaecati consequatur voluptas aut minima magnam pariatur. Voluptatem, dolorem?"

    },
    {
        date: new Date(2023, 0, 15),
        timeShort: "7pm",
        timeFull: "7:00pm - 8:00pm",
        imageSource: "images/Orionid_by-Anne-Danielsen_.png",
        name: "A guided tour of the DDO",
        regLink: "https://ca.apm.activecommunities.com/richmondhill/Activity_Search/frosty-camp-junior-winter-break/79420",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi nisi atque quidem quod. Facere repellendus dignissimos assumenda officia esse labore nesciunt, obcaecati consequatur voluptas aut minima magnam pariatur. Voluptatem, dolorem?"
    }
];