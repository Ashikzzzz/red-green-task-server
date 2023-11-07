import express from 'express';
import { userRouter } from '../modules/user/user.route';
import { authRoute } from '../modules/auth/auth.route';
import { listRoute } from '../modules/list/list.route';
import { taskRoute } from '../modules/task/task.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: userRouter,
  },
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/list',
    route: listRoute,
  },
  {
    path: '/task',
    route: taskRoute,
  },
];

moduleRoutes.map(route => router.use(route.path, route.route));

export default router;
