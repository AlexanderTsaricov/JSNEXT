const musicalCollection = {
    alboms: [
        {
            title: "Будь как дома путник",
            artist: "Король и шут",
            year: 1997,
        },
        {
            title: "Камнем по голове",
            artist: "Король и шут",
            year: 1997,
        },
        {
            title: "Акустический альбом",
            artist: "Король и Шут",
            year: 1998,
        },
        {
            title: "Герои и Злодеи",
            artist: "Король и Шут",
            year: 2000,
        },
        {
            title: "Мертвый анархист",
            artist: "Король и Шут",
            year: 2001,
        },
        {
            title: "Жаль, нет ружья",
            artist: "Король и шут",
            year: 2002,
        },
        {
            title: "Бунт на корабле",
            artist: "Король и шут",
            year: 2004,
        },
        {
            title: "Тень колдуна",
            artist: "Король и шут",
            year: 2008,
        },
        {
            title: "Театр демона",
            artist: "Король и шут",
            year: 2010,
        },
    ],
    [Symbol.iterator]() {
        return {
            index: 0,
            alboms: this.alboms,
            next() {
                return this.index < this.alboms.length
                    ? { done: false, value: this.alboms[this.index++] }
                    : { done: true };
            },
        };
    },
};

for (const element of musicalCollection) {
    console.log(`${element.title} - ${element.artist} (${element.year})`);
}
