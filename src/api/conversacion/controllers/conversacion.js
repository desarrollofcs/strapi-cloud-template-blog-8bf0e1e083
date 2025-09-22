'use strict';

/**
 * conversacion controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::conversacion.conversacion', ({ strapi }) => ({
  /**
   * Encuentra una conversación por su 'conversationId' personalizado.
   * @param {object} ctx - El contexto de la solicitud.
   */
  async findByCid(ctx) {
    const { cid } = ctx.params;
    const entity = await strapi.service('api::conversacion.conversacion').findByCid(cid);
    
    if (!entity) {
      return ctx.notFound('No se encontró ninguna conversación con ese ID.');
    }
    
    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  /**
   * Actualiza una conversación usando su 'conversationId' personalizado.
   * @param {object} ctx - El contexto de la solicitud.
   */
  async updateByCid(ctx) {
    const { cid } = ctx.params;
    const { body } = ctx.request;

    const entity = await strapi.service('api::conversacion.conversacion').updateByCid(cid, body.data);
    
    if (!entity) {
        return ctx.notFound('No se encontró ninguna conversación para actualizar.');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  },

  /**
   * Elimina una conversación usando su 'conversationId' personalizado.
   * @param {object} ctx - El contexto de la solicitud.
   */
  async deleteByCid(ctx) {
    const { cid } = ctx.params;
    const entity = await strapi.service('api::conversacion.conversacion').deleteByCid(cid);

    if (!entity) {
        return ctx.notFound('No se encontró ninguna conversación para eliminar.');
    }

    const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
    return this.transformResponse(sanitizedEntity);
  }
}));
