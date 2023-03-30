const routes = (handler) => [
  // postAlbumHandler hanya menerima dan menyimpan "satu" album.
  {
    method: 'POST',
    path: '/albums',
    handler: (request, h) => handler.postAlbumHandler(request, h),
  },
  // getAlbumsHandler mengembalikan "banyak" album.
  {
    method: 'GET',
    path: '/albums',
    handler: (request, h) => handler.getAlbumsHandler(request, h),
  },
  // getAlbumByIdHandler mengembalikan "satu" album.
  {
    method: 'GET',
    path: '/albums/{id}',
    handler: (request, h) => handler.getAlbumByIdHandler(request, h),
  },
  // putAlbumByIdHandler hanya menerima dan mengubah "satu" album.
  {
    method: 'PUT',
    path: '/albums/{id}',
    handler: (request, h) => handler.putAlbumByIdHandler(request, h),
  },
  // deleteAlbumByIdHandler menghapus "satu" album.
  {
    method: 'DELETE',
    path: '/albums/{id}',
    handler: (request, h) => handler.deleteAlbumByIdHandler(request, h),
  },
];

module.exports = routes;
