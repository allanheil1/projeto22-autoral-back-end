import { Router } from "express";
import restaurantController from '@/controllers/restaurantController'
import { authenticateToken, validateSchema } from '@/middlewares';
import { restaurantSchema } from '@/schemas';

const restaurantRouter = Router();

//userRouter.get('/restaurants', restaurantController.getAll)
restaurantRouter.post('/restaurants', authenticateToken, validateSchema(restaurantSchema) , restaurantController.create)

export { restaurantRouter };
