import mongoose from "mongoose";

const graphSchema = mongoose.Schema(
  {
    data: [],
  },
)

const Graph = mongoose.model('Graph', graphSchema)

export default Graph