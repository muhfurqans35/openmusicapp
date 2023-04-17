const { nanoid } = require('nanoid');
const { Pool } = require('pg');
const InvariantError = require('../../exceptions/InvariantError');
const NotFoundError = require('../../exceptions/NotFoundError');

class ActivityService {
  constructor() {
    this._pool = new Pool();
  }

  async addActivities(playlistId, songId, userId, action) {
    const id = `activity-${nanoid(16)}`;
    const time = new Date().toISOString();

    const query = {
      text: 'INSERT INTO playlist_song_activities VALUES($1, $2, $3, $4, $5, $6) RETURNING id',
      values: [id, playlistId, songId, userId, action, time],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new InvariantError('Activity gagal direkam');
    }
  }

  async getActivitiesByPlaylistId(playlistId) {
    const query = {
      text: `SELECT p.id
          FROM playlists p
          INNER JOIN playlist_song_activities psa ON p.id = psa.playlist_id
          WHERE psa.playlist_id = $1`,
      values: [playlistId],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError('Activity tidak ditemukan');
    }

    return result.rows[0].id;
  }

  async getActivitiesDetail(playlistId) {
    const query = {
      text: `SELECT u.username, s.title, psa.action, psa.time
          FROM playlist_song_activities psa
          JOIN playlists p ON psa.playlist_id = p.id
          JOIN users u ON psa.user_id = u.id
          JOIN songs s ON psa.song_id = s.id
          WHERE psa.playlist_id = $1`,
      values: [playlistId],
    };

    const result = await this._pool.query(query);

    return result.rows;
  }
}

module.exports = ActivityService;
