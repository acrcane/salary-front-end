const users = [
    {
      id: 1,
      name: 'Anna',
      age: 17,
      active: true,
      tags: ['frontend', 'react'],
      address: { city: 'Lviv', zip: 79000 },
      contacts: { email: 'anna@gmail.com' }
    },
    {
      id: 2,
      name: 'Oleh',
      age: 22,
      active: false,
      tags: ['backend', 'node'],
      address: { city: 'Kyiv', zip: 17100 },
      contacts: { email: 'oleh@gmail.com' }
    },
    {
      id: 3,
      name: 'Ira',
      age: 30,
      active: true,
      tags: ['fullstack', 'vue', 'react'],
      address: { city: 'Ternopil', zip: 46000 },
      contacts: { email: 'ira@gmail.com' }
    }
  ];
//   Поверни імена користувачів з тегом 'react'

//   Отримай всі email-адреси активних користувачів
  
//   Чи є користувачі з міста 'Lviv'?
  
//   Сформуй масив рядків типу 'Anna (17) - anna@gmail.com'
  
//   Поверни унікальні теги без повторень
  
//   Відсортуй користувачів за віком (від молодших до старших)
  
//   Скільки років у сумі мають усі активні користувачі?  
users.map(u => u.tags).includes('react')
users.filter(u => u.active === true).map(u => u.contacts.email)
users.some(u => u.address.city === 'Lviv')
users.map(u => `${u.name} (${u.age}) - ${u.contacts.email}`)
const tags = users.map(u => u.tags)
const uniqeTags = [...new Set(tags)]
users.sort((a, b) => a.age - b.age)
users.reduce((a, b) => a + b.age, 0)