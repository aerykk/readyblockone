export default function news() {
    return new Promise((resolve) => {
        resolve({
            rows: [
                {
                    style: 1,
                    items: [
                        {
                            title: 'Welcome to the Brick Brotherhood',
                            author: 'Eric Muyser',
                            category: 'General',
                            image: 'emmet.png',
                            date: Date.now()
                        },
                        {
                            title: 'Newest LEGO Movie set to be produced out of Vancouver, BC in Canada',
                            author: 'Eric Muyser',
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
                            title: 'Welcome to the Brick Brotherhood',
                            author: 'Eric Muyser',
                            category: 'General',
                            image: 'emmet.png',
                            date: Date.now()
                        },
                        {
                            title: 'Newest LEGO Movie set to be produced out of Vancouver, BC in Canada',
                            author: 'Eric Muyser',
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
