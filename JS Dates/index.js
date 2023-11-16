const d = new Date();
d;

{
    const d = new Date("2022-03-25");
    d;
}

{
    const d = new Date("October 13, 2014 11:13:00");
    d;
}

{
    const d = new Date(2018, 11, 24, 10, 33, 30, 0); // here 11 means december month and if more than add to next year
    d;
}

{
    let d = new Date(2018, 15, 24, 10, 33, 30); // 15 month means +4 in next year
    d;
    d = new Date(2019, 3, 24, 10, 33, 30);
    d;
}

{
    let d = new Date(2018, 5, 35, 10, 33, 30);
    d;
    d = new Date(2018, 6, 5, 10, 33, 30);
    d;
}

{
    let d;
    d = new Date(2018, 11, 24, 10, 33, 30);
    d;
    d = new Date(2018, 11, 24, 10, 33);
    d;
    d = new Date(2018, 11, 24, 10);
    d;
    d = new Date(2018, 11, 24);
    d;
    d = new Date(2018, 11);
    d;
    d = new Date(2018); // Here is the cache, here only one arg means milli seconds from JAN 1970
    d;
}

{
    let d;
    d = new Date(99, 11, 24);
    d;
    d = new Date(9, 11, 24);
    d;
}

{
    let d;
    d = new Date(100000000000);
    d;
    d = new Date(-100000000000);
    d;
}

{
    let d;
    d = new Date(24 * 60 * 60 * 1000);
    d;
    d = new Date(86400000);
    d;
    d = new Date(0);
    d;
    console.log(d.toString());
    console.log(d.toDateString());
    console.log(d.toUTCString());
    console.log(d.toISOString());
}

// methods on date

{
    const d = new Date("2021-03-25"); // here static date is there so change for dynamic
    console.log(d.getFullYear());
    console.log(d.getDate());
    console.log(d.getMonth());
    console.log(d.getDay());
    console.log(d.getHours());
    console.log(d.getMinutes());
    console.log(d.getSeconds());
    console.log(d.getMilliseconds());
    console.log(d.getTime());
    console.log(Date.now());
}

{
    const d = new Date();
    console.log(d.setFullYear(2020))
    console.log(d.setMonth(11))
    console.log(d.setDate(15))
    d
    d.setHours(22);
    d.setMinutes(30)
    d.setSeconds(30)
    d

}

{
    let text = "";
    const today = new Date();
    const someday = new Date();
    someday.setFullYear(2100, 0, 14);

    if (someday > today) {
        text = "Today is before January 14, 2100.";
    } else {
        text = "Today is after January 14, 2100.";
    }
    text
}

