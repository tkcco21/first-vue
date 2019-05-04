export default [
  {
    id: 1,
    name: 'HOME',
    path: '/admin',
  },
  {
    id: 2,
    name: '本',
    children: [
      {
        id: 1,
        name: '本の一覧',
        path: '/admin/books',
      },
      {
        id: 2,
        name: '本の追加',
        path: '/admin/books/post',
      },
    ],
  },
];
