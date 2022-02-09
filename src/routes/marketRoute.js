import express from 'express'
const marketRouter = express.Router()
import {} from '../controllers/promotionController.js'

promotionRouter.route('/').get(getPromotions)
promotionRouter.route('/:promotionId').get(getPromotionById)
promotionRouter.route('/').post(createPromotion)
promotionRouter.route('/:promotionId').put(updatePromotionById)
promotionRouter.route('/:promotionId/live').patch(patchPromotionById)
promotionRouter.route('/:promotionId/live').delete(deletePromotionById)

export default promotionRouter
