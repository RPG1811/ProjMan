

import { Schema, model } from 'mongoose';

const projectSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  admin: {
    type: Schema.Types.ObjectId,
    ref: 'Member',
    required: true,
  },
  state: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started',
  },
  totalHoursWorked: {
    type: Number,
    default: 0,
  },
  totalProjectCost: {
    type: Number,
    default: 0,
  },
  tasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }],
});

const Project = model('Project', projectSchema);

export default Project;
