import mongoose, { mongo } from "mongoose"

export interface Update extends mongoose.Document {
  name: string;
  body: (string | string[])[];
  tags: string[];
}

const Types = mongoose.Schema.Types;

const UpdateSchema = new mongoose.Schema<Update>({
  name: {
    type: Types.String,
    required: true,
  },
  body: {
    type: [Types.Mixed],
    required: true,
    validate: {
      validator: (arr: any[]) => {
        return arr.every(item => typeof item === 'string' || 
          (Array.isArray(item) 
            && item.every(subItem => typeof subItem === 'string')
          )
        )
      },
      message: "Body must consist of strings or string[]s."
    }
  },
  tags: {
    type: [Types.String]
  }
})

export const UpdateModel = mongoose.connection.useDb('noerkrieg').model("UPDATES", UpdateSchema, "UPDATES");

// Interfaces for nested types
interface IModifier {
  name: string;
  value: number;
}

interface IIdea {
  position: number;
  name: string;
  description?: string;
  patch: boolean;
  modifiers: IModifier[];
}

// Interface for the full Country document
export interface ICountry extends mongoose.Document {
  _id: string;
  name: string;
  ideas: IIdea[];
  culture: string;
  body: string;
}

// Create the schema
const CountrySchema = new mongoose.Schema<ICountry>({
  _id: {
    type: Types.String,
    required: true
  },
  name: {
    type: Types.String,
    required: true
  },
  ideas: {
    type: [{
      position: {
        type: Types.Number,
        required: true
      },
      name: {
        type: Types.String,
        required: true
      },
      description: Types.String,
      patch: {
        type: Types.Boolean,
        required: true
      },
      modifiers: {
        type: [{
          name: {
            type: Types.String,
            required: true
          },
          value: {
            type: Types.Number,
            required: true
          }
        }],
        validate: {
          validator: function(v: IModifier[]) {
            return v.length >= 1;
          },
          message: 'At least one modifier is required'
        }
      }
    }],
    validate: [
      {
        validator: function(v: IIdea[]) {
          return v.length >= 9;
        },
        message: 'At least 9 ideas are required'
      },
      {
        validator: function(v: IIdea[]) {
          const uniquePositions = new Set(v.map(idea => idea.position));
          return uniquePositions.size === v.length;
        },
        message: 'Ideas must have unique positions'
      }
    ]
  },
  culture: {
    type: Types.String,
    required: true
  },
  body: {
    type: Types.String,
    required: true
  }
}, {
  _id: false // Disable automatic _id generation since we're using a custom _id
});

// Create and export the model
export const CountryModel = mongoose.connection.useDb('noerkrieg').model<ICountry>("COUNTRIES", CountrySchema, "COUNTRIES");

