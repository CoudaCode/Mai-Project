import {Schema, model} from "mongoose"

const vehiculeSchema = new Schema({
  reference: {
    type: Schema.Types.ObjectId,
  },
  marque: {
    type: String,
    required: true,
  },
  statut: {
    type: String,
    required: true,
    enum: ["active", "non Active"],
    default : 'non Active'
  },
  place: {
    type: Number,
    required: true,
  },
});

export default model("vehicule", vehiculeSchema);

