const routes = (handler) => [
  // postSongHandler hanya menerima dan menyimpan "satu" song.
  {
    method: 'POST',
    path: '/songs',
    handler: handler.postSongHandler,
  },
  // getSongsHandler mengembalikan "banyak" song.
  {
    method: 'GET',
    path: '/songs',
    handler: handler.getSongsHandler,
  },
  // getSongByIdHandler mengembalikan "satu" song.
  {
    method: 'GET',
    path: '/songs/{id}',
    handler: handler.getSongByIdHandler,
  },

  // putSongByIdHandler hanya menerima dan mengubah "satu" song.
  {
    method: 'PUT',
    path: '/songs/{id}',
    handler: handler.putSongByIdHandler,
  },
  // deleteSongByIdHandler menghapus "satu" song.
  {
    method: 'DELETE',
    path: '/songs/{id}',
    handler: handler.deleteSongByIdHandler,
  },
];

module.exports = routes;
