import mongoose from 'mongoose'

const MarketSchema = mongoose.Schema(
  {
    marketName: { type: String, required: true },
    size: { type: Number, required: true },
    pos: { type: Number, required: true },
    phoneNumber: { type: String, required: true },
    perMonthSale: { type: Number, required: true },
    // 프로모션에 유저정보 선택저장.
    user: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
      },
    },
  },
  { timestamps: true }
)

const Market = mongoose.model('market', MarketSchema)

export { Market, MarketSchema }
