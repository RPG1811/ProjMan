// memberController.js

import Member, { findOne } from '../models/Member.js';

// Create a new member
export async function createMember(req, res) {
  try {
    const { memberId, email, firstName, lastName, jobTitle } = req.body;

    // Check if member with the provided ID already exists
    const existingMember = await findOne({ memberId });
    if (existingMember) {
      return res.status(400).json({ message: 'Member with provided ID already exists' });
    }

    // Create a new member
    const member = new Member({
      memberId,
      email,
      firstName,
      lastName,
      jobTitle,
    });

    // Save the member to the database
    await member.save();

    res.status(201).json({ message: 'Member created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to create member' });
  }
}

// Get a member by ID
export async function getMemberById(req, res) {
  try {
    const { memberId } = req.params;

    // Find the member by ID
    const member = await findOne({ memberId });

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.status(200).json({ member });
  } catch (error) {
    res.status(500).json({ message: 'Failed to get member' });
  }
}

// Get tasks assigned to a member
export async function getMemberTasks(req, res) {
  try {
    const { memberId } = req.params;

    // Find the member by ID and populate the assigned tasks
    const member = await findOne({ memberId }).populate('assignedTasks');

    if (!member) {
      return res.status(404).json({ message: 'Member not found' });
    }

    res.status(200).json({ tasks: member.assignedTasks });
  } catch (error) {
    res.status(500).json({ message: 'Failed to get member tasks' });
  }
}
