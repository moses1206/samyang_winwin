import mongoose from 'mongoose'
import expressAsyncHandler from 'express-async-handler'
import { Promotion } from '../models/Promotion.js'
import { User } from '../models/User.js'
const { ObjectId } = mongoose.Types

// @desc    Patch a promotion
// @route   patch   /api/promotion/:promotionId/live
// @access  Private
const patchPromotionById = expressAsyncHandler(async (req, res) => {})

export {}
