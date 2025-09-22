'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/conversacions/by-cid/:cid',
      handler: 'conversacion.findByCid',
      config: {
        // La autorización se gestiona mediante el API Token global
      },
    },
    {
      method: 'PUT',
      path: '/conversacions/by-cid/:cid',
      handler: 'conversacion.updateByCid',
      config: {
        // La autorización se gestiona mediante el API Token global
      },
    },
    {
      method: 'DELETE',
      path: '/conversacions/by-cid/:cid',
      handler: 'conversacion.deleteByCid',
      config: {
        // La autorización se gestiona mediante el API Token global
      },
    },
  ],
};
