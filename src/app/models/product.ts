import { model, Schema } from "mongoose";

export const product = model("order", new Schema ({
	name: {
		type: String,
		required: true,
	},

	description: {
		type: String,
		required: true,
	},

	imagePath: {
		type: String,
		required: true,
	},

	price: {
		type: Number,
		required: true,
	},

	ingredients: [{
		required: true,
		name: {
			type: String,
			required: true,
		},
		icon: {
			type: String,
			required: true,
		},
	}],
	Category: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "category"
	},

}));
