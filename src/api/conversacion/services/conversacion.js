'use strict';

/**
 * conversacion service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::conversacion.conversacion', ({ strapi }) => ({
  /**
   * Busca la primera entrada que coincida con un 'conversationId'.
   * @param {string} cid - El 'conversationId' a buscar.
   * @returns {Promise<object|null>} La entidad encontrada o null.
   */
  async findByCid(cid) {
    const [entity] = await strapi.entityService.findMany('api::conversacion.conversacion', {
      filters: { conversationId: cid },
      limit: 1,
    });
    return entity;
  },

  /**
   * Actualiza una entrada basándose en su 'conversationId'.
   * @param {string} cid - El 'conversationId' de la entrada a actualizar.
   * @param {object} data - Los datos para actualizar.
   * @returns {Promise<object|null>} La entidad actualizada o null si no se encontró.
   */
  async updateByCid(cid, data) {
    const existing = await this.findByCid(cid);
    if (!existing) {
      return null;
    }
    const updated = await strapi.entityService.update('api::conversacion.conversacion', existing.id, { data });
    return updated;
  },
  
  /**
   * Elimina una entrada basándose en su 'conversationId'.
   * @param {string} cid - El 'conversationId' de la entrada a eliminar.
   * @returns {Promise<object|null>} La entidad eliminada o null si no se encontró.
   */
  async deleteByCid(cid) {
    const existing = await this.findByCid(cid);
    if (!existing) {
      return null;
    }
    const deleted = await strapi.entityService.delete('api::conversacion.conversacion', existing.id);
    return deleted;
  }
}));
