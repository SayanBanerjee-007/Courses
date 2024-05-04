import { Schema, model } from 'mongoose'

const courseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    instructor: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    enrollmentStatus: {
      type: String,
      required: true,
      enum: ['Open', 'Closed', 'In progress'],
      default: 'Open',
    },
    thumbnail: {
      type: String,
      required: true,
    },
    duration: {
      type: 'String',
      required: true,
    },
    schedule: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      default: 0,
    },
    prerequisites: [{ type: String, trim: true }],
    syllabus: [
      {
        week: {
          type: Number,
          required: true,
        },
        topic: {
          type: String,
          required: true,
        },
        content: {
          type: String,
          required: true,
        },
      },
    ],
    students: [
      {
        id: {
          type: Schema.Types.ObjectId,
          ref: 'User',
        },
        name: String,
        email: String,
      },
    ],
  },
  { timestamps: true }
)

const Course = model('Course', courseSchema)

export { Course }

// Sample Course Data
/*

name: 'Introduction to React Native',
instructor: 'John Doe',
description: 'Learn the basics of React Native development and build your first mobile app.',
enrollmentStatus: 'Open',
thumbnail: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg',
duration: '8 weeks',
schedule: 'Tuesdays and Thursdays, 6:00 PM - 8:00 PM',
location: 'Online',
prerequisites: ['Basic JavaScript knowledge', 'Familiarity with React'],
syllabus: [
{
week: 1,
topic: 'Introduction to React Native',
content: 'Overview of React Native, setting up your development environment.'
},
{
week: 2,
topic: 'Building Your First App',
content: 'Creating a simple mobile app using React Native components.'
},
],
students: [
{
id: 101,
name: 'Alice Johnson',
email: 'alice@example.com',
},
{
id: 102,
name: 'Bob Smith',
email: 'bob@example.com',
},
],

*/
