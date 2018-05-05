export default function news() {
    return new Promise((resolve) => {
        resolve({
            rows: [
                {
                    style: 1,
                    items: [
                        {
                            title: 'Welcome to the site',
                            author: 'Anon',
                            category: 'General',
                            image: 'emmet.png',
                            date: Date.now()
                        },
                        {
                            title: 'Stuff and things',
                            author: 'Anon',
                            category: 'Entertainment',
                            image: null,
                            date: Date.now()
                        }
                    ]
                },
                {
                    style: 2,
                    items: [
                        {
                            title: 'Welcome to the site',
                            author: 'Anon',
                            category: 'General',
                            image: 'emmet.png',
                            date: Date.now()
                        },
                        {
                            title: 'Stuff and things',
                            author: 'Anon',
                            category: 'Entertainment',
                            image: 'heroes.png',
                            date: Date.now()
                        }
                    ]
                }
            ]
        })
    })
}
