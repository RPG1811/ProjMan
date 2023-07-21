

import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
  projectId: {
    type: Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  },
  name: {
    type: String,
    required: true,
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
  assignedMember: {
    type: Schema.Types.ObjectId,
    ref: 'Member',
    required: true,
  },
  prerequisiteTasks: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }],
  state: {
    type: String,
    enum: ['Not Started', 'In Progress', 'Completed'],
    default: 'Not Started',
  },
  hoursWorked: {
    type: Number,
    default: 0,
  },
});

const Task = model('Task', taskSchema);

export default Task;
