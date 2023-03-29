const routes = (handler) => [
  // postAlbumHandler hanya menerima dan menyimpan "satu" album.
  {
    method: 'POST',
    path: '/albums',
    handler: handler.postAlbumHandler,
  },
  // getAlbumsHandler mengembalikan "banyak" album.
  {
    method: 'GET',
    path: '/albums',
    handler: handler.getAlbumsHandler,
  },
  // getAlbumByIdHandler mengembalikan "satu" album.
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: handler.getAlbumByIdHandler,
  },
  // putAlbumByIdHandler hanya menerima dan mengubah "satu" album.
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: handler.putAlbumByIdHandler,
  },
  // deleteAlbumByIdHandler menghapus "satu" album.
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: handler.deleteAlbumByIdHandler,
  },
];

module.exports = routes;
